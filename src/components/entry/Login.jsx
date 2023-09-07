import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

//! https://mui.com/material-ui/react-text-field/#validation
//! https://github.com/jquense/yup/issues/743
//! https://react-hook-form.com/get-started

export const Login = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;
  const navigate = useNavigate();

  const schema = yup
    .object({ 
      username: yup.string().email().required(),
      // age: yup.number().positive().integer().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    navigate("/");
    console.log("Login submitting", data);
  };

  console.log(errors);
  return (
    <>
      <h2 className="entry__title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
        <InputLabel classes={{ root: "label-text" }} htmlFor="login-username">
          Email or Phone
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          {...register("username", { required: true })}
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
            name="password"
            type="password"
            id="login-password"
            autoComplete="current-password"
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
