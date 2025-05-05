import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import Home from './pages/Home';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="mainApp">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/registerCompany" element={<RegisterCompany />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
         </Routes>
    </Router>
    </div>
  );
}

export default App;
