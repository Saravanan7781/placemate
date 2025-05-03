import React from 'react'
import '../pages/Home.css'
import DashboardHome from '../components/Home-Admin/DashboardHome'
import StatsHome from '../components/Home-Admin/StatsHome'
import CompanyLineupHome from '../components/Home-Admin/CompanyLineupHome'

function Home() {
  return (
      <div className="homeMainContainer">
          <div className="homeSubContainerLeft">
          <DashboardHome />
          <StatsHome />
          </div>
          <div className="homeSubContainerRight">
              <CompanyLineupHome />
          </div>
    </div>
  )
}

export default Home