/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { memo } from "react";

const Info = memo(function Info() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        color: #fff;
        width: 100%;
        text-align: center;
      `}
    >
      <p
        css={css`
          font-size: 28px;
          font-weight: 600;
        `}
      >
        「 不單只是吸收知識，更要創造連結與獲得啟發！」
      </p>
      <div
        css={css`
          font-size: 16px;
        `}
      >
        <p>
          DDD 自 Eric Evans 於 2003
          年出版第一本書以來，已深刻影響全球軟體業界超過 20 年。
          隨着業務需求複雜化與微服務架構的熱潮， DDD
          也成爲各種技術與軟體設計的指導原則。
        </p>

        <p>
          在技術實踐以外， DDD 更關乎團隊文化與心態的轉變:如何實現業務與 IT
          的共同目標、如何讓技術承接上業務驅動的改變，甚至讓技術帶領業務前進！
        </p>

        <p>
          今年主題爲「啟發」，我們希望不同背景與專業的人士能打破藩籬來互相交流，並激發出思想的火花。
        </p>

        <p>
          因此，我們將邀請國內外的領域驅動設計實踐家來分享經驗，希望觀衆不論程度都能從演講、互動環節、工作坊中獲得啟發並產生改變。
        </p>
      </div>
    </div>
  );
});

export { Info };
