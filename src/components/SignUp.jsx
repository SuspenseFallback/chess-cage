import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React from "react";
import { signup } from "../firebase/firebase";
const SignUp = ({ hide, open }) => {
  const [fname, set_fname] = React.useState("");
  const [lname, set_lname] = React.useState("");
  const [username, set_username] = React.useState("");
  const [email, set_email] = React.useState("");
  const [password, set_password] = React.useState("");
  const [terms, toggle_terms] = React.useState(false);
  const [valid, set_valid] = React.useState(false);
  const [username_valid, set_username_valid] = React.useState(false);
  const [email_valid, set_email_valid] = React.useState(false);
  const [password_valid, set_password_valid] = React.useState(false);
  const [err_msg, set_err_msg] = React.useState("");
  const [loading, set_loading] = React.useState("pi pi-arrow-right");

  const onHide = (name) => {
    hide();
    set_fname("");
    set_lname("");
    set_username("");
    set_email("");
    set_password("");
    toggle_terms(false);
    set_username_valid("");
    set_email_valid("");
    set_password_valid("");
    set_valid("");
  };

  const validateForm = () => {
    if (username.length < 3) {
      set_username_valid(false);
      set_err_msg("Username must be at least 3 characters");
    } else if (username.length > 20) {
      set_username_valid(false);
      set_err_msg("Username must be less than 20 characters");
    } else {
      set_username_valid(true);
      if (
        !/(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
          email
        )
      ) {
        set_email_valid(false);
        set_err_msg("Email must be valid");
      } else {
        set_email_valid(true);
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password)) {
          set_password_valid(false);
          set_err_msg("Password must be strong enough");
        } else {
          set_password_valid(true);
          if (terms) {
            set_err_msg("");
          } else {
            set_err_msg("Terms must be accepted");
          }
        }
      }
    }
  };

  React.useEffect(() => {
    validateForm();
    if (username_valid && email_valid && password_valid && terms) {
      set_valid(true);
      set_err_msg("");
    } else {
      set_valid(false);
    }
  }, [fname, lname, username, email, password, terms]);

  const header = <h3>Pick a password</h3>;
  const footer = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Cancel"
          icon="pi pi-times"
          onClick={onHide}
          className="p-button-text"
        />
        <Button
          label="Submit"
          icon={loading}
          onClick={signup_handler}
          disabled={!valid}
          autoFocus
        />
      </div>
    );
  };

  let signup_handler = () => {
    set_loading("pi pi-spin pi-spinner");
    signup(fname, lname, username, email, password, () => {
      console.log("signup success");
      onHide();
      set_loading("pi pi-arrow-right");
    });
  };

  return (
    <Dialog
      header="Sign up"
      visible={open}
      style={{ width: "30vw" }}
      footer={renderFooter("signup")}
      hide={() => onHide()}
    >
      <div className="input">
        <span className="p-input-icon-right">
          <i className="pi pi-id-card"></i>
          <InputText id="fname" toottip="First name" placeholder="First name" />
        </span>
      </div>
      <div className="input">
        <span className="p-input-icon-right">
          <i className="pi pi-pencil"></i>
          <InputText id="lname" toottip="Last name" placeholder="Last name" />
        </span>
      </div>
      <div className="input">
        <span className="p-input-icon-right">
          <i className="pi pi-user"></i>
          <InputText
            id="username"
            toottip="Username"
            onChange={(e) => set_username(e.target.value)}
            className={username_valid ? "" : "p-invalid"}
            placeholder="Username"
          />
        </span>
      </div>
      <div className="input">
        <span className="p-input-icon-right">
          <i className="pi pi-envelope"></i>
          <InputText
            id="email"
            toottip="Email"
            onChange={(e) => set_email(e.target.value)}
            placeholder="Email"
            className={email_valid ? "" : "p-invalid"}
          />
        </span>
      </div>
      <div className="input">
        <Password
          onChange={(e) => set_password(e.target.value)}
          placeholder="Password"
          toggleMask
          header={header}
          footer={footer}
          id="password"
          className={password_valid ? "" : "p-invalid"}
        />
      </div>
      <div className="input field-checkbox">
        <Checkbox
          inputId="terms"
          checked={terms}
          onChange={(e) => toggle_terms(!terms)}
        />{" "}
        <label htmlFor="terms">
          I agree to the <span className="tnc">terms and conditions</span>
        </label>
      </div>
      <p
        className="err-msg"
        style={{
          color: "red",
        }}
      >
        {err_msg}
      </p>
    </Dialog>
  );
};

export default SignUp;
