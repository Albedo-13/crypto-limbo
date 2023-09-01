import { useRef } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import "./login.scss";

import guyWithNotebook from "../../assets/images/CurlyManWithLaptop.webp";

// TODO: Hide / show password button (refs?)
// TODO: focus input styles

// TODO?: HOC? (same component layout)
// TODO?: modules or new pages with header? https://mui.com/material-ui/react-modal/

export const Login = () => {
  const viewPasswordRef = useRef(null);

  const togglePasswordVisibility = () => {};

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__wrapper-left">
            <h2 className="login__title">Login</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitting");
              }}
              className="login-form"
            >
              <label className="login-form__label" htmlFor="login-username">
                Email or Phone
              </label>
              <input
                className="login-form__input"
                name="username"
                type="text"
                id="login-username"
                autoComplete="username"
                placeholder="Type Here"
                required
              />
              <label className="login-form__label" htmlFor="login-password">
                Password
              </label>
              <input
                className="login-form__input"
                name="password"
                type="password"
                id="login-password"
                autoComplete="current-password"
                placeholder="Type Here"
                required
              />
              <Button
                sx={{
                  width: "100%",
                  marginTop: "40px",
                }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </form>
            <Link className="login__password-recover" to="#">
              Forgot Password?
            </Link>
            <div className="login-sign-up">
              <p className="login-sign-up__text">Don't Have an Account?</p>
              <Link to="#" className="login-sign-up__link">
                Sign Up Here
              </Link>
            </div>
          </div>
          <div className="login__wrapper-right">
            <img className="login__image" src={guyWithNotebook} alt="guy with notebook" />
          </div>
        </div>
        <div className="login__copyright">©Copyright 2022 All Rights Are Reserved.</div>
      </div>
    </div>
  );
};
