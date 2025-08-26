import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import RegisterCompany from './components/RegisterCompany/RegisterCompany';
import Home from './pages/Home';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Sidebar from './components/Sidebar/Sidebar';
import AdminSetup from './pages/AdminSetup';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import AllUsers from './pages/AllUsers';
import ShowAllCompanies from './components/Companies/ShowAllCompanies';

function App() {
  return (
    <div className="mainApp">
      <Router>
        <Routes>
          <Route
            path="/registerCompany"
            element={
              <>
                <RegisterCompany />
                <Sidebar />
              </>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <>
                <Home /> <Sidebar /> <Chatbot />
              </>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          {/* <Route path="/register" element={<Register />}></Route> */}
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/users" element={<AllUsers />}></Route>
          <Route path="/setup" element={<AdminSetup />}></Route>
          <Route path="/companies" element={<ShowAllCompanies />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
