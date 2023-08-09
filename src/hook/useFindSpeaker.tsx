import { PROGRAMER } from '@site/src/model/Speakers';
import { useEffect, useState } from 'react';

const useFindSpeaker = () => {
  const [speaker, setSpeaker] = useState(PROGRAMER[0]);

  useEffect(() => {
    const path = window.location.pathname.split('/');
    console.log('🚀 ~ useEffect ~ path:', path);
    const speakerName = path[path.length - 1];
    console.log('🚀 ~ useEffect ~ speakerName:', speakerName);
    const speaker = PROGRAMER.find(
      (speaker) => speaker.en.name.toLowerCase().replace(' ', '_') === speakerName
    );
    console.log('🚀 ~ useEffect ~ speaker:', speaker);

    setSpeaker({
      ...speaker,
      photo: speaker.photo,
      slug: speaker.en.name.toLowerCase().replace(' ', '_'),
    });
  }, []);

  return speaker;
};

export default useFindSpeaker;
