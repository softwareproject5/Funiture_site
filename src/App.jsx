import React from 'react'
import NavBar from './components/NavBar/NavBar';
import LoginPopUp from './components/LoginPopUp/UserLoginPopUp';
import Upload3DModel from './FireBase/Upload.jsx';
//import "./App.css"

//import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {

const[showLogin, setShowLogin] = React.useState(false)

  return (
    <>
    {/* {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
    </div> */}
    <Upload3DModel/>
    </>

  )
}

export default App;
