import React, { useState } from 'react';
import './AllUsersComponent.css';
import AllUsersList from './AllUsersList';
import * as XLSX from 'xlsx';
import { FileSpreadsheet } from 'lucide-react';
import AllUsersProfileExpansion from './AllUsersProfileExpansion';

function AllUsersComponent() {
  const [users, setUsers] = useState([]);

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      setUsers(data);
      console.log('Uploaded Excel Users:', data);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <>
      <div className="AllUsersSearchSection">
        <input
          type="search"
          placeholder="Search"
          className="AllUsersSectionSearchbar"
        />
        <button className="AllUsersSectionSearchbarFilter">Filter</button>

        {/* Upload Button */}
        <label className="AllUsersSectionUserUpload">
          Upload
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleExcelUpload}
            style={{ display: 'none' }}
          />
          <FileSpreadsheet />
        </label>
      </div>

      <div className="AllUsersList">
        <AllUsersList users={users} />
      </div>

      {/* <div className="popupForProfileExpasion">
         <AllUsersProfileExpansion /> 
      </div> */}
    </>
  );
}

export default AllUsersComponent;
