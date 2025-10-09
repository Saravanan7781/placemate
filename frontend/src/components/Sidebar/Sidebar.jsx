import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import {
  Target,
  Inbox,
  LogOut,
  House,
  CircleUser,
  UserRoundPen,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    // console.log('toggled');
    setShowSidebar((showSidebar) => !showSidebar);
  };

  return (
    <div
      className={`mainSidebarOuter ${
        !showSidebar ? `mainSidebarOuterShow` : ``
      }`}
    >
      <div
        className="mainSidebarInnerMenu"
        onMouseEnter={handleSidebarToggle}
        onMouseLeave={handleSidebarToggle}
      >
        <div className="sidebarFirstPart">
          <Target size={32} />
        </div>
        <div className="sidebarSecondPart">
          <div className="sidebarSecondPartFirstOne">
            <div className="sidebarSecondPartItem sidebarSecondPartItem1">
              <House size={28} />
              {/* <p>Inbox</p> */}
            </div>
            <div
              className={`sidebarSecondPartFirstOnePara ${
                showSidebar ? `sidebarSecondPartFirstOneParaShow` : ``
              }`}
            >
              <p>
                <Link to="/home">Home</Link>
              </p>
            </div>
          </div>
          <div className="sidebarSecondPartSecondOne">
            <div className="sidebarSecondPartItem sidebarSecondPartItem2">
              <Inbox size={28} />
            </div>
            <div
              className={`sidebarSecondPartSecondOnePara ${
                showSidebar ? `sidebarSecondPartSecondOneParaShow` : ``
              }`}
            >
              <p>
                <Link to="/companies">Companies</Link>
              </p>
            </div>
          </div>
          <div className="sidebarSecondPartThirdOne">
            <div className="sidebarSecondPartItem sidebarSecondPartItem3">
              <UserRoundPen size={28} />
            </div>
            <div
              className={`sidebarSecondPartThirdOnePara ${
                showSidebar ? `sidebarSecondPartThirdOneParaShow` : ``
              }`}
            >
              <p>
                <Link to="/users">Users</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="sidebarThirdPart">
          <div className="sidebarSecondPartThirdOneRenowned">
            <div className="sidebarSecondPartItem sidebarSecondPartItem3">
              <CircleUser size={28} />
            </div>
            <div
              className={`sidebarSecondPartThirdOnePara ${
                showSidebar ? `sidebarSecondPartThirdOneParaShow` : ``
              }`}
            >
              <p>
                <Link to="/profile">Profile</Link>
              </p>
            </div>
          </div>
          <div className="sidebarThirdPartFirstOne">
            <div className="sidebarThirdPartItem1">
              <LogOut />
            </div>
            <div
              className={`sidebarThirdPartFirstOnePara ${
                showSidebar ? `sidebarThirdPartFirstOneParaShow` : ``
              }`}
            >
              {/* For students profile, for admins logout */}
              <p>
                <Link to="/login">Logout</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
