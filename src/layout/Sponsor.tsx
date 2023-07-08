/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Stack } from "@mui/joy";
import thumbnail from "@site/src/assets/radission-us-_XeQ8XEWb4Q-unsplash.jpg";
import Image from "@theme/IdealImage";
import { ReactNode, memo } from "react";

const Sponsor = memo(function Sponsor({ content }: { content: ReactNode }) {
  return (
    <Stack
      className="container"
      sx={{
        gap: "2rem",
        mb: "5rem",
      }}
    >
      <Image img={thumbnail} />
      <Stack>{content}</Stack>
    </Stack>
  );
});

export { Sponsor };
