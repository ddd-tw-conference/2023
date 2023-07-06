import { Card, CardContent, Stack } from "@mui/joy";
import thumbnail from "@site/src/assets/cover.png";
import Image from "@theme/IdealImage";
import React, { ReactNode, memo } from "react";

const Index = memo(function Index({
  content,
  sponsorRequest,
  about,
}: {
  content: ReactNode;
  sponsorRequest: ReactNode;
  about: ReactNode;
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
      <Stack>{sponsorRequest}</Stack>
      <Card>
        <CardContent>{about}</CardContent>
      </Card>
    </Stack>
  );
});

export { Index };
