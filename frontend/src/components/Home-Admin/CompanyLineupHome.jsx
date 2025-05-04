import React, { useState } from 'react';
import './CompanyLineupHome.css';
import zoho from '../../assets/zoho.png';
import LineUp from './LineUp';

function CompanyLineupHome() {
  const data = [
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
      <div className="CompanyLineupHomeCompanyImage">
        <img src={zoho} alt="" />
      </div>
      <div className="CompanyLineupHomeFilter">
        <div className="CompanyLineupHomeFilterText">
          <p>Filter</p>
        </div>
      </div>
      <div className="CompanyLineupCompaniesList">
        {data.map((datum, index) => (
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
