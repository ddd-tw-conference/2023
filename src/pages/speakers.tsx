/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Program } from "@site/src/layout/Speaker";
import { PROGRAMER } from "@site/src/model/Speakers";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  const speakers = PROGRAMER.map((speaker) => speaker.en);

  return (
    <Layout>
      <Program
        content={createElement(
          require("@site/src/content/en/speaker.mdx").default
        )}
        speakers={speakers}
      />
    </Layout>
  );
}
