import thumbnail from "@site/src/assets/cover.png";
import Image from "@theme/IdealImage";
import React, { ReactNode, memo } from "react";

const Index = memo(function Index({
  content,
  sponsorRequest,
}: {
  content: ReactNode;
  sponsorRequest: ReactNode;
}) {
  return (
    <div className="container">
      <Image img={thumbnail} />
      {content}
      {sponsorRequest}
    </div>
  );
});

export { Index };
