import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";

// TODO: replace inputs with MUI components!
// TODO: react hook form (fields and forms validation)
// TODO: same passwords check before submit (react hook form)
// TODO: replace invisible email field with valid data (https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands/#email-first-sign-in-flow)
// TODO: block ability to go to new password creation using address link
// (redirect on 1st if trying to go to 2nd. save email in Redux store?)

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
        <input className="hidden" name="username" type="text" defaultValue="user@example.com" />
        <InputLabel classes={{ root: "label-text" }} htmlFor="create-new-pwd">
          New Password
        </InputLabel>
        <div className="entry-form__wrapper-password">
          <TextField
            variant="outlined"
            classes={{ root: "input-text" }}
            name="new-password"
            type="password"
            id="create-new-pwd"
            autoComplete="new-password"
            placeholder="XXXXXXXX"
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
        <InputLabel classes={{ root: "label-text" }} htmlFor="confirm-new-pwd">
          Confirm New Password
        </InputLabel>
        <TextField
          variant="outlined"
          classes={{ root: "input-text" }}
          name="confirm-password"
          type="password"
          id="confirm-new-pwd"
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
