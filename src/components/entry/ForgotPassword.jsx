import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

export const ForgotPassword = () => {
  const oneTimeCodeRef = useRef(null);
  const navigate = useNavigate();

  const sendCode = () => {
    oneTimeCodeRef.current.value = "RA9AILVE";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/new-password");
    console.log("ForgotPassword submitting");
  };

  return (
    <>
      <h2 className="entry__title">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="entry-form">
        <label className="entry-form__label" htmlFor="forgot-pwd-username">
          Email or Phone
        </label>
        <div className="entry-form__wrapper-password">
          <input
            className="entry-form__input"
            name="username"
            type="text"
            id="forgot-pwd-username"
            autoComplete="username"
            placeholder="Type Here"
            required
          />
          <button className="entry-form__end-adornment entry-form__code" type="button" onClick={sendCode}>
            Send Code
          </button>
        </div>
        <label className="entry-form__label" htmlFor="forgot-pwd-one-time-code">
          Verification Code
        </label>
        <input
          className="entry-form__input"
          name="one-time-code"
          type="one-time-code"
          id="forgot-pwd-one-time-code"
          autoComplete="one-time-code"
          placeholder="Type Here"
          required
          ref={oneTimeCodeRef}
        />
        <Button
          sx={{
            width: "100%",
            marginTop: "40px",
          }}
          variant="contained"
          type="submit"
        >
          Submit Code
        </Button>
      </form>
    </>
  );
};
