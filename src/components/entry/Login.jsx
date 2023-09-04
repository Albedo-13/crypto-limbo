import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Login = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;

  return (
    <>
      <h2 className="entry__title">Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitting");
        }}
        className="entry-form"
      >
        <label className="entry-form__label" htmlFor="entry-username">
          Email or Phone
        </label>
        <input
          className="entry-form__input"
          name="username"
          type="text"
          id="entry-username"
          autoComplete="username"
          placeholder="Type Here"
          required
        />
        <label className="entry-form__label" htmlFor="entry-password">
          Password
        </label>

        <div className="entry-form__wrapper-password">
          <input
            className="entry-form__input"
            name="password"
            type="password"
            id="entry-password"
            autoComplete="current-password"
            placeholder="Type Here"
            required
            ref={passwordRef}
          />
          <button className="entry-form__toggle-password" type="button" onClick={togglePasswordVisibility}>
            {passwordIcon}
          </button>
        </div>

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
      <Link className="entry__password-recover" to="#">
        Forgot Password?
      </Link>
      <div className="entry-sign-up">
        <p className="entry-sign-up__text">Don't Have an Account?</p>
        <Link to="#" className="entry-sign-up__link">
          Sign Up Here
        </Link>
      </div>
    </>
  );
};
