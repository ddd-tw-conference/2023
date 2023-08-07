/** @jsx jsx */
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { jsx } from "@emotion/react";
import useFindSpeaker from "@site/src/hook/useFindSpeaker";
import useIsEmpty from "@site/src/hook/useIsEmpty";
import { Speaker } from "@site/src/layout/Speaker";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const speaker = useFindSpeaker() as any;

  if (useIsEmpty(speaker)) return null;

  return (
    <Layout description={siteConfig.tagline}>
      <Speaker
        content={createElement(
          require(`@site/src/content/zh-Hant/speakers/${speaker.slug}.mdx`)
            .default
        )}
        speaker={{ ...speaker.zh, ...speaker }}
      />
    </Layout>
  );
}
