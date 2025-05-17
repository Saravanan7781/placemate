import React from 'react';
import './ProfileDivThree.css';
import AttendedCompany from './AttendedCompany';


import zoho from '../../assets/companyImages/zoho.png';
import paytm from '../../assets/companyImages/paytm.png';
import apple from '../../assets/companyImages/apple.png';
import samsung from '../../assets/companyImages/samsung.png';
import amazon from '../../assets/companyImages/amazon.png';

function ProfileDivThree() {

  const data = [
    {
      img: zoho,
      name: 'Zoho',
      date: '23-1-2025',
      rounds_cleared: 1,
    },
    {
      img: apple,
      name: 'Apple',
      date: '24-2-2025',
      rounds_cleared: 2,
    },

    {
      img: samsung,
      name: 'Samsung',
      date: '10-4-2025',
      rounds_cleared: 4,
    },

    {
      img: paytm,
      name: 'Paytm',
      date: '15-2-2025',
      rounds_cleared: 2,
    },

    {
      img: amazon,
      name: 'Amazon',
      date: '10-4-2025',
      rounds_cleared: 2,
    },
  ];

  return (
    <>
      <div className="profileDivThreeInfos">
        <div className="profileDivThreePlacementStats">
          <div className="profileDivThreePlacementStatsAttended">
            <div className="profileDivThreePlacementStatsAttendedQues">
              <p>Companies Attended</p>
            </div>
            <div className="profileDivThreePlacementStatsAttendedAns">
              <p>9</p>
            </div>
          </div>
          <div className="profileDivThreePlacementStatsPercentage">
            <div className="profileDivThreePlacementStatsPercentageQues">
              <p>Pass %</p>
            </div>
            <div className="profileDivThreePlacementStatsPercentageAns">
              <p>25%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profileDivThreeAttendedCompanies">
        <div className="profileDivThreeAttendedCompaniesHeading">
          <p>Company History</p>
        </div>
        <div className="profileDivThreeAttendedCompaniesList">
          {
            data.map((datum,key) => {
              
              return <AttendedCompany data={datum} key={key} />
              
            })

          }
        </div>
      </div>
    </>
  );
}

export default ProfileDivThree;
