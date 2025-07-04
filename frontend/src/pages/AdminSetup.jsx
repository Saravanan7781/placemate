import React from 'react'
import './AdminSetup.css'
import FillDetails from '../components/Admin-setup/FillDetails';
import setupimg1 from '../assets/setup-img1.png'

function AdminSetup() {
  return (
    <div className="adminsetup">
      <div className="left">
        <div className="logo">
          <p>PlaceMate</p>
        </div>
        <div className="text">
          <p className='head'>Hi Monesh!</p>
          <p className='txt'>Complete your registration process to start manage your college placement activity</p>
        </div>
        <div className="img">
          <img src={setupimg1} alt="" />
        </div>
      </div>
      <div className="right">
        <FillDetails />
      </div>
    </div>
  );
}

export default AdminSetup