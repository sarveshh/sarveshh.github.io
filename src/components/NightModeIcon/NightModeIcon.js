import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { toggleMode } from "../../store/nightmodeSlice";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const NightModeContainer = styled("nav")(({ theme }) => ({
  zIndex: "10000",
  position: "fixed",
  top: "87vh",
  left: "4vw",
}));

const NightModeIcon = () => {
  const dispatch = useDispatch();
  const themeChangeHandler = () => {
    dispatch(toggleMode());
  };
  const themeValue = useSelector((state) => state.nightmode.darkmode);

  return (
    <>
      <NightModeContainer onClick={themeChangeHandler}>
        <IconContext.Provider
          value={{
            style: {
              width: "45px",
              height: "45px",
              marginRight: "10px",
              borderRadius: "50%",
              border: "1px solid grey",
              padding: "5px",
              color: themeValue === "light" ? "#000" : "#fff",
            },
          }}
        >
          {themeValue === "light" ? <MdDarkMode /> : <MdLightMode />}
        </IconContext.Provider>
      </NightModeContainer>
    </>
  );
};

export default NightModeIcon;
