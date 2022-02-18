import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import SVGComponent from './components/Preloader/SvgComponent';
import Hero from './components/Hero/Hero';


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
          <Hero />
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
