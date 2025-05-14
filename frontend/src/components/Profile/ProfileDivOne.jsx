import React from 'react';
import './ProfileDivOne.css';

function ProfileDivOne() {
  return (
    <>
      <div className="profileDiv1MainPicture">
        <img src="" alt="user_pic" />
      </div>
      <div className="profileDiv1Data">
        <div className="profileDiv1DataName profileDiv1Datum">
          <p className="profileDiv1DataQues">Name</p>
          <p className="profileDiv1DataAns"> Saravanan S</p>
        </div>
        <div className="profileDiv1DataRollNo profileDiv1Datum">
          <p className="profileDiv1DataQues">Roll no</p>
          <p className="profileDiv1DataAns"> 7376222CB146</p>
        </div>
        <div className="profileDiv1DataEmail profileDiv1Datum">
          <p className="profileDiv1DataQues">Email</p>
          <p className="profileDiv1DataAns">saravanan.cb22@bitsathy.ac.in</p>
        </div>
        <div className="profileDiv1DataDepartment profileDiv1Datum">
          <p className="profileDiv1DataQues">Department</p>
          <p className="profileDiv1DataAns">Computer Science and Business Systems</p>
        </div>
      </div>
    </>
  );
}

export default ProfileDivOne;
