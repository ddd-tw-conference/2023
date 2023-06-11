/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { ReactNode, memo } from "react";

const CustomBulletUl = memo(function CustomBulletUl({
  children,
  bullet = "- ",
}: {
  children: ReactNode;
  bullet?: string;
}) {
  return (
    <ul
      css={css`
        list-style: none;
        padding: 0;
        margin: 0;
        & > li {
          padding-left: 1rem;
          text-indent: -0.75rem;
          &:before {
            content: "${bullet.replace(/"/g, '\\"')}";
          }
        }
      `}
    >
      {children}
    </ul>
  );
});

export { CustomBulletUl };
