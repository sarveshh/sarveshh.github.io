import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SVGComponent from "./components/Preloader/SvgComponent";
import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import { createTheme, ThemeProvider } from "@mui/material";
import { CssBaseline, Box, Alert, IconButton, AlertTitle } from "@mui/material";
import NightModeIcon from "./components/NightModeIcon/NightModeIcon";
import Cursor from "./components/Cursor/Cursor";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";

function App() {
  const themeValue = useSelector((state) => state.nightmode.darkmode);
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      mode: themeValue,
      background: {
        default: themeValue === "light" ? "#fafafa" : "#1a1a1a",
        navbar: themeValue === "light" ? "white" : "rgba(42,43,56,.5)",
      },
      textColor: {
        default: themeValue === "light" ? "black" : "white",
        dynamic: themeValue === "light" ? "white" : "black",
      },
      typewriter: {
        shadow: themeValue === "light" ? "0 0 0.5rem #000" : "0 0 0.5rem grey",
      },
      projectSection: {
        numbers: themeValue === "light" ? "black" : "white",
        title: themeValue === "light" ? "black" : "white",
        description: themeValue === "light" ? "black" : "white",
        icons: themeValue === "light" ? "black" : "white",
      },
      buttonColors: {
        default: themeValue === "light" ? "black" : "white",
      },
    },
  });
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 50);
  }, []);

  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading === false ? (
          <Box className="App">
            {open ? (
              <Box>
                <Alert
                  severity="info"
                  sx={{
                    display: { sm: "block", xs: "block", md: "none" },
                    position: { sm: "fixed", xs: "fixed" },
                    top: { sm: "65vh", xs: "65vh" },
                    zIndex: { sm: "10000", xs: "10000" },
                    width: { sm: "100%", xs: "100%" },
                  }}
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <GrClose />
                    </IconButton>
                  }
                >
                  <AlertTitle>Info</AlertTitle>
                  This portfolio is at its best on <strong>desktop.</strong>
                </Alert>
              </Box>
            ) : null}
            <Cursor />
            <Navbar toggle={toggle} />
            <Sidebar isopen={isopen} toggle={toggle} />
            <NightModeIcon theme={"light"} />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Box>
        ) : (
          <Box>
            <SVGComponent />
          </Box>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
