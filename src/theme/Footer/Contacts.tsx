/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Box, IconButton, Stack } from "@mui/joy";
import { MaterialSymbolsGroupsOutlineSharp } from "@site/src/icons/GroupsOutlineSharp";
import { IcBaselineFacebook } from "@site/src/icons/IcBaselineFacebook";
import { MaterialSymbolsMail } from "@site/src/icons/MaterialSymbolsMail";
import { MdiFacebookMessenger } from "@site/src/icons/MdiFacebookMessenger";
import { MdiInstagram } from "@site/src/icons/MdiInstagram";
import { MdiTwitter } from "@site/src/icons/MdiTwitter";
import { MdiYoutube } from "@site/src/icons/MdiYoutube";
import { ReactNode, memo } from "react";

const contacts: {
  icon: ReactNode;
  link: string;
}[] = [
  {
    icon: <MaterialSymbolsMail />,
    link: "mailto:conference@ddd-tw.com",
  },
  {
    icon: <MdiFacebookMessenger />,
    link: "https://m.me/DDDCommunity.tw",
  },
  {
    icon: <MdiTwitter />,
    link: "https://twitter.com/DddTaiwan",
  },
  {
    icon: <MdiInstagram />,
    link: "https://www.instagram.com/ddd_twig",
  },
  {
    icon: <IcBaselineFacebook />,
    link: "https://www.facebook.com/DDDCommunity.tw",
  },
  {
    icon: <MaterialSymbolsGroupsOutlineSharp />,
    link: "https://www.facebook.com/groups/dddtaiwan",
  },
  {
    icon: <MdiYoutube />,
    link: "https://www.youtube.com/channel/UCydw7dbEksG3axEMjHy4BxQ",
  },
];

const Contacts = memo(function Contacts() {
  return (
    <Stack
      css
      component="ul"
      direction="row"
      width="100%"
      gap="1rem"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      m="2rem"
      pl={0}
    >
      {contacts.map(({ icon, link }) => (
        <Box
          key={link}
          component="li"
          sx={{
            display: "block",
          }}
        >
          <IconButton component="a" target="_blank" href={link} size="lg">
            {icon}
          </IconButton>
        </Box>
      ))}
    </Stack>
  );
});

export { Contacts };
