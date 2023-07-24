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
    img: Img;
    info: string;
  }[] = [
    {
      title: "Business-Driven",
      img: Light,
      info: "In the competitive market, businesses must constantly change their strategies. However, the challenge lies in how to conduct comprehensive thinking. We strive for better collaboration methods that allow business strategic thinking to be implemented in technical practices and ensure that investments in change yield fruitful results!",
    },
    {
      title: "DDD Strategic Thinking",
      img: Book,
      info: "DDD, guided by a high-level strategic mindset, employs a series of practical methods to enable the alignment of technical architecture with business development. It provides organizations with the foundational technical support behind business changes and unlocks possibilities for innovation.",
    },
    {
      title: "Shared Goals of Business and IT",
      img: Hit,
      info: "Successful products require clear shared goals. DDD can assist numerous product stakeholders in establishing common objectives and ensuring that software practices align with business goals through a shared language.",
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
