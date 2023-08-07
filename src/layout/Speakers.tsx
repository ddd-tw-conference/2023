/** @jsx jsx */
import Link from "@docusaurus/Link";
import { css, jsx } from "@emotion/react";
import { Card, Stack, Typography } from "@mui/joy";
import thumbnail from "@site/src/assets/program-banner.png";
import { programer_type } from "@site/src/model/Speakers";
import Image from "@theme/IdealImage";
import { ReactNode, memo } from "react";

const Speakers = memo(function Speakers({
  content,
  speakers,
}: {
  content: ReactNode;
  speakers: programer_type[];
}) {
  console.log("🚀 ~ speakers:", speakers);

  return (
    <Link>
      <Stack
        className="container"
        sx={{
          gap: "2rem",
          mb: "5rem",
        }}
      >
        <Image img={thumbnail} />

        <Typography
          level="h2"
          fontSize="md"
          textAlign="center"
          sx={{ mb: 0.5 }}
        >
          {content}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          flexWrap="wrap"
          justifyContent="flex-start"
        >
          {speakers.map((speaker, index) => {
            return (
              <Card key={index} variant="outlined" sx={{ width: 300 }}>
                <div
                  css={css`
                    width: 276px;
                    height: 220px;
                    object-fit: contain;
                    display: flex;
                    justify-content: center;
                  `}
                >
                  <Link to={`/speaker/${speaker.slug}`}>
                    <Image img={speaker.photo} />
                  </Link>
                </div>
                <Typography
                  level="h2"
                  fontSize="md"
                  textAlign="center"
                  sx={{ mb: 0.5 }}
                >
                  {speaker.name}
                </Typography>
              </Card>
            );
          })}
        </Stack>
      </Stack>
    </Link>
  );
});

export { Speakers };
