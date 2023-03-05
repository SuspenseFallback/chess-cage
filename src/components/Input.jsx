import "../css/components/Input.css";

import React from "react";

const Input = ({ placeholder, value, set_value, className, icon, type }) => {
  return (
    <div className="inp-cont flex flex-row justify-center align-center">
      <div className="icon-container flex align-center justify-center">
        <i className={"icon pi " + icon}></i>
      </div>
      <div className="c-input-container">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => set_value(e.target.value)}
          className={"input " + className}
        />
      </div>
    </div>
  );
};

export default Input;
