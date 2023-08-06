/** @jsx jsx */
import Link from "@docusaurus/Link";
import { css, jsx } from "@emotion/react";
import { Card, Stack, Typography } from "@mui/joy";
import thumbnail from "@site/src/assets/program-banner.png";
import { PROGRAMER, programer_type } from "@site/src/model/Speakers";
import Image from "@theme/IdealImage";
import { ReactNode, memo } from "react";

const Program = memo(function Program({
  content,
  speakers,
}: {
  content: ReactNode;
  speakers: programer_type[];
}) {
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
          {PROGRAMER.map((programer, index) => {
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
                  <Image img={programer.photo} />
                </div>
                <Typography
                  level="h2"
                  fontSize="md"
                  textAlign="center"
                  sx={{ mb: 0.5 }}
                >
                  {speakers[index].name}
                </Typography>
              </Card>
            );
          })}
        </Stack>
      </Stack>
    </Link>
  );
});

export { Program };
