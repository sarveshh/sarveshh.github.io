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
import DotRing from "./components/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";
import { createTheme, colors, ThemeProvider, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";

function App() {
  const [themepalette, setThemePalette] = useState("light");
  const themeChangeHandler = () => {
    if (themepalette === "light") {
      setThemePalette("dark");
    } else {
      setThemePalette("light");
    }
  };
  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      mode: themepalette,
    },
  });
  const [loading, setLoading] = useState(true);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

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
            <div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
            >
              <Navbar toggle={toggle} />
              <button onClick={themeChangeHandler}>Click</button>
            </div>
            <Sidebar isopen={isopen} toggle={toggle} />
            <DotRing />
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
