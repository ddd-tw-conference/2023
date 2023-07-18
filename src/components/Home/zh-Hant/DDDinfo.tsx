/** @jsx jsx */
import Link from "@docusaurus/Link";
import { css, jsx } from "@emotion/react";
import DDDlogo from "@site/src/assets/ddd.png";
import { memo } from "react";

const DDDinfo = memo(function DDDinfo() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 48px;
        background: rgba(118, 109, 148, 0.4);
        padding: 60px;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          alt="ddd-logo"
          src={DDDlogo}
          css={css`
            width: 172px;
            height: 162px;
          `}
        />
        <p>
          DDDTW 社群致力於推廣 Domain-Driven Design
          此一風行全球的方法論在臺灣扎根。五年來，我們已經於全臺舉辦了上百場活動，吸引上千人來理解甚至實踐
          DDD。 我們即將於 2023/09/16  於臺大社科院盛大舉辦第三屆的 DDDesign TW
          年會！今年的主題是「啟發」，希望參與者們能從第一線的實踐經驗中獲得啟發並產生改變！
          爲了追求更好的活動品質，僅代表社群誠摯地邀請貴公司贊助今年的年會活動，一起加入這場軟體業界的盛宴中！
          本活動預計吸引將近 500 名軟體從業人員參加，加上 13 場演講與 3 場工作坊
          （講師包含來自臺灣、DDD_EU 與 DDD China
          的實踐者與顧問），歡迎贊助我們，讓技術帶領業務前進！
        </p>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <button
          css={css`
            border-radius: 4px;
            padding: 9px 22px;
            background: #9ad7eb;
            color: #242526;
            font-size: 16px;
            font-weight: 600;
          `}
        >
          <Link
            to="/sponsor"
            css={css`
              color: #242526;
              :hover {
                color: #242526;
                text-decoration: none;
              }
            `}
          >
            企業贊助
          </Link>
        </button>
      </div>
    </div>
  );
});

export { DDDinfo };
