import "../css/components/LogIn.css";

import Animation from "../components/Animation.jsx";
import { Checkbox } from "primereact/checkbox";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Password from "../components/Password.jsx";
import React from "react";
import { signInWithEmail } from "../supabase/supabase";

const LogIn = () => {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [err_msg, set_err_msg] = React.useState("");

  let login_handler = () => {
    signInWithEmail(email, password, (data, err) => {
      if (err) {
        set_err_msg("Invalid email or password.");
      }
      console.log("login success", data);
    });
  };

  return (
    <div className="body flex justify-center align-center">
      <div className="container flex flex-row">
        <div className="image">
          <p className="subtitle">Welcome back!</p>
          <div className="board-container-login">
            <Animation />
          </div>
        </div>
        <div className="form flex flex-column">
          <h2 className="header-2">Log in</h2>
          <p>
            Don't have an account?{" "}
            <Link className="emp no-decoration" to="/signup">
              Sign up.
            </Link>{" "}
          </p>
          <div className="input-container">
            <Input
              placeholder="Email"
              icon="pi-envelope"
              type="text"
              value={email}
              set_value={set_email}
            />
          </div>
          <div className="input-container">
            <Password
              placeholder="Password"
              icon="pi-lock"
              type="password"
              value={password}
              set_value={set_password}
            />
          </div>
        </div>
        <button className="btn-flex-login" onClick={login_handler}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default LogIn;
