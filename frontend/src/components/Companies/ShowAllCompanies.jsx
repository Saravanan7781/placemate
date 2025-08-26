import React from 'react';
import '../Companies/ShowAllCompanies.css';
import { companySampleData } from '../Companies/companySampleData';
import SingleCompanyDetail from './SingleCompanyDetail';

function ShowAllCompanies() {
  console.log(companySampleData);
  return (
    <div className="companiesMain">
      <div className="companiesTitle">
        <h1>Companies</h1>
      </div>
      <div className="companiesAvailable">
        <div className="SingleCompanyDetail">
          <div className="companyTitleLogo">
            <p>Logo</p>
          </div>
          <div className="companyTitleName">
            <p>Name</p>
          </div>
          <div className="companyTitleDesc">
            <p>Description</p>
          </div>
          <div className="companyTitleLocation">
            <p>Location</p>
          </div>
          <div className="companyTitleAvgStudentsPlaced">
            <p>Avg no of students placed</p>
          </div>
          {/* <div className="companyDetailList"> */}
          {companySampleData.map((company) => (
            <SingleCompanyDetail company={company} />
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ShowAllCompanies;
