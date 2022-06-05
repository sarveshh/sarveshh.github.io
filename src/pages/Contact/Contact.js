import React from "react";
import { MapContainer } from "./MapContainer";
import { Box, Typography } from "@mui/material";
import { ContactContainer } from "./ContactStyles";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiCodepen,
} from "react-icons/si";
import { FaDev } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useSelector } from "react-redux";

const Contact = () => {
  const contactData = [
    { name: "Email", icon: <SiGmail />, link: "mailto:sarveshp273@gmail.com" },
    { name: "Github", icon: <SiGithub />, link: "https://github.com/sarveshh" },
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/sarveshp273  ",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      link: "https://www.instagram.com/sarvastic_af/",
    },
    {
      name: "Codepen",
      icon: <SiCodepen />,
      link: "https://codepen.io/sarveshh",
    },
    {
      name: "Dev.to",
      icon: <FaDev />,
      link: "https://dev.to/sarveshh",
    },
  ];

  const themeValue = useSelector((state) => state.nightmode.darkmode);

  return (
    <>
      <ContactContainer>
        <Typography variant="h2" color="#6D83F2">
          Contact
        </Typography>
        <Box display="flex" justifyContent="space-between" marginTop="15px">
          <MapContainer />
          <Box display="flex" flexDirection="column">
            <Typography variant="h3" color="#808080" marginLeft="30px">
              Hey, Don't be a stranger
            </Typography>
            <br />
            <Typography variant="h5" color="#808080" marginLeft="30px">
              Thanks for stopping by, I’m currently looking to join a new team
              of creative designers and developers. If you think we might be a
              good fit for one another, give me a call or send me an email 📧.
            </Typography>
            <br />
            <Typography variant="h5" color="#808080" marginLeft="30px">
              Connect with me!
            </Typography>
            <Box display="flex" justifyContent="center" margin="15px">
              {contactData.map((data) => (
                <>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider
                      value={{
                        style: {
                          width: "35px",
                          height: "35px",
                          marginRight: "30px",
                          color: themeValue === "light" ? "#000" : "#6D83F2",
                        },
                      }}
                    >
                      {data.icon}
                    </IconContext.Provider>
                  </a>
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </ContactContainer>
    </>
  );
};

export default Contact;
