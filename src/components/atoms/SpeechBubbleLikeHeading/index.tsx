import React from 'react';

const SpeechBubbleLikeHeading = (props) => {
  return (
    <h2 className="text-[32px] flex justify-center items-center after:content-[''] after:w-1 after:h-10 after:bg-black after:block after:ml-8 after:rotate-[35deg] before:content-[''] before:w-1 before:h-10 before:bg-black before:block before:mr-8 before:rotate-[-35deg]">
      {props.children}
    </h2>
  );
};

export default SpeechBubbleLikeHeading;
