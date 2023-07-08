import { Volunteer } from "@site/src/layout/Volunteer";
import Layout from "@theme/Layout";
import React, { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Join Us as a Volunteer"
      description="隨著年會即將舉辦，我們仍舊需要更多的志工夥伴的加入，一起參與年會籌備，一起將年會舉辦的更完美！"
    >
      <Volunteer
        content={createElement(
          require("@site/src/content/zh-Hant/volunteer.mdx").default
        )}
      />
    </Layout>
  );
}
