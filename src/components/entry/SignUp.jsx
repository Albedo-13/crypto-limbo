import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const SignUp = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;

  return (
    <>
      <h2 className="entry__title">Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting");
        }}
        className="entry-form"
      >
        <div className="entry-form__wrapper">
          <div className="entry-form__wrapper-left">
            <label className="entry-form__label" htmlFor="signup-given-name">
              First Name
            </label>
            <input
              className="entry-form__input"
              name="name"
              type="text"
              id="signup-given-name"
              autoComplete="given-name"
              placeholder="Type Here"
              required
            />
          </div>
          <div className="entry-form__wrapper-right">
            <label className="entry-form__label" htmlFor="signup-family-name">
              Last Name
            </label>
            <input
              className="entry-form__input"
              name="fname"
              type="text"
              id="signup-family-name"
              autoComplete="family-name"
              autofill="family-name"
              placeholder="Type Here"
              required
            />
          </div>
        </div>
        <label className="entry-form__label" htmlFor="signup-phone">
          Phone
        </label>
        <input
          className="entry-form__input"
          name="phone"
          type="text"
          id="signup-phone"
          autoComplete="tel"
          placeholder="Type Here"
          required
        />
        <label className="entry-form__label" htmlFor="signup-email">
          Email
        </label>
        <input
          className="entry-form__input"
          name="email"
          type="text"
          id="signup-email"
          autoComplete="email"
          placeholder="Type Here"
          required
        />
        <label className="entry-form__label" htmlFor="signup-password">
          Password
        </label>
        <div className="entry-form__wrapper-password">
          <input
            className="entry-form__input"
            name="password"
            type="password"
            id="signup-password"
            autoComplete="current-password"
            placeholder="Type Here"
            required
            ref={passwordRef}
          />
          <button className="entry-form__toggle-password" type="button" onClick={togglePasswordVisibility}>
            {passwordIcon}
          </button>
        </div>
        <p className="entry-form__password-hint">Password must be min 8 characters</p>
        <div className="entry-form__terms">
          <FormControlLabel
            control={<Checkbox required classes={{ root: "MuiCheckbox-terms-root" }} />}
            label="I agree to this Website"
          />
          <Link className="entry-form__terms-link" to="#">
            Terms & Conditions.
          </Link>
        </div>
        <Button
          sx={{
            width: "100%",
            marginTop: "28px",
          }}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </form>
      <Link className="entry__password-recover" to="#">
        Forgot Password?
      </Link>
      <div className="entry-goto-login">
        <p className="entry-goto-login__text">Have an Account?</p>
        <Link to="#" className="entry-goto-login__link">
          Login Here
        </Link>
      </div>
    </>
  );
};
