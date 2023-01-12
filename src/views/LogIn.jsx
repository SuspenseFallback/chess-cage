import "../css/components/LogIn.css";

import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { Password } from "primereact/password";
import React from "react";
import { login } from "../firebase/firebase";

const LogIn = ({ hide, open }) => {
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [remember, set_remember] = React.useState("");
  const [err_msg, set_err_msg] = React.useState("");
  const [loading, set_loading] = React.useState("pi pi-arrow-right");

  const onHideSignup = (name) => {
    hide();
    set_email("");
    set_password("");
  };

  let login_handler = () => {
    set_loading("pi pi-spin pi-spinner");
    login(email, password, (err) => {
      if (err) {
        set_loading("pi pi-arrow-right");
        return set_err_msg("Invalid email or password");
      }
      console.log("login success");
      onHideSignup();
      set_loading("pi pi-arrow-right");
      window.location.reload();
    });
  };

  return (
    <div className="body">
      <div class="surface-card p-4 shadow-2 border-round w-4 lg:w-4 h-30rem">
        <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span class="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <Link
            to="signup"
            class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
          >
            Create today!
          </Link>
        </div>

        <div>
          <label for="email1" class="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email1"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
          />

          <label for="password1" class="block text-900 font-medium mb-2">
            Password
          </label>
          <Password
            id="password1"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
            feedback={false}
          />

          <div class="flex align-items-center justify-content-between mb-8">
            <div class="flex align-items-center">
              <Checkbox
                id="rememberme1"
                checked={remember}
                onChange={(e) => {
                  set_remember(e.checked);
                }}
              />
              <label for="rememberme1" class="pl-1 text-900">
                Remember me
              </label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
              Forgot password?
            </a>
          </div>

          <Button label="Sign In" icon="pi pi-user" className="w-full"></Button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
