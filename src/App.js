import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtils - Dark Mode';
      //setInterval(() => {
       // document.title = 'TextUtils is Amazing';
      //}, 2000);
      //setInterval(() => {
      //document.title = 'Install TextUtils Now';
      //}, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtils - Light Mode';
    }

  }
  return (
    <>
    {/*<Navbar title="Text Utils" aboutText="About Us"/>*/}
    {/*<Navbar/>*/}
    <Router>
    <Navbar title="Text Utlis" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
        {/*/users --> component 1
        /users/home --> component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
      </Switch>
    </div>
    </Router> 
    
    </>
  );
}

export default App; 

