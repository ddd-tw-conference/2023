import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Index } from "@site/src/layout/Index";
import Layout from "@theme/Layout";
import React, { createElement } from "react";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`中文 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Index
        content={createElement(
          require("@site/src/content/zh-Hant/index.mdx").default
        )}
        sponsorRequest={createElement(
          require("@site/src/content/zh-Hant/sponsorRequest.mdx").default
        )}
      />
    </Layout>
  );
}
