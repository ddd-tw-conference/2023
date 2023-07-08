/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Button, ButtonProps, ButtonTypeMap } from "@mui/joy";
import { ElementType, forwardRef } from "react";

const FocusButton: typeof Button = forwardRef(function FocusButton<
  D extends ElementType = ButtonTypeMap["defaultComponent"],
  P = {
    component?: ElementType;
  }
>(props: ButtonProps<D, P>, ref) {
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
    />
  );
}) as any;

export { FocusButton };
