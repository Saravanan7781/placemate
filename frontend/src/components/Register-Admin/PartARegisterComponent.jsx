import React from 'react';
import '../Register-Admin/PartARegisterComponent.css';

function PartARegisterComponent() {
  return (
    <div className="PartARegisterComponent">
      <div className="PartARegisterComponentTitle">
        <h1>Register</h1>
      </div>
      <div className="PartARegisterComponentForm">
        <div className="PartARegisterComponentFormInput">
          <input
            type="text"
            id="username"
            placeholder="username"
            name="username"
            autocomplete="off"
            required
          />
        </div>
        <div className="PartARegisterComponentFormInput">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            autocomplete="off"
            required
          />
        </div>
        <div className="PartARegisterComponentFormInput">
          <input
            type="password"
            id="password"
            placeholder="password"
            name="password"
            autocomplete="off"
            required
          />
        </div>
        <button type="submit">Next</button>
      </div>
    </div>
  );
}

export default PartARegisterComponent;
