import React from 'react'
import './ProfileComponent.css';
import ProfileDivOne from './ProfileDivOne';
import ProfileDivTwo from './ProfileDivTwo';
import ProfileDivThree from './ProfileDivThree';

function ProfileComponent() {
  return (
    <div className="mainProfileComponent">
          <div className="mainProfileDiv1">
              <ProfileDivOne />
      </div>
          <div className="mainProfileDiv2">
              <ProfileDivTwo />
      </div>
          <div className="mainProfileDiv3">
              <ProfileDivThree />
      </div>
    </div>
  );
}

export default ProfileComponent