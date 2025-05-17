import React from 'react';
import zoho from '../../assets/companyImages/zoho.png';

function LineUp({ data, index, selectedIndex, setSelectedIndex }) {
  const toggleColor = {
    backgroundColor: 'black',
    color: 'white',
  };

  const isSelected = index === selectedIndex;

  const handleCompanyClick = () => {
    setSelectedIndex(isSelected ? null : index);
  };

  return (
    <div
      className="CompanyLineupHomeCompanies"
      onClick={handleCompanyClick}
      style={isSelected ? toggleColor : {}}
    >
      <div className="CompanyLineupHomeSpecificCompany">
        <div className="CompanyLineupHomeCompanyLineupImage">
          <img src={data.img} alt="" />
        </div>
        <div className="CompanyLineupHomeCompanyLineupName">{data.name}</div>
        <div className="CompanyLineupHomeCompanyLineupDate">{data.date}</div>
      </div>
    </div>
  );
}

export default LineUp;
