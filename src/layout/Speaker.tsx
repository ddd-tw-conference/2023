/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Stack, Typography } from '@mui/joy';
import thumbnail from '@site/src/assets/speaker-banner.png';
import { programer_type } from '@site/src/model/Speakers';
import Image from '@theme/IdealImage';
import { ReactNode, memo } from 'react';

const Speaker = memo(function Speaker({
  content,
  speaker,
}: {
  content: ReactNode;
  speaker: programer_type;
}) {
  return (
    <Stack
      className="container"
      sx={{
        gap: '2rem',
        mb: '5rem',
      }}
    >
      <Image img={thumbnail} />

      <Stack
        sx={{
          bgcolor: 'rgba(118, 109, 148, 0.40)',
          borderRadius: '4px',
          padding: '60px',
          display: 'flex',
          flexDirection: 'row',
          gap: '23px',
          flexWrap: 'wrap',
        }}
      >
        <Stack
          sx={{
            width: '276px',
            height: '220px',
            objectFit: 'contain',
          }}
        >
          <Image img={speaker.photo} />
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 'calc(100% - 359px)',
            gap: '12px',
          }}
        >
          <Typography
            level="h4"
            fontSize="md"
            textAlign="left"
            sx={{ mb: 0.5, textWrap: 'nowrap' }}
          >
            {speaker.name}
          </Typography>
          <Stack
            sx={{
              fontSize: '1rem',
              minWidth: '230px',
            }}
          >
            {content}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
});

export { Speaker };
