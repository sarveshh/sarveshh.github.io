import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Box } from "@mui/material";
import { IconContext } from "react-icons/lib";
import { NightModeContainer } from "./NightModeIconStyles";

const NightModeIcon = (theme) => {
  return (
    <>
      <NightModeContainer>
        <IconContext.Provider
          value={{
            style: {
              width: "45px",
              height: "45px",
              marginRight: "10px",
              borderRadius: "50%",
              border: "1px solid grey",
              padding: "5px",
            },
          }}
        >
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </IconContext.Provider>
      </NightModeContainer>
    </>
  );
};

export default NightModeIcon;
