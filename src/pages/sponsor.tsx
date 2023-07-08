/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Sponsor } from "@site/src/layout/Sponsor";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Join Us as a Sponsor"
      description="We sincerely invite you to join us, as this will be an excellent opportunity for your brand to gain exposure!"
    >
      <Sponsor
        content={createElement(
          require("@site/src/content/en/sponsorRequest.mdx").default
        )}
      />
    </Layout>
  );
}
