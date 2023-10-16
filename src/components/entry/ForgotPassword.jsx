import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

import { forgotPasswordSchema } from "../../utils/validationSchemas";

export const ForgotPassword = () => {
  const oneTimeCodeRef = useRef(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(forgotPasswordSchema) });

  const sendCode = async () => {
    const isUserValid = await trigger("username", { shouldFocus: true });

    if (isUserValid) {
      oneTimeCodeRef.current.value = "RA9AILVE";
      oneTimeCodeRef.current.focus();
    }
  };

  const onSubmit = (data) => {
    navigate("/new-password");
    console.log("ForgotPassword submitting", data);
  };

  return (
    <>
      <Helmet>
        <title>Password recovery | Crypto Limbo</title>
      </Helmet>

      <h1 className="entry__title">Forgot Password</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="entry-form">
        <InputLabel classes={{ root: "label-text" }} htmlFor="forgot-pwd-username">
          Email or Phone
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            {...register("username")}
            type="text"
            id="forgot-pwd-username"
            autoComplete="username"
            placeholder="Type Here"
            error={!!errors.username?.message}
            InputProps={{
              endAdornment: (
                <IconButton classes={{ root: "adornment-send-code" }} onClick={sendCode}>
                  Send Code
                </IconButton>
              ),
            }}
          />
        </div>
        <div className="entry-form__helper">{errors.username?.message}</div>

        <InputLabel classes={{ root: "label-text" }} htmlFor="forgot-pwd-code">
          Verification Code
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="one-time-code"
          {...register("oneTimeCode")}
          type="text"
          id="forgot-pwd-code"
          autoComplete="one-time-code"
          placeholder="Type Here"
          error={!!errors.oneTimeCode?.message}
          inputRef={oneTimeCodeRef}
        />
        <div className="entry-form__helper">{errors.oneTimeCode?.message}</div>

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
