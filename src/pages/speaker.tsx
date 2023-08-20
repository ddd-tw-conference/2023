/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Speakers } from "@site/src/layout/Speakers";
import { PROGRAMER } from "@site/src/model/Speakers";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  const speakers = PROGRAMER.map((speaker) => {
    return {
      ...speaker.zh,
      photo: speaker.photo,
      slug: speaker.en.name.toLowerCase().replace(" ", "_"),
    };
  });

  return (
    <Layout>
      <Speakers
        content={createElement(
          require("@site/src/content/zh-Hant/speaker.mdx").default
        )}
        speakers={speakers}
      />
    </Layout>
  );
}
