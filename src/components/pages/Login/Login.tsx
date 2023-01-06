import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "src/asset/logos/logo.png";
import pabloSignInImage from "src/asset/login/pablo-sign-in1.png";
import classes from "src/components/pages/Login/Login.module.scss";

function Login() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const gotoDashboard = () => {};

  const location = useNavigate();

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmitLoginForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // const navigateToDashboard = () => {
    //   location("/users");
    // };
    // navigateToDashboard();
  };

  return (
    <div className={classes.main_wrapper}>
      <div className={classes.images_wrapper}>
        <img src={logo} alt="logo" className={classes.logo_img} />
        <img
          src={pabloSignInImage}
          alt="pabloSignInImage"
          className={classes.pabloSignInImage_img}
        />
      </div>
      <div className={classes.main_form_wrapper}>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form className={classes.form} onSubmit={() => onSubmitLoginForm}>
          <div className={classes.form_group}>
            <input placeholder="Email" type="email" />
          </div>
          <div
            className={`${classes.form_group} ${classes.form_group_password}`}
          >
            <input
              placeholder="Password"
              type={passwordVisibility ? "text" : "password"}
            />
            <div onClick={() => togglePasswordVisibility()}>
              {passwordVisibility ? "Hide" : "Show"}
            </div>
          </div>
          <p>Forgot PASSWORD?</p>
          <button
            className={classes.submit_btn}
            type="submit"
            onClick={() => {
              location("/users");
            }}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
