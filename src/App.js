import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import SVGComponent from './components/Preloader/SvgComponent';
import Hero from './components/Hero/Hero';
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

const Lab = React.lazy(() => import('./components/Lab/Lab'))

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar toggle={toggle} />
          <Sidebar isopen={isopen} toggle={toggle} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lab" render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Lab />
              </Suspense>
            )} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      ) : (
        <div>
          <SVGComponent />
        </div>
      )}
    </>
  );
}

export default App;
