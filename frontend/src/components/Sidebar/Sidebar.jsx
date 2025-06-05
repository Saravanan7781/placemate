import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import { Target, Inbox, LogOut } from 'lucide-react';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    console.log('toggled');
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
              <Inbox size={28} />
              {/* <p>Inbox</p> */}
            </div>
            <div
              className={`sidebarSecondPartFirstOnePara ${
                showSidebar ? `sidebarSecondPartFirstOneParaShow` : ``
              }`}
            >
              <p>Dashboard</p>
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
              <p>User creation</p>
            </div>
          </div>
          <div className="sidebarSecondPartThirdOne">
            <div className="sidebarSecondPartItem sidebarSecondPartItem3">
              <Inbox size={28} />
            </div>
            <div
              className={`sidebarSecondPartThirdOnePara ${
                showSidebar ? `sidebarSecondPartThirdOneParaShow` : ``
              }`}
            >
              <p>Companies</p>
            </div>
          </div>
        </div>
        <div className="sidebarThirdPart">
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
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
