import React from 'react';
import './AttendedCompany.css';

function AttendedCompany({ data }) {
    const { img, name, rounds_cleared, date } = data;
  return (
    <>
      <div className="profileDivThreeAttendedCompany">
        <div className="profileDivThreeAttendedCompanyImg">
          <img src={img} alt="" />
        </div>
        <div className="profileDivThreeAttendedCompanyDesc">
          <div className="profileDivThreeAttendedCompanyDescName">{name}</div>
          <div className="profileDivThreeAttendedCompanyDescDate">{date}</div>
        </div>
        <div className="profileDivThreeAttendedCompanyPostition">
          {rounds_cleared}
        </div>
      </div>
    </>
  );
}

export default AttendedCompany;
