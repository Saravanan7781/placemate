import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const Login = ({setEmail}) => {
  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        const decoded = jwtDecode(credentialResponse.credential);
        setEmail(decoded.email);
        console.log("User Email:", decoded.email);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Login;
