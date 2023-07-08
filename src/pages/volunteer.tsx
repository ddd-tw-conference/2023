/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Volunteer } from "@site/src/layout/Volunteer";
import Layout from "@theme/Layout";
import { createElement } from "react";

export default function Page(): JSX.Element {
  return (
    <Layout
      title="Join Us as a Volunteer"
      description="As the conference approaches, we are still in need of more volunteer partners to join us, to participate in the conference preparations, and to make the event even more perfect together!"
    >
      <Volunteer
        content={createElement(
          require("@site/src/content/en/volunteer.mdx").default
        )}
      />
    </Layout>
  );
}
