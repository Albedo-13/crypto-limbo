import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

import { loginSchema } from "../../utils/validationSchemas";

import { Helmet } from "react-helmet";

export const Login = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data) => {
    navigate("/");
    console.log("Login submitting", data);
  };

  return (
    <>
      <Helmet>
        <title>Log In | Crypto Limbo</title>
      </Helmet>

      <h2 className="entry__title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
        <InputLabel classes={{ root: "label-text" }} htmlFor="login-username">
          Email or Phone
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          {...register("username")}
          type="text"
          id="login-username"
          autoComplete="username"
          placeholder="Type Here"
          error={!!errors.username?.message}
        />
        <div className="entry-form__helper">{errors.username?.message}</div>
        <InputLabel classes={{ root: "label-text" }} htmlFor="login-password">
          Password
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            {...register("password", { required: true })}
            type="password"
            id="login-password"
            autoComplete="current-password"
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
          <div className="entry-form__helper">{errors.password?.message}</div>
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
      <Link className="entry__password-recover" to="/forgot-password">
        Forgot Password?
      </Link>
      <div className="entry-change-entry">
        <p className="entry-change-entry__text">Don't Have an Account?</p>
        <Link to="/signup" className="entry-change-entry__link">
          Sign Up Here
        </Link>
      </div>
    </>
  );
};
