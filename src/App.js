import './App.css'
import Alert from './components/Alert';
// import About from './components/About';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <NavBar title="TextUtlis" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-2">
          <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* <About exact path="/about" mode={mode}/> */}
          {/* <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
