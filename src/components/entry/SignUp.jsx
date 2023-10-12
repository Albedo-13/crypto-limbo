import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

import { signupSchema } from "../../utils/validationSchemas";

export const SignUp = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const onSubmit = (data) => {
    navigate("/");
    console.log("SignUp submitting", data);
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | Crypto Limbo</title>
      </Helmet>

      <h2 className="entry__title">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
        <div className="entry-form__wrapper">
          <div className="entry-form__wrapper-left">
            <InputLabel classes={{ root: "label-text label-text_m0" }} htmlFor="signup-given-name">
              First Name
            </InputLabel>
            <TextField
              variant="outlined"
              classes={{ root: "input-text" }}
              {...register("name")}
              type="text"
              id="signup-given-name"
              autoComplete="given-name"
              placeholder="Type Here"
              error={!!errors.name?.message}
            />
            <div className="entry-form__helper">{errors.name?.message}</div>
          </div>
          <div className="entry-form__wrapper-right">
            <InputLabel classes={{ root: "label-text label-text_m0" }} htmlFor="signup-family-name">
              Last Name
            </InputLabel>
            <TextField
              variant="outlined"
              classes={{ root: "input-text" }}
              {...register("fname")}
              type="text"
              id="signup-family-name"
              autoComplete="family-name"
              placeholder="Type Here"
              error={!!errors.fname?.message}
            />
            <div className="entry-form__helper">{errors.fname?.message}</div>
          </div>
        </div>
        <InputLabel classes={{ root: "label-text" }} htmlFor="signup-phone">
          Phone
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          {...register("phone")}
          type="text"
          id="signup-phone"
          autoComplete="tel"
          placeholder="Type Here"
          error={!!errors.phone?.message}
        />
        <div className="entry-form__helper">{errors.phone?.message}</div>
        <InputLabel classes={{ root: "label-text" }} htmlFor="signup-email">
          Email
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="email"
          {...register("email")}
          type="text"
          id="signup-email"
          autoComplete="email"
          placeholder="Type Here"
          error={!!errors.email?.message}
        />
        <div className="entry-form__helper">{errors.email?.message}</div>
        <InputLabel classes={{ root: "label-text" }} htmlFor="signup-password">
          Password
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            name="password"
            {...register("password")}
            type="password"
            id="signup-password"
            autoComplete="new-password"
            placeholder="Type Here"
            error={!!errors.password?.message}
            inputRef={passwordRef}
            InputProps={{
              endAdornment: (
                <IconButton
                  classes={{ root: "adornment-toggle-visibility" }}
                  onClick={togglePasswordVisibility}
                  aria-label="toggle password visibility"
                >
                  {passwordIcon}
                </IconButton>
              ),
            }}
          />
        </div>
        <div className="entry-form__helper">
          {errors.password?.message ?? (
            <div className="entry-form__password-hint">Password must be at least 8 characters</div>
          )}
        </div>
        <div className="entry-form__terms mui-checkbox-terms">
          <FormControlLabel control={<Checkbox required />} label="I agree to this Website" />
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
