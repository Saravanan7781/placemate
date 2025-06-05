import React, { useState } from 'react';
import axios from 'axios';
import { User, Lock } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import './Login.css';
import loginPageImage from '../assets/loginPageImage.jpg';
import GoogleSignInButton from '../components/Login/GoogleSignInButton';
import Loader from '../components/Login/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [emailError,setEmailError] = useState(false);
  const [passwordError,setPasswordError] = useState(false);
  const [showError,setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (login_type = null,em) => {
      setEmailError(false);
      setPasswordError(false);
      console.log(`loginType:${login_type} email:${em}`);
     if(!em){
         setEmailError(true);
         return;
        }
      if(login_type!=="oauth" && !password){
          setPasswordError(true);
           return;
        }
      try {
        const res = await axios.post('http://localhost:5000/api/v1/user/login', {
        email:em,
        password,
        login_type,
      });
         if(res.status===200){
             setShowLoader(true);
             setTimeout(
              ()=>{
                 setShowLoader(false);
                navigate('/registerCompany');
              },
              2000
             );
         }  
        console.log(res);
      } catch (error) {
        console.error('Login failed:', error);
        setShowLoader(false);
        setShowError(true);
        setTimeout(
          ()=>{
              setShowError(false);
          },
          2000
        )
      }
  };

  return (
    <>
    {showError && (
         <div className="login-error-popup">
         Invalid credentials
        </div>
    )}
      {showLoader && <Loader />}
      {!showLoader && (
        <div className="LoginFullPage">
          <div className="LoginBody">
            <div className="LoginLeft">
              <div className="LoginContent">
                <h1>Login</h1>
                <p>Welcome to PlaceMate</p>
                <div className={`LoginUserInp ${emailError?'error-border':''}`}>
                  <span><User /></span>
                  <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) =>{ 
                      setEmail(e.target.value);
                      setEmailError(false);
                    }
                    }
                  />
                </div>
               <div className={`LoginUserInp ${passwordError?'error-border':''}`}>
                  <span><Lock /></span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setPasswordError(false);
                    }}
                  />
                </div>
                <button onClick={() => handleLogin(null,email)}>Login</button>
                <p>or</p>
                <div className="googleSignIn">
                  <GoogleSignInButton setEmail={setEmail} handleLogin={handleLogin} />
                </div>
              </div>
            </div>
            <div className="LoginRight">
              <img src={loginPageImage} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
