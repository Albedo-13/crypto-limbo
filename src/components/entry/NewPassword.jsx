import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

import { newPasswordSchema } from "../../utils/validationSchemas";

// TODO: replace invisible email field with valid data (https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands/#email-first-sign-in-flow)
// TODO: block ability to go to new password creation using address field
// (redirect on 1st if trying to go to 2nd. save email in Redux store?)

export const NewPassword = (props) => {
  const { passwordIcon, passwordRef, togglePasswordVisibility } = props;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(newPasswordSchema) });

  const onSubmit = (data) => {
    navigate("/");
    console.log("NewPassword submitting", data);
  };

  return (
    <>
      <Helmet>
        <title>Create new password | Crypto Limbo</title>
      </Helmet>

      <h2 className="entry__title">Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
        <input className="hidden" name="username" autoComplete="username" type="text" defaultValue="user@example.com" />
        <InputLabel classes={{ root: "label-text" }} htmlFor="create-new-pwd">
          New Password
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            {...register("newPassword")}
            type="password"
            id="create-new-pwd"
            autoComplete="new-password"
            placeholder="XXXXXXXX"
            error={!!errors.newPassword?.message}
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
          {errors.newPassword?.message ?? (
            <div className="entry-form__password-hint">Password must be at least 8 characters</div>
          )}
        </div>

        <InputLabel classes={{ root: "label-text" }} htmlFor="confirm-new-pwd">
          Confirm New Password
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          {...register("confirmPassword")}
          type="password"
          id="confirm-new-pwd"
          autoComplete="new-password"
          placeholder="XXXXXXXX"
          error={!!errors.confirmPassword?.message}
        />
        <div className="entry-form__helper">{errors.confirmPassword?.message}</div>

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
