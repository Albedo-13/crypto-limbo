import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

export const SignUp = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log("SignUp submitting");
  };

  return (
    <>
      <h2 className="entry__title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="entry-form">
        <div className="entry-form__wrapper">
          <div className="entry-form__wrapper-left">
            <InputLabel classes={{ root: "label-text label-text_m0" }} htmlFor="signup-given-name">
              First Name
            </InputLabel>
            <TextField
              variant="outlined"
              classes={{ root: "input-text" }}
              name="name"
              type="text"
              id="signup-given-name"
              autoComplete="given-name"
              placeholder="Type Here"
              required
            />
          </div>
          <div className="entry-form__wrapper-right">
            <InputLabel classes={{ root: "label-text label-text_m0" }} htmlFor="signup-family-name">
              Last Name
            </InputLabel>
            <TextField
              variant="outlined"
              classes={{ root: "input-text" }}
              name="fname"
              type="text"
              id="signup-family-name"
              autoComplete="family-name"
              placeholder="Type Here"
              required
            />
          </div>
        </div>
        <InputLabel classes={{ root: "label-text" }} htmlFor="signup-phone">
          Phone
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="phone"
          type="text"
          id="signup-phone"
          autoComplete="tel"
          placeholder="Type Here"
          required
        />
        <InputLabel classes={{ root: "label-text" }} htmlFor="signup-email">
          Email
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="email"
          type="text"
          id="signup-email"
          autoComplete="email"
          placeholder="Type Here"
          required
        />
        <InputLabel classes={{ root: "label-text" }} htmlFor="signup-password">
          Password
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            name="password"
            type="password"
            id="signup-password"
            autoComplete="new-password"
            placeholder="Type Here"
            required
            inputRef={passwordRef}
            InputProps={{
              endAdornment: (
                <IconButton classes={{ root: "adornment-toggle-visibility" }} onClick={togglePasswordVisibility}>
                  {passwordIcon}
                </IconButton>
              ),
            }}
          />
        </div>

        <p className="entry-form__password-hint">Password must be min 8 characters</p>
        <div className="entry-form__terms">
          <FormControlLabel
            control={<Checkbox required classes={{ root: "MuiCheckbox-terms" }} />}
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
      <Link className="entry__password-recover" to="/forgot-password">
        Forgot Password?
      </Link>
      <div className="entry-change-entry">
        <p className="entry-change-entry__text">Have an Account?</p>
        <Link to="/login" className="entry-change-entry__link">
          Login Here
        </Link>
      </div>
    </>
  );
};
