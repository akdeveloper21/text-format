
import './App.css';
import Navbar from './Components/Navbar';
import TextPart from './Components/TextPart';
import React, { useState } from 'react';
import Alert from './Components/Alert';
//import About from './Components/About';

{/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
*/}
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
    }, 1000
    );
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enable", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enable", "success");
    }
  }
  return (
    <>
    
      <Navbar tittle="Text-Format" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">

    {/* /users --> Component 1
        /users/home --> Component 2 
          <Route exact path="/about">
            <About />
          </Route>*/}
           
            <TextPart heading="Enter the text to analyze below" mode={mode}/>
          
      </div>

    </>
  );
}

export default App;
