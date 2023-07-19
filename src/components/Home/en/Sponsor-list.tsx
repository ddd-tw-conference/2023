/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Logo104 from "@site/src/assets/104.png";
import JetBrains from "@site/src/assets/jet-brains.png";
import { Daddy } from "@site/src/icons/Daddy";
import { SugarDaddy } from "@site/src/icons/SugarDaddy";
import Image from "@theme/IdealImage";
import { memo } from "react";

const SponsorList = memo(function SponsorList() {
  const sponsors = {
    sugarDaddy: [
      {
        company: "104",
        img: Logo104,
      },
    ],

    daddy: [
      {
        company: "Jet Brains",
        img: JetBrains,
      },
    ],
  };

  const SponsorImage = (props) => {
    const { item, style } = props;
    const imgStyle = css`
      ${style}
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 60px;
      `}
    >
      <div
        css={css`
          text-align: center;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            margin-bottom: 21px;
          `}
        >
          <SugarDaddy />
          <h2
            css={css`
              margin: 0;
            `}
          >
            Gold Sponsors
          </h2>
          <SugarDaddy />
        </div>

        {sponsors.sugarDaddy.map((item) => (
          <div
            key={item.company}
            css={css`
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              max-width: 300px;
            `}
          >
            <SponsorImage item={item} style="width: 100%;" />
          </div>
        ))}
      </div>

      <div
        css={css`
          text-align: center;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            margin-bottom: 21px;
          `}
        >
          <Daddy />
          <h2
            css={css`
              margin: 0;
            `}
          >
            Special Sponsors
          </h2>
          <Daddy />
        </div>

        {sponsors.daddy.map((item) => (
          <div
            key={item.company}
            css={css`
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              max-width: 300px;
            `}
          >
            <SponsorImage
              item={item}
              style="object-fit: contain;
                scale: 1.5;"
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export { SponsorList };
