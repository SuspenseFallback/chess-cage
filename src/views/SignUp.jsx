import "../css/components/LogIn.css";

import Animation from "../components/Animation.jsx";
import { Checkbox } from "primereact/checkbox";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Password from "../components/Password.jsx";
import React from "react";
import { login } from "../firebase/firebase";
import { signUpWithEmail } from "../supabase/supabase";

const SignUp = () => {
  const [username, set_username] = React.useState("");
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [confirm_password, set_confirm_password] = React.useState("");
  const [remember, set_remember] = React.useState("");
  const [err_msg, set_err_msg] = React.useState("");

  let signup_handler = () => {
    console.log(email);
    signUpWithEmail(username, email, password, (data, err) => {
      console.log(data);
      if (err) {
        set_err_msg("Invalid email or password.");
      }
      console.log("login success");
    });
  };

  return (
    <div className="body">
      <div className="container">
        <div className="form">
          <h2 className="header-2">Sign up</h2>
          <p className="switch-link">
            Already have an account?{" "}
            <Link className="emp no-decoration" to="/login">
              Log in.
            </Link>{" "}
          </p>
          <div className="input-container">
            <Input
              placeholder="Username"
              icon="pi-user"
              type="text"
              value={username}
              set_value={set_username}
            />
          </div>
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
          <div className="input-container">
            <Password
              placeholder="Comfirm Password"
              icon="pi-unlock"
              type="password"
              value={confirm_password}
              set_value={set_confirm_password}
            />
          </div>
        </div>
        <button className="btn-flex" onClick={signup_handler}>
          Sign up
        </button>
        <div className="image">
          <p className="subtitle">Sign up to get access to all features</p>
          <div className="board-container-form">
            <Animation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
