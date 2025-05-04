import React from 'react'
import './Login.css'
import { useState } from 'react';
import {User,Lock} from 'lucide-react'; 
import loginPageImage from '../assets/loginPageImage.jpg'
import GoogleSignInButton from './GoogleSignInButton'
const Login = () => {
  const [email,setEmail] = useState('');
  return (
    <>
        <div className="LoginFullPage">
                <div className="LoginBody">
                    <div className="LoginLeft">
                        <div className="LoginContent">
                          <h1>Login</h1>
                          <p>Welcome to PlaceMate</p>
                          <div className="LoginUserInp">
                          <span> <User /></span>
                            <input type="text" placeholder='Username' />
                          </div>
                          <div className="LoginUserInp">
                          <span><Lock /></span>
                            <input type="text" placeholder='Password' />
                          </div>
                          <button>Login</button>
                          <p>or</p>
                          <div className="googleSignIn">
                            <GoogleSignInButton setEmail={setEmail}/>
                          </div>
                        </div>
                    </div>
                    <div className="LoginRight">
                        <img src={loginPageImage} alt="" />
                    </div>
                </div>
        </div>
    </>
  )
}

export default Login
