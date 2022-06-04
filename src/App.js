import React, { useState, useEffect, useContext } from "react";
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
import { CssBaseline } from "@mui/material";
import NightModeIcon from "./components/NightModeIcon/NightModeIcon";
import Cursor from "./components/Cursor/Cursor";
import { useSelector } from "react-redux";

function App() {
  const themeValue = useSelector((state) => state.nightmode.darkmode);
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      mode: themeValue,
      background: {
        // default: themepalette === "light" ? "#fafafa" : "#1a1a1a",
      },
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
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
          <div className="App">
            <Navbar toggle={toggle} />
            <Sidebar isopen={isopen} toggle={toggle} />
            <NightModeIcon theme={"light"} />
            <Cursor />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        ) : (
          <div>
            <SVGComponent />
          </div>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
