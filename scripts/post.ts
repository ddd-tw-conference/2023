import { load } from "cheerio";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
import urlJoin from "url-join";
import agendas from "../src/data/agendaData";
import speakers from "../src/data/speakersData";

const baseUrl = "https://conference.ddd-tw.com/2023";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const otherPages = [
  {
    path: "about",
    title: "大會資訊",
    description:
      "Domain Driven Design Taiwan (DDD Taiwan) 致力於在台灣推廣領域驅動的設計與實踐思維，並使軟體開發/非軟體開發的工作者皆能透過 DDD 在專案執行上從設計到實踐流暢、促進團隊、並產生出具有價值的產品與服務，更期許與世界的 DDD 領域專家接軌交流。",
  },
  {
    path: "volunteer",
    title: "志工資訊",
    description:
      "DDD Taiwan 將於 2023 / 09 /16~17 日舉辦第三屆年會。隨著年會即將舉辦，我們仍舊需要更多的志工夥伴的加入，一起參與年會籌備，一起將年會舉辦的更完美！來參與志工的你可以學習規劃與舉辦研討會的方式、接觸更多軟體開發的知識、拓展人脈、建立連結、獲得和團隊一起共同完成目標的成就感。不用再猶豫了！一起加入我們吧！",
  },
  {
    path: "speakers",
    title: "講師介紹",
    description:
      "蒼時弦也, Arthur, Chris Simon, David Ko, 王威, Ean, Fong, James, 程章尧, 黃健旻, 倪國凱, Kim, Kuma Syu, Lex Liu, 魏宣德, Michael, Miles, 雷N, Nina, Soking, 劉宥辰, Stephen Tung, 高松, 陳建村, Vlad Khononov, 水球潘, 邱凡遠",
  },
  {
    path: "agendaDayOne",
    title: "實體講座",
    description: "2023/09/16 講座分為：Keynotes、講座及工作坊共三類型。",
  },
  {
    path: "agendaDayTwo",
    title: "線上講座",
    description: "2023/09/17 本日講座皆為線上講座，請待在合適地方上線即可。",
  },
] satisfies Array<{
  path: string;
  title: string;
  description: string;
}>;

function formatDescription(description: string): string {
  return description.replace(/[ \n]+/g, " ").trim();
}

(async function main() {
  const siteMapFiles: string[] = ["index.html"];
  const indexHtml = await fs.readFile(path.join(distDir, "index.html"), "utf8");
  const $ = load(indexHtml);
  const siteTitle = $("head title").text();
  await Promise.all(
    otherPages.map(async (page) => {
      const $ = load(indexHtml);
      const title = page.title || siteTitle;
      const fullTitle =
        !title || title === siteTitle ? title : `${title} - ${siteTitle}`;
      const appEl = $("#app");
      $("head title").text(fullTitle);
      $("head meta[name=description]").attr(
        "content",
        formatDescription(page.description)
      );
      appEl.append(`<h1>${title}</h1>`);
      const relatedPath = `${page.path}.html`;
      const targetPath = path.join(distDir, relatedPath);
      await fs.writeFile(targetPath, $.html(), "utf8");
      siteMapFiles.push(relatedPath);
    })
  );
  await fs.mkdirp(path.join(distDir, "speakers"));
  await Promise.all(
    speakers.map(async (speaker) => {
      const $ = load(indexHtml);
      const title = speaker.name || siteTitle;
      const fullTitle =
        !title || title === siteTitle ? title : `${title} - ${siteTitle}`;
      const appEl = $("#app");
      $("head title").text(fullTitle);
      $("head meta[name=description]").attr(
        "content",
        formatDescription(speaker.bio)
      );
      appEl.append(`<h1>${title}</h1>`);
      const relatedPath = path.join("speakers", `${speaker.name}.html`);
      const targetPath = path.join(distDir, relatedPath);
      await fs.writeFile(targetPath, $.html(), "utf8");
      siteMapFiles.push(urlJoin("speakers", encodeURIComponent(speaker.name)));
    })
  );
  await fs.mkdirp(path.join(distDir, "agenda"));
  await Promise.all(
    agendas.map(async (agenda) => {
      const $ = load(indexHtml);
      const title = agenda.topic || siteTitle;
      const fullTitle =
        !title || title === siteTitle ? title : `${title} - ${siteTitle}`;
      const appEl = $("#app");
      $("head title").text(fullTitle);
      $("head meta[name=description]").attr(
        "content",
        formatDescription(agenda.intro || agenda.content)
      );
      appEl.append(`<h1>${title}</h1>`);
      const relatedPath = path.join("agenda", `${agenda.id}.html`);
      const targetPath = path.join(distDir, relatedPath);
      await fs.writeFile(targetPath, $.html(), "utf8");
      siteMapFiles.push(relatedPath);
    })
  );
  await fs.writeFile(
    path.join(distDir, "sitemap.txt"),
    siteMapFiles
      .map((file) =>
        file === "index.html"
          ? baseUrl + "/"
          : urlJoin(baseUrl, file).replace(/\.html$/, "")
      )
      .join("\n"),
    "utf8"
  );
})().catch((err) => {
  console.trace(err);
  process.exit(1);
});
