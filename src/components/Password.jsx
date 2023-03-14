import "../css/components/Input.css";

import React from "react";

const Password = ({ placeholder, value, set_value, className, icon }) => {
  return (
    <div className="inp-cont flex flex-row justify-center align-center">
      <div className="icon-container flex align-center justify-center">
        <i className={"icon pi " + icon}></i>
      </div>
      <div className="c-input-container">
        <input
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={(e) => set_value(e.target.value)}
          className={"input " + className}
        />
      </div>
    </div>
  );
};

export default Password;
