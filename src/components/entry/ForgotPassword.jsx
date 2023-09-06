import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

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
        <InputLabel classes={{ root: "label-text" }} htmlFor="forgot-pwd-username">
          Email or Phone
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            name="username"
            type="text"
            id="forgot-pwd-username"
            autoComplete="username"
            placeholder="Type Here"
            required
            InputProps={{
              endAdornment: (
                <IconButton classes={{ root: "adornment-send-code" }} onClick={sendCode}>
                  Send Code
                </IconButton>
              ),
            }}
          />
        </div>
        <InputLabel classes={{ root: "label-text" }} htmlFor="forgot-pwd-code">
          Verification Code
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="one-time-code"
          type="text"
          id="forgot-pwd-code"
          autoComplete="one-time-code"
          placeholder="Type Here"
          required
          inputRef={oneTimeCodeRef}
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
