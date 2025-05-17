import React from 'react';
import './ProfileDivTwo.css';
import CompanyLineupHome from '../Home-Admin/CompanyLineupHome';

import zoho from '../../assets/companyImages/zoho.png';
import paytm from '../../assets/companyImages/paytm.png';
import apple from '../../assets/companyImages/apple.png';
import samsung from '../../assets/companyImages/samsung.png';
import amazon from '../../assets/companyImages/amazon.png';

function ProfileDivTwo() {
  const data = [
    {
      name: 'Zoho',
      img: zoho,
      date: '2023-10-01',
    },
    {
      name: 'Apple',
      img: apple,
      date: '2023-11-01',
    },
    {
      name: 'Paytm',
      img: paytm,
      date: '2023-12-01',
    },
    {
      name: 'Amazon',
      img: amazon,
      date: '2023-12-01',
    },
    {
      name: 'Samsung',
      img: samsung,
      date: '2023-12-01',
    },
  ];
  return (
    <>
      <div className="profileDivTwoCustomizableInfos">
        <div className="profileDivTwoCustomizableInfosContact">
          <div className="profileDivTwoCustomizableInfosContactEmail">
            <div className="profileDivTwoCustomizableInfosContactEmailQues">
              <p>Email</p>
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
          <CompanyLineupHome data={data} />
        </div>
      </div>
    </>
  );
}

export default ProfileDivTwo;
