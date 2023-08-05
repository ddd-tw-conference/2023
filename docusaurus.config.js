// @ts-check

const { join } = require("node:path");

const BASE_URL = process.env["BASE_URL"] ?? "/2023/";

const title = "DDDesign TW";
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
            label: "About",
            position: "right",
            to: "about",
            type: "dropdown",
            items: [
              {
                label: "About DDDesign TW",
                href: "https://www.facebook.com",
              },
              {
                label: "Volunteers",
                to: "volunteer",
              },
            ],
          },
          {
            label: 'Sponsors',
            position: 'right',
            to: 'sponsor',
          },
          {
            label: 'Speakers',
            position: 'right',
            to: 'speaker',
          },
          {
            label: 'Program',
            position: 'right',
            to: 'program',
          },
          {
            label: "Contact Us",
            position: "right",
            to: "volunteer",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            position: 'right',
            href: 'https://dddtaiwan.kktix.cc/events/dddtwconf2023',
            html: '<button style="background: #9ABAEB;color:#242526;display: flex;padding: 9px 22px;border-radius: 4px;justify-content: center;align-items: center;gap: 10px;">Get Ticket</button>',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
    }),
  plugins: ["@docusaurus/plugin-ideal-image"],
};

module.exports = config;
