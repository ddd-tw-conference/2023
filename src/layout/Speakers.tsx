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
  return (
    <Stack
      className="container"
      sx={{
        gap: "2rem",
        mb: "5rem",
      }}
    >
      <Image img={thumbnail} />

      <Typography level="h2" fontSize="md" textAlign="center" sx={{ mb: 0.5 }}>
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
            <Card
              key={index}
              variant="outlined"
              sx={{ width: 300 }}
              component={Link}
              to={`/speaker/${speaker.slug}`}
              css={css`
                transition: transform 0.3s ease;
                text-decoration: none;
                &:hover {
                  transform: scale(1.05);
                  text-decoration: none;
                  font-weight: 700;
                  color: var(--ifm-color-primary);
                }
              `}
            >
              <div
                css={css`
                  width: 276px;
                  height: 220px;
                  object-fit: contain;
                  display: flex;
                  justify-content: center;
                `}
              >
                <Image img={speaker.photo} />
              </div>
              <Typography
                level="h2"
                fontSize="md"
                textAlign="center"
                sx={{ mb: 0.5, color: "inherit" }}
              >
                {speaker.name}
              </Typography>
            </Card>
          );
        })}
      </Stack>
    </Stack>
  );
});

export { Speakers };
