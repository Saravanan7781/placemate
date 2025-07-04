import React from 'react';
import { Eye } from 'lucide-react';

function AllUsersList({ users }) {
  return (
    <div className="AllUsersListMain">
      <div className="headingForGrid UserListGridHeading1">Name</div>
      <div className="headingForGrid UserListGridHeading2">Reg no</div>
      <div className="headingForGrid UserListGridHeading3">Department</div>
      <div className="headingForGrid UserListGridHeading4">CGPA</div>

      <div className="headingForGrid UserListGridHeading5">Role</div>
      <div className="headingForGrid UserListGridHeading6">{/* <Eye /> */}</div>
      {users.map((data, index) => (
        <React.Fragment key={index}>
          <div className="gridData gridData1">{data.Name || 'N/A'}</div>
          <div className="gridData gridData2">{data.regno || 'N/A'}</div>
          <div className="gridData gridData3">{data.dept || 'N/A'}</div>
          <div className="gridData gridData4">{data.cgpa || 'N/A'}</div>
          <div className="gridData gridData5">
            <div
              className={`gridData5InnerStyle ${
                data.role === 'admin'
                  ? 'adminGridData5InnerStyle'
                  : data.role === 'user'
                  ? 'studentGridData5InnerStyle'
                  : data.role==='faculty'?`facultyGridData5InnerStyle`:``
              }`}
            >
              <p>{data.role || 'User'}</p>
            </div>
          </div>
          <div className="eyebtn gridData">
            <Eye className="eyeIcon" />
          </div>
          
        </React.Fragment>
      ))}
    </div>
  );
}

export default AllUsersList;
