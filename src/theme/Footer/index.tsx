/** @jsx jsx */
import Link from "@docusaurus/Link";
import type { WrapperProps } from "@docusaurus/types";
import { jsx } from "@emotion/react";
import { Box } from "@mui/joy";
import { FocusButton } from "@site/src/components/FocusButton";
import type FooterType from "@theme/Footer";
import { Contacts } from "./Contacts";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(_props: Props): JSX.Element {
  return (
    <footer className="footer">
      <div className="container container-fluid">
        <div className="row ">
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
        </div>
        <div className="row footer__links">
          <Contacts />
        </div>
        <div className="footer__bottom text--center">
          <div className="footer__copyright">
            Copyright © 2023 Domain Driven Design Taiwan.
          </div>
        </div>
      </div>
    </footer>
  );
}
