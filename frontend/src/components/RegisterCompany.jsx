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
                  <input type="text" placeholder="Name of the company" />
              </div>
              <div className="AboutTheCompany inputsCompanyRegistration">
                  <textarea type="text" placeholder="About the company"/>
              </div>
              <div className="JobRoleOfTheCompany inputsCompanyRegistration"
              >
                  <input type="text" placeholder="Job Role"/>
                  
              </div>
              <div className="JobDescriptionOfTheCompany inputsCompanyRegistration">
                  <textarea type="text" placeholder="Job Description" />
              </div>
              <div className="CTCofTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="CTC" />
                  
              </div> 
          </div>
          <div className="RegisterCompanyDetails2">
              <div className="InternshipStipendOfTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="Internship Stipend"/>
              </div>
              <div className="RequiredSkillsOfTheCompany inputsCompanyRegistration">
                  <textarea type="text" placeholder="Required Skills"/>
              </div>
              <div className="EligibleBranchesOfTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="Eligible Branches"/>
              </div>
              <div className="EligibilityCriteriaOfTheCompany inputsCompanyRegistration">
                  <input type="text" placeholder="Eligibility Criteria"/>
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

