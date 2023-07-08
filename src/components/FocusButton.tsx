/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button } from "@mui/joy";
import { forwardRef } from "react";

const FocusButton: typeof Button = forwardRef(function FocusButton(
  { children, ...props }: any,
  ref: any
) {
  return (
    <Button
      css={css`
        font-size: 1.54em;
        margin: 1em auto;
        padding: 0.5em;
        text-align: center;
        transition: all 0.2s ease-in-out;
        gap: 0.25em;
        &:hover {
          gap: 0;
          transform: scale(1.1);
        }
      `}
      {...props}
      ref={ref}
    >
      <div>👉</div>
      <div>{children}</div>
      <div>👈</div>
    </Button>
  );
}) as any;

export { FocusButton };
