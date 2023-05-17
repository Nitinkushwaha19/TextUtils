import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'

// import {
//   BrowseRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom"

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  const [mystyle,newstyle] = useState({
    color:'black',
    backgroundColor:'white'
  })
  
  const [btnicon,setbtnicon]=useState("🌞")
  const [mode,setmode] = useState("light")
  const [alert,newAlert] = useState(null) 

  const showalert=(message,type)=>{
   newAlert({
    msg:message,
    type:type
   })

   setTimeout(() => {
    newAlert(null);
  },2000);
    
}


  let toggleStyle =()=>{
    if(btnicon==="🌙"){
        newstyle({
        color:'white',
        backgroundColor:'black'})
        setbtnicon("🌞")
        setmode("dark")
        document.body.style.backgroundColor="black"
        showalert("Dark Mode is enabled !","success")
        
    }else{
        newstyle({
            color:'black',
            backgroundColor:'white'})
            setbtnicon("🌙")
            setmode("white")
            document.body.style.backgroundColor="white"
            showalert("Dark Mode is disabled !","success")
    }
  }
  return (
   <>
  <Router>
    <Navbar title="Text Editor" mystyle={mystyle} toggleStyle={toggleStyle} btnicon={btnicon} mode={mode}
          Contact="About us"/>
          <Alert alert={alert}/>
          <div className="container" >
            <Routes>
             <Route exact path="/About" element={<About mystyle={mystyle}/>} />
             <Route exact path="/Textform" element={<Textform  showalert={showalert} headings="Text must be Entered Here!" mystyle={mystyle} toggleStyle={toggleStyle}
             btnicon={btnicon} alert={alert} />} />
            </Routes>
          </div>
        </Router>

   </>
  );
 
}

export default App;
