import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

// TODO: replace invisible email field with valid data (https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands/#email-first-sign-in-flow)
// TODO: same passwords check before submit (react hook form)

export const NewPassword = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log("NewPassword submitting");
  };

  return (
    <>
      <h2 className="entry__title">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="entry-form">
        <input
          className="hidden"
          name="username"
          type="text"
          defaultValue="user@example.com"
        />
        <label className="entry-form__label" htmlFor="new-pwd-create-pwd">
          New Password
        </label>
        <div className="entry-form__wrapper-password">
          <input
            className="entry-form__input"
            name="new-password"
            type="password"
            id="new-pwd-create-pwd"
            autoComplete="new-password"
            placeholder="XXXXXXXX"
            required
            ref={passwordRef}
          />
          <button className="entry-form__end-adornment" type="button" onClick={togglePasswordVisibility}>
            {passwordIcon}
          </button>
        </div>
        <label className="entry-form__label" htmlFor="new-pwd-confirm-pwd">
          Confirm New Password
        </label>
        <input
          className="entry-form__input"
          name="confirm-password"
          type="password"
          id="new-pwd-confirm-pwd"
          autoComplete="new-password"
          placeholder="XXXXXXXX"
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
          Submit Code
        </Button>
      </form>
    </>
  );
};
