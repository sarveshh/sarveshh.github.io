import React, { useState, useEffect } from 'react';
import './App.css';
import SVGComponent from './components/Preloader/SvgComponent';
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className="App" style={{ height: "100vh", backgroundColor: "black" }}>
          Learn react
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
