import React from 'react'
import './CompanyLineupHome.css'
import zoho from '../../assets/zoho.png' 

function CompanyLineupHome() {

  return (
    <div className="CompanyLineupHomeMainContainer">
      <div className="CompanyLineupHomeCompanyImage">
        <img src={ zoho} alt="" />
      </div>
      <div className="CompanyLineupHomeCompanies">
        <div className="CompanyLineupHomeCompanyImage"></div>
        <div className="CompanyLineupHomeCompanyName"></div>
        <div className="CompanyLineupHomeCompanyDate"></div>
      </div>
    </div>
  )
}

export default CompanyLineupHome