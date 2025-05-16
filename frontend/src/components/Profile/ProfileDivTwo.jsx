import React from 'react';
import './ProfileDivTwo.css';
import CompanyLineupHome from '../Home-Admin/CompanyLineupHome';

function ProfileDivTwo() {
  return (
    <>
      <div className="profileDivTwoCustomizableInfos">
        <div className="profileDivTwoCustomizableInfosContact">
          <div className="profileDivTwoCustomizableInfosContactEmail">
            <div className="profileDivTwoCustomizableInfosContactEmailQues">
              Email
            </div>
            <div className="profileDivTwoCustomizableInfosContactEmailAns">
              <p>saravanansomasundharamk@gmail.com</p>
            </div>
          </div>
          <div className="profileDivTwoCustomizableInfosContactPhone">
            <div className="profileDivTwoCustomizableInfosContactPhoneQues">
              <p>Contact</p>
            </div>
            <div className="profileDivTwoCustomizableInfosContactPhoneAns">
              <p>8610869281 </p>
            </div>
          </div>
        </div>
        <div className="profileDivTwoCustomizableInfosResume">
          <input
            type="file"
            className="profileDivTwoCustomizableInfosResumeInput"
          />
        </div>
      </div>
      <div className="profileDivTwoRegisteredCompanies">
        <div className="profileDivTwoRegisteredCompaniesHeading">
          <p>Registered Companies</p>
        </div>
        <div className="profileDivTwoRegisteredCompaniesList">
          <CompanyLineupHome />
        </div>
      </div>
    </>
  );
}

export default ProfileDivTwo;
