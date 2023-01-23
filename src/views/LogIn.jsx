import "../css/components/LogIn.css";

import Animation from "../components/Animation.jsx";
import { Checkbox } from "primereact/checkbox";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Password from "../components/Password.jsx";
import React from "react";
import { login } from "../firebase/firebase";
import { signInWithEmail } from "../supabase/supabase";

const LogIn = () => {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [remember, set_remember] = React.useState("");
  const [err_msg, set_err_msg] = React.useState("");

  let login_handler = () => {
    login(email, password, (err) => {
      if (err) {
        set_err_msg("Invalid email or password.");
      }
      console.log("login success");
    });
  };

  return (
    <div className="body">
      <div className="container">
        <div className="image">
          <p className="subtitle">Welcome back!</p>
          <div className="board-container-login">
            <Animation />
          </div>
        </div>
        <div className="form">
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
        <button className="btn-flex-login">Log in</button>
      </div>
    </div>
  );
};

export default LogIn;
