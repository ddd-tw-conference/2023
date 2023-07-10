/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Box, Stack } from "@mui/joy";
import thumbnail from "@site/src/assets/radission-us-_XeQ8XEWb4Q-unsplash.jpg";
import { FocusButton } from "@site/src/components/FocusButton";
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
      <FocusButton
        component="a"
        href="https://drive.google.com/file/d/1jIz4AN0DFuJ11mY-gQptlLc7JYf5-W1s/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box
          sx={{
            fontSize: "1.5em",
          }}
        >
          Join Us
        </Box>
        <Box>as a Sponsor</Box>
      </FocusButton>
    </Stack>
  );
});

export { Sponsor };
