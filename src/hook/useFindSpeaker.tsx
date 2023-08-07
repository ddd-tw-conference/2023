import { PROGRAMER } from "@site/src/model/Speakers";
import { useEffect, useState } from "react";

const useFindSpeaker = () => {
  const [speaker, setSpeaker] = useState({});

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const speakerName = path[path.length - 1];
    console.log(speakerName);
    const speaker = PROGRAMER.find(
      (speaker) =>
        speaker.en.name.toLowerCase().replace(" ", "_") === speakerName
    );

    setSpeaker({
      ...speaker,
      photo: speaker.photo,
      slug: speaker.en.name.toLowerCase().replace(" ", "_"),
    });
  }, []);

  return speaker;
};

export default useFindSpeaker;
