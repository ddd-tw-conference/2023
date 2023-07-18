/** @jsx jsx */
import { useLocation } from "@docusaurus/router";
import type { WrapperProps } from "@docusaurus/types";
import { jsx } from "@emotion/react";
import type FooterType from "@theme/Footer";
import { Contacts } from "./Contacts";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(_props: Props): JSX.Element {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="container container-fluid">
        {location.pathname.endsWith("/sponsor") ||
        location.pathname.endsWith("/sponsor/") ? null : (
          <div className="row "></div>
        )}
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
