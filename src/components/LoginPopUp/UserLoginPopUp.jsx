import React, { useState } from 'react';
import './UserLoginPopUp.css';
import { assets } from '../../assets/assets';

const UserLoginPopUp = ({ setShowLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [currentState, setCurrentState] = useState("LOG IN");

    const validatePassword = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    };

    const signUp = async (e) => {
        e.preventDefault();
    
        if (!validatePassword(password)) {
            setError(
                'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.'
            );
            return;
        }
            console/log("hii");
        
    
        try {
            console.log(password);
            const result = await axios.post('http://localhost:3001/user/signUp', {
                name: username,
                email: email,
                password: password
            });
            console.log(result);
        } catch (err) {
            console.error('Error during sign-up:', err.message);
        }
    };
    

    const logIn = async (e) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setError(
                'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, and one number.'
            );
            return;
        }
        // Add login logic here
    };

    const checkSubmition = (e) => {
        if (currentState === "Sign Up") {
            signUp(e);
        } else {
            logIn(e);
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={checkSubmition} className="login-popup-container">
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.close} alt="close" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "LOG IN" || currentState === "ADMIN LOGIN" ? <></> : <input type="text" placeholder='Your name' value={username} onChange={(e) => setUsername(e.target.value)} required />}

                    <input type="email" placeholder='Your username or email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit' id='button1'>{currentState === "Sign Up" ? "Create Account" : "Log In"}</button>
                <button id='button2'>{currentState !== "Sign Up" ? "Log In With Google" : "Sign Up With Google"}<img onClick={() => setShowLogin(false)} src={assets.google} alt="" /></button>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState !== "ADMIN LOGIN" && (currentState === "LOG IN" ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>CLICK HERE</span></p> : <p>Already have an account?<span onClick={() => setCurrentState("LOG IN")}> LOGIN HERE</span></p>)}
                {currentState === "LOG IN" ? <a>Login As an Admin <span onClick={() => setCurrentState("ADMIN LOGIN")}>CLICK HERE</span></a> : <></>}

            </form>
        </div>
    )
}

export default UserLoginPopUp;
