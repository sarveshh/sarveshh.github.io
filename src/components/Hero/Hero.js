import React from "react";
import {
  HeroContainer,
  LetterAnimate,
  TypewriterComponent,
} from "./HeroStyles";
import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Box>
          <LetterAnimate> H</LetterAnimate>
          <LetterAnimate>i</LetterAnimate>
          <LetterAnimate>👋</LetterAnimate>
          <LetterAnimate>,</LetterAnimate>
          <br />
          <LetterAnimate>I</LetterAnimate>
          <LetterAnimate>'</LetterAnimate>
          <LetterAnimate>m</LetterAnimate>
          &emsp; &nbsp;
          <LetterAnimate>S</LetterAnimate>
          <LetterAnimate>a</LetterAnimate>
          <LetterAnimate>r</LetterAnimate>
          <LetterAnimate>v</LetterAnimate>
          <LetterAnimate>e</LetterAnimate>
          <LetterAnimate>s</LetterAnimate>
          <LetterAnimate>h</LetterAnimate>
          <TypewriterComponent>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1500)
                  .typeString("Full Stack Web Developer")
                  .pauseFor(500)
                  .deleteChars(24)
                  .pauseFor(500)
                  .typeString("ui/ux Designer")
                  .deleteChars(14)
                  .pauseFor(500)
                  .typeString("Native iOS Developer")
                  .deleteChars(13)
                  .pauseFor(500)
                  .typeString("Android Developer")
                  .deleteChars(24)
                  .pauseFor(500)
                  .typeString("Open Source Contributor")
                  .deleteChars(23)
                  .pauseFor(500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .start();
              }}
            />
          </TypewriterComponent>
        </Box>
      </HeroContainer>
    </>
  );
};

export default Hero;
