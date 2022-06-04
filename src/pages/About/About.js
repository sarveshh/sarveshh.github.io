import React from "react";
import {
  AboutContainer,
  AboutMeIllustration,
  AboutMeSection,
} from "./AboutStyles";
import image from "../../assets/aboutpic.webp";
import { Box, Typography } from "@mui/material";
import { BsFillPlayFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutMeSection>
          <Typography variant="h2" color="#808080">
            About me
          </Typography>
          <Typography variant="inherit" marginLeft="25px" marginTop="20px">
            Hello! I am Sarvesh, a self-taught web developer. I am ever eager
            and fascinated to learn about new technologies. Among all of them,
            Web Development never fails to excite me. You can say it's my niche.
            I have a serious passion for UI effects, animations and creating
            intuitive, dynamic user experiences.
            <br />
            <br /> When I'm not pushing pixels, you'll find me working out,
            playing soccer, reading, or going on travel adventures.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
            <Box display="flex" marginTop="20px">
              <Box marginRight="20px">
                <Box margin="7px">
                  <BsFillPlayFill />
                  Javascript (ES6+) <br />
                </Box>
                <Box margin="7px">
                  <BsFillPlayFill />
                  Three.Js <br />
                </Box>
                <Box margin="7px">
                  <BsFillPlayFill />
                  GSAP <br />
                </Box>
              </Box>
              <Box>
                <Box margin="7px">
                  <BsFillPlayFill />
                  Node.Js <br />
                </Box>
                <Box margin="7px">
                  <BsFillPlayFill />
                  D3.js <br />
                </Box>
              </Box>
            </Box>
          </Typography>
        </AboutMeSection>
        <AboutMeIllustration src={image} height="500px"></AboutMeIllustration>
      </AboutContainer>
    </>
  );
};

export default About;
