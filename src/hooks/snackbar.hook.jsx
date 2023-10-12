import { useState } from "react";

export const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const handleOpen = (severity = "", message = "") => {
    setOpen(true);
    setSeverity(severity);
    setMessage(message);
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return {
    open,
    severity,
    message,
    handleOpen,
    handleClose,
  };
};
