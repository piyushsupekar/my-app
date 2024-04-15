import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import TextForm from "./components/TextForm.jsx";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is available or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 800);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2d2c2c';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={ mode } toggleMode={ toggleMode } />
        <Alert alert={ alert } />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={ <About mode={ mode } z /> } />
            <Route exact path="/" element={ <TextForm showAlert={ showAlert } heading="Enter the text to analyze below" mode={ mode } /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
