import React from 'react';
import './ProfileDivThree.css';

function ProfileDivThree() {
  return (
    <>
      <div className="profileDivThreeInfos">
        <div className="profileDivThreePlacementStats">
          <div className="profileDivThreePlacementStatsAttended"></div>
          <div className="profileDivThreePlacementStatsPercentage"></div>
        </div>
      </div>
      <div className="profileDivThreeAttendedCompanies">
        <div className="profileDivThreeAttendedCompaniesHeading">
          <p>Attended Companies</p>
        </div>
        <div className="profileDivThreeAttendedCompaniesList">
        </div>
      </div>
    </>
  );
}

export default ProfileDivThree;
