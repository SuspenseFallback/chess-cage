import "../css/views/Verify.css";

import React from "react";

const Verify = () => {
  return (
    <div className="main">
      <h1 className="header">An email has been sent to your account.</h1>
      <p className="subheader">
        Please click the link to verify your account.
        <br />
        <span>You can close this tab once verified.</span>
      </p>
    </div>
  );
};

export default Verify;
