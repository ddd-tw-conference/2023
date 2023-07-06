import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Index } from "@site/src/layout/Index";
import Layout from "@theme/Layout";
import React, { createElement } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Index
        content={createElement(
          require("@site/src/content/en/index.mdx").default
        )}
        sponsorRequest={createElement(
          require("@site/src/content/en/sponsorRequest.mdx").default
        )}
        about={createElement(require("@site/src/content/en/about.mdx").default)}
      />
    </Layout>
  );
}
