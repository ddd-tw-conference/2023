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
        "Beyond mere knowledge absorption, it is crucial to establish connections and seek inspiration!"
      </p>
      <div
        css={css`
          font-size: 16px;
        `}
      >
        <p>
          DDD, since the publication of Eric Evans' first book in 2003, has
          profoundly influenced the global software industry for over 20 years.
          With the increasing complexity of business requirements and the rise
          of microservices architecture, DDD has become a guiding principle in
          various technical and software design practices.
        </p>

        <p>
          Beyond technical implementation, DDD also encompasses a cultural and
          mindset shift within teams: how to align business and IT goals, enable
          technology to accommodate business-driven changes, and even allow
          technology to lead the way for the business.
        </p>

        <p>
          This year's theme is "Inspiration," aiming to break down barriers and
          foster exchanges among professionals from diverse backgrounds and
          fields, sparking new ideas.
        </p>

        <p>
          Therefore, we will invite both domestic and international experts in
          Domain-Driven Design to share their experiences. We hope that
          attendees at all levels can be inspired and bring about meaningful
          changes through talks, interactive sessions, and workshops.
        </p>
      </div>
    </div>
  );
});

export { Info };
