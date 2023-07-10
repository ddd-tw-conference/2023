/** @jsx jsx */
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { jsx } from "@emotion/react";
import { Index } from "@site/src/layout/Index";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Index
        content={createElement(
          require("@site/src/content/en/index.mdx").default
        )}
      />
    </Layout>
  );
}
