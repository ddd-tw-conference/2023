/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Book from "@site/src/assets/book.png";
import Hit from "@site/src/assets/hit.png";
import Light from "@site/src/assets/light.png";
import Image from "@theme/IdealImage";
import { memo } from "react";

const IconGroups = memo(function IconGroups() {
  const infos: {
    title: string;
    img: string;
    info: string;
  }[] = [
    {
      title: "業務驅動改變",
      img: Light,
      info: "企業在市場競爭中必須時時改變策略，但如何進行全盤思考卻往往成為一大挑戰。我們追求更好的協作方式，讓企業戰略思維能夠落地於技術實踐，並確保變革的投資能夠產出豐美的果實！",
    },
    {
      title: "認識 DDD 戰略思維",
      img: Book,
      info: "DDD 以高層次的戰略思維為指引，透過一系列實踐方法讓技術架構銜能夠接上業務的發展，為組織提供業務變化背後的技術基礎支持並帶來創新的可能性。",
    },
    {
      title: "業務與 IT 的共同目標",
      img: Hit,
      info: "成功的產品需要明確的共同目標。DDD 能夠協助衆多產品利益關係人建立共同目標,透過共同語言確保軟體實踐達成商業目標。",
    },
  ];
  const InfoImage = (props) => {
    const { item } = props;
    const imgStyle = css`
      width: 80px;
      height: 80px;
      > img {
        width: 100%;
        height: 100%;
      }
    `;

    return (
      <div css={imgStyle}>
        <Image img={item.img} />
      </div>
    );
  };
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        gap: 60px;
      `}
    >
      {infos.map((item) => (
        <div
          key={item.title}
          css={css`
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            max-width: 300px;
          `}
        >
          <InfoImage item={item} />
          <h2>{item.title}</h2>
          <p
            css={css`
              font-size: 16px;
              font-weight: 400;
            `}
          >
            {item.info}
          </p>
        </div>
      ))}
    </div>
  );
});

export { IconGroups };
