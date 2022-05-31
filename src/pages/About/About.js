import React from "react";
import {
  AboutContainer,
  AboutMeIllustration,
  AboutMeSection,
} from "./AboutStyles";
import image from "../../assets/aboutpic.png";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutMeSection>
          Hello! I am Sarvesh, a self-taught web developer. I am ever eager and
          fascinated to learn about new technologies. Among all of them, Web
          Development never fails to excite me. You can say it's my niche. I
          have a serious passion for UI effects, animations and creating
          intuitive, dynamic user experiences.
          <br /> When I'm not pushing pixels, you'll find me working out,
          playing soccer, reading, or going on travel adventures.
          <br />
          Here are a few technologies I’ve been working with recently:
          JavaScript (ES6+) Three.Js React GSAP Node.js
        </AboutMeSection>
        <AboutMeIllustration src={image} height="500px"></AboutMeIllustration>
      </AboutContainer>
    </>
  );
};

export default About;
