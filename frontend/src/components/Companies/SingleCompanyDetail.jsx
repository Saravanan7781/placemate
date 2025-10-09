import React from 'react';

function SingleCompanyDetail({ company }) {
  const { logo, desc, location, name, avg_stud_placed } = company;
  return (
    <>
      <div className="companyImage">
        <img src={logo} alt="" />
        {/* <p>Hi hello</p> */}
      </div>
      <div className="companyName">
        <p>{name}</p>
      </div>
      {/* <div className="companyDesc">
        <p>{desc}</p>
      </div> */}
      <div className="companyLocation">
        <p>{location}</p>
      </div>
      <div className="companyAvgStudentsPlaced">
        <p>{avg_stud_placed}</p>
      </div>
    </>
  );
}

export default SingleCompanyDetail;
