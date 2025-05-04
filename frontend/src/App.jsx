<<<<<<< HEAD
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import Home from './pages/Home';
import Login from './pages/Login';
=======

import React from 'react'
import { Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import RegisterCompany from './components/RegisterCompany/RegisterCompany'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage';

>>>>>>> 1d9eee6b155d5f1f103863054aa8c24470ed05e9
function App() {
  return (
    <div className="mainApp">
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route path="/registerCompany" element={<RegisterCompany />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
=======

          <Route path="/registerCompany" element={ <RegisterCompany />}></Route>
          <Route path="/home" element={<Home/> }></Route>
          <Route path="/" element={<LandingPage/> }></Route>
         </Routes>
    </Router>
>>>>>>> 1d9eee6b155d5f1f103863054aa8c24470ed05e9
    </div>
  );
}

export default App;
