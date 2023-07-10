/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Box, Stack } from "@mui/joy";
import thumbnail from "@site/src/assets/jaime-lopes-0RDBOAdnbWM-unsplash.jpg";
import Image from "@theme/IdealImage";
import { ReactNode, memo } from "react";
import { FocusButton } from "../components/FocusButton";

const Volunteer = memo(function Volunteer({ content }: { content: ReactNode }) {
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
        target="_blank"
        rel="noopener noreferrer"
        href="https://forms.gle/1N5HdoV2X67VF4cw5"
      >
        <Box
          sx={{
            fontSize: "1.5em",
          }}
        >
          Join Us
        </Box>
        <Box>as a Volunteer</Box>
      </FocusButton>
    </Stack>
  );
});

export { Volunteer };
