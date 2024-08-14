import React from 'react'
import './LoginPopUp.css'

function LoginPopUp() {

    const[currentState,setCurrentState]=React.useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className='login-popup-title'>
                <h2>{currentState}</h2>
                <img src=''
            </div>
        </form>
    </div>
  )
}

export default LoginPopUp