import React from 'react'
import '../Register-Admin/PartBRegisterComponent.css';

function PartBRegisterComponent() {
    return (
      <div className="PartBRegisterComponent">
        <div className="PartBInnerComponent">
          <div className="PartBRegisterComponentFormInput">
            <input
              type="text"
              id="CollegeName"
              placeholder="College Name"
              name="CollegeName"
              autocomplete="off"
              required
            />
          </div>
          <div className="PartBRegisterComponentFormInput">
            <input
              type="text"
              id="address"
              placeholder="address"
              name="address"
              autocomplete="off"
              required
            />
          </div>
          <div className="PartBRegisterComponentFormInput">
            <input
              type="text"
              id="phoneNumber"
              placeholder="phone number"
              name="phoneNumber"
              autocomplete="off"
              required
            />
          </div>
        </div>
      </div>
    );
}

export default PartBRegisterComponent