/** @jsx jsx */
import Link from "@docusaurus/Link";
import { css, jsx } from "@emotion/react";
import DDDlogo from "@site/src/assets/ddd.png";
import Image from "@theme/IdealImage";
import { memo } from "react";

const imageStyle = css`
  min-width: 172px;
  min-height: 162px;
  > img {
    width: 100%;
    height: 100%;
  }
`;

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
        <div css={imageStyle}>
          <Image img={DDDlogo} />
        </div>

        <p>
          DDDTW community is dedicated to promoting the widely adopted
          methodology of Domain-Driven Design in Taiwan. Over the past five
          years, we have organized hundreds of events throughout Taiwan,
          attracting thousands of people to understand and practice DDD. We are
          thrilled to announce that the 3rd DDDesign TW Annual Conference will
          be held on September 16, 2023, at the Social Sciences Institute of
          National Taiwan University. This year's theme is ""Inspiration,""
          aiming to inspire participants and drive meaningful changes through
          firsthand practical experiences. In our pursuit of better event
          quality, we sincerely invite your company to sponsor this year's
          annual conference. Join us in this grand celebration of the software
          industry! The event is expected to attract nearly 500 software
          professionals and feature 13 keynote speeches and 3 workshops, with
          speakers including practitioners and consultants from Taiwan, DDD_EU,
          and DDD China. We welcome your sponsorship to propel businesses
          forward with technology!
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
            Join Us as a Sponsor
          </Link>
        </button>
      </div>
    </div>
  );
});

export { DDDinfo };
