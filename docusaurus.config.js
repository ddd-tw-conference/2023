// @ts-check

const { join } = require("node:path");

const BASE_URL = process.env["BASE_URL"] ?? "/2023/";

const title = "DDDesign TW Conference 2023";
const description =
  'The DDDesign TW team is pleased to announce the official dates for the DDDesign TW Conference, which will be held on September 16th and 17th. The theme of this year\'s conference is "Inspire." Building on our past successes, we aim to provide participants with a unique opportunity to experience the innovation and inspiration of DDD and discover the potential applications of DDD in their everyday work.';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  favicon: join(BASE_URL, "img/favicon.png"),
  url: "https://conference.ddd-tw.com",
  baseUrl: BASE_URL,
  organizationName: "ddd-tw-conference",
  projectName: "2023",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hant"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/cover.jpg",
      navbar: {
        hideOnScroll: true,
        title,
        logo: {
          alt: "inspire",
          src: "img/favicon.png",
        },
        items: [
          {
            label: "Join Us as a Volunteer",
            position: "right",
            to: "volunteer",
          },
          {
            label: "Join Us as a Problem Resolver",
            position: "right",
            href: "https://dddtaiwan.kktix.cc/events/dddtwconf2023",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
    }),
  plugins: ["@docusaurus/plugin-ideal-image"],
};

module.exports = config;
