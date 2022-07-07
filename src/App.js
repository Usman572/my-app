import React, { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
function App() {
  const [mode, setMode] = useState('light')   // Whether dark  mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <div className='my-app'>
      <Navbar title="textUtils" link="about us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About mode={mode} /> */}
      <TextForm heading="Please Enter Some Text in the Field" mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
