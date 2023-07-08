/** @jsx jsx */
import Link from "@docusaurus/Link";
import { jsx } from "@emotion/react";
import { Box, Card, CardContent, Stack } from "@mui/joy";
import thumbnail from "@site/src/assets/cover.png";
import Image from "@theme/IdealImage";
import { ReactNode, memo } from "react";
import { FocusButton } from "../components/FocusButton";

const Index = memo(function Index({
  content,
  sponsorRequest,
}: {
  content: ReactNode;
  sponsorRequest: ReactNode;
}) {
  return (
    <Stack
      className="container"
      sx={{
        gap: "2rem",
        mb: "5rem",
      }}
    >
      <Image img={thumbnail} />
      <Card>
        <CardContent>{content}</CardContent>
      </Card>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          flexDirection: "column",
          flexWrap: "wrap",
          ".MuiButton-root": {
            margin: 0,
          },
        }}
      >
        <FocusButton
          component="a"
          href="https://dddtaiwan.kktix.cc/events/dddtwconf2023"
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
          <Box>as a Problem Resolver</Box>
        </FocusButton>
        <Box
          sx={{
            display: "inherit",
            gap: "inherit",
            alignItems: "inherit",
            justifyContent: "inherit",
            flexWrap: "inherit",
          }}
        >
          <FocusButton component={Link} to="sponsor">
            <Box
              sx={{
                fontSize: "1.5em",
              }}
            >
              Join Us
            </Box>
            <Box>as a Sponsor</Box>
          </FocusButton>
          <FocusButton component={Link} to="volunteer">
            <Box
              sx={{
                fontSize: "1.5em",
              }}
            >
              Join Us
            </Box>
            <Box>as a Volunteer</Box>
          </FocusButton>
        </Box>
      </Box>
    </Stack>
  );
});

export { Index };
