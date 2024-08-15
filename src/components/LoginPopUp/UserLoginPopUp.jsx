import React from 'react'
import './UserLoginPopUp.css'
import { assets } from '../../assets/assets'

const UserLoginPopUp = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = React.useState("LOG IN")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.close} alt="close" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "LOG IN" || currentState === "ADMIN LOGIN" ? <></> : <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Log In"}</button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState !== "ADMIN LOGIN" && (currentState === "LOG IN" ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>CLICK HERE</span></p> : <p>Already have an account?<span onClick={() => setCurrentState("LOG IN")}> LOGIN HERE</span></p>)}
                {currentState === "LOG IN" ? <p>Login As an Admin <span onClick={() => setCurrentState("ADMIN LOGIN")}>CLICK HERE</span></p> : <></>}

            </form>
        </div>
    )
}

export default UserLoginPopUp