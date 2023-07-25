/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Program } from "@site/src/layout/Program";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout>
      <Program
        content={createElement(
          require("@site/src/content/zh-Hant/program.mdx").default
        )}
      />
    </Layout>
  );
}
