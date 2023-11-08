"use client";

import Typewriter from "typewriter-effect";

function TypeIntro() {
  return (
    <>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi, My name is Ihsan Asfari Hanifan")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </>
  );
}

export default TypeIntro;
