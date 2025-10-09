import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
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

function AppContent() {
  const location = useLocation();

  // Hide sidebar for these routes
  const hideSidebarRoutes = ['/login', '/setup', '/'];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="mainApp">
      {/* Conditionally render Sidebar */}
      {!shouldHideSidebar && <Sidebar />}

      <Routes>
        <Route path="/registerCompany" element={<RegisterCompany />} />
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Chatbot />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/setup" element={<AdminSetup />} />
        <Route path="/companies" element={<ShowAllCompanies />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
