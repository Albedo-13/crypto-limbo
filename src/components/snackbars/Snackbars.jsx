import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

// TODO: snackbar variety (success, error) (https://mui.com/material-ui/react-snackbar/) 

export const SnackbarTest = ({ open, handleClose }) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Error! not enough money"
        // action={
        //   <>
        //     <Button color="secondary" size="small">
        //       UNDO
        //     </Button>
        //     <IconButton size="small" aria-label="close" color="inherit">
        //       <CloseIcon fontSize="small" />
        //     </IconButton>
        //   </>
        // }
      >
        <Alert severity="warning">This is a warning message!</Alert>
      </Snackbar>
    </>
  );
};

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
