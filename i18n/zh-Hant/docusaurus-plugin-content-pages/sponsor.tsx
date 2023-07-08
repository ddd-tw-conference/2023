import { Sponsor } from "@site/src/layout/Sponsor";
import Layout from "@theme/Layout";
import React, { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Join Us as a Sponsor"
      description="誠摯邀請您加入我們的行列，這會是您品牌形象絕佳的曝光機會！"
    >
      <Sponsor
        content={createElement(
          require("@site/src/content/zh-Hant/sponsorRequest.mdx").default
        )}
      />
    </Layout>
  );
}
