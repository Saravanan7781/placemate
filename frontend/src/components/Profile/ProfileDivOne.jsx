import React from 'react';
import './ProfileDivOne.css';
import image from '../../assets/SampleUserImages/saran.png';

function ProfileDivOne() {
  return (
    <>
      <div className="profileDiv1MainPicture">
        <img src={image} alt="user_pic" />
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
          <p className="profileDiv1DataAns">
            Computer Science and Business Systems
          </p>
        </div>
        <div className="profileDiv1DataSchoolMarks profileDiv1Datum">
          <div className="profileDiv1Data10thSchoolMark">
            <p className="profileDiv1Data10thSchoolMarkQues ">10th</p>
            <p className="profileDiv1Data10thSchoolMarkAns">90%</p>
          </div>
          <div className="profileDiv1Data12thSchoolMark">
            <p className="profileDiv1Data12thSchoolMarkQues">12th</p>
            <p className="profileDiv1Data12thSchoolMarkAns">94% </p>
          </div>
        </div>
        <div className="profileDiv1DataArrears profileDiv1Datum">
          <div className="profileDiv1DataCurrentArrear">
            <p className="profileDiv1DataCurrentArrearQues ">Current Arrears</p>
            <p className="profileDiv1DataCurrentArrearAns">1</p>
          </div>
          <div className="profileDiv1DataHistoryOfArrears">
            <p className="profileDiv1DataHistoryOfArrearsQues">
              History of Arrears
            </p>
            <p className="profileDiv1DataHistoryOfArrearsAns">2 </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDivOne;
