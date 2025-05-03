import React from 'react'
import  './DashboardHome.css'
import RealTimeDashboard from './RealTimeDashboard'

function DashboardHome() {
  return (
    <div className="dashboardHomeMain">
      <div className="introToDashboardHome">
        <div className="introToDashboardHomeHeading">
          <p>Monitor your Placement Activities</p>
        </div>
        <div className="introToDashboardHomeSearch">
          <input type="search" placeholder="Search"/>
        </div>
      </div>
      <div className="realDashboardStats">
       <RealTimeDashboard />
      </div>
    </div>
  )
}

export default DashboardHome