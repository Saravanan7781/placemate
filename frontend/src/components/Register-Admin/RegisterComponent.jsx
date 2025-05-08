import React, { useState} from 'react'
import '../Register-Admin/RegisterComponent.css'
import PartARegisterComponent from './PartARegisterComponent'
import PartBRegisterComponent from './PartBRegisterComponent'

function RegisterComponent() {
  
  return (
    <div className="mainRegisterPageComponent">
      <div className="mainRegisterPageComponentImg">
        <img src="" alt="RegisterImage-alt" />
      </div>
      <div className="mainRegisterPageComponentParts">
        <PartBRegisterComponent />
      </div>
    </div>
  );
}

export default RegisterComponent;