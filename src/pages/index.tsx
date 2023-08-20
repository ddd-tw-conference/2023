/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Index } from "@site/src/layout/Index";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout description="DDD 年會團隊在此正式宣佈：DDDTW 領域驅動設計年會，即將於 9/16, 9/17 盛大舉辦！本次年會主題為：「啟發」。依循著過去的足跡，期望讓參與者在活動中感受到 DDD 的創新與靈感，啟發參與者在日常工作中應用 DDD 的可能性。">
      <Index
        content={createElement(
          require("@site/src/content/zh-Hant/index.mdx").default
        )}
      />
    </Layout>
  );
}
