import React, { useState } from 'react';
import './CompanyLineupHome.css';

import zoho from '../../assets/companyImages/zoho.png';
import paytm from '../../assets/companyImages/paytm.png'
import apple from '../../assets/companyImages/apple.png'
import samsung from '../../assets/companyImages/samsung.png';
import amazon from '../../assets/companyImages/amazon.png';

import LineUp from './LineUp';

function CompanyLineupHome({ data}) {
  const sampleData = [
    {
      name: 'Zoho',
      img: zoho,
      date: '2023-10-01',
    },
    {
      name: 'Apple',
      img: zoho,
      date: '2023-11-01',
    },
    {
      name: 'Amazon',
      img: zoho,
      date: '2023-12-01',
    },
    {
      name: 'Amazon',
      img: zoho,
      date: '2023-12-01',
    },
    {
      name: 'Amazon',
      img: zoho,
      date: '2023-12-01',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="CompanyLineupHomeMainContainer">
      <div className="CompanyLineupHomeCompanyImageWrapper">
        <div className="CompanyLineupHomeCompanyImage">
          <img src={zoho} alt="" />
        </div>
      </div>
      <div className="CompanyLineupHomeFilter">
        <div className="CompanyLineupHomeFilterText">
          <p>Filter</p>
        </div>
      </div>
      <div className="CompanyLineupCompaniesList">
        {(data !== undefined ? data : sampleData).map((datum, index) => (
          <LineUp
            data={datum}
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default CompanyLineupHome;
