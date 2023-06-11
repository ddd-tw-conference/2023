// @ts-check

const title = "DDDesign TW Conference 2023";
const description =
  'The theme of this year\'s conference is "Inspiration." We are collecting real stories from DDD practitioners from around the world and inviting them to share their journey of change, experiences, and growth.';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: description,
  favicon: "img/favicon.png",
  url: "https://conference.ddd-tw.com",
  baseUrl: "/2023/",
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
