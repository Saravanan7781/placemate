import React from 'react'
import './RegisterCompany.css'

function RegisterCompany() {
    return (
      
      <div className="RegisterCompany">
          <div className="RegisterCompanyCaptionSection">
              <h1>Add a company</h1>
            </div>
            <div className="RegisterCompanyDetails">
          <div className="RegisterCompanyDetails1">
              <div className="nameOfTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="Name of the company" required/>
              </div>
              <div className="AboutTheCompany inputsCompanyRegistration">
                  <textarea type="text" placeholder="About the company" required/>
              </div>
              <div className="JobRoleOfTheCompany inputsCompanyRegistration"
              >
                  <input type="text" placeholder="Job Role" required/>
                  
              </div>
              <div className="JobDescriptionOfTheCompany inputsCompanyRegistration">
                  <textarea type="text" placeholder="Job Description" required/>
              </div>
              <div className="CTCofTheCompany inputsCompanyRegistration">
                  <input type="number" placeholder="CTC" required/>
                  
              </div> 
          </div>
          <div className="RegisterCompanyDetails2">
              <div className="InternshipStipendOfTheCompany inputsCompanyRegistration">
                  <input type="number" placeholder="Internship Stipend" required/>
              </div>
              <div className="RequiredSkillsOfTheCompany inputsCompanyRegistration">
                  <textarea type="text" placeholder="Required Skills" required/>
              </div>
              <div className="EligibleBranchesOfTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="Eligible Branches" required/>
              </div>
              <div className="EligibilityCriteriaOfTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="Eligibility Criteria" required/>
              </div>

            </div>
            </div>
            <div className="RegisterCompanyDetailsSubmit">
              <button>Create</button>

            </div>
      </div>
  )
}

export default RegisterCompany

