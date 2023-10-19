import { Button } from "@mui/material";

import { CustomSnackbar } from "../snackbars/Snackbars";
import { useSnackbar } from "../../hooks/snackbar.hook";
import "./referralLink.scss";

export const ReferralLink = () => {
  const { open, severity, message, handleOpen, handleClose } = useSnackbar();

  const handleClick = () => {
    navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}`);
  };

  return (
    <section className="referral-link">
      <div className="container">
        <h2 className="referral-link__title">Hurry Up! Start Earning Now</h2>
        <p className="referral-link__subtitle">
          Invite your friend to join our community and get the benefits. Sharing the link with them is simple - just
          send it over and let them experience all the perks firsthand. So don't wait, start spreading the word and
          bring your friends along for an incredible journey.
        </p>

        <Button
          sx={{
            width: "240px",
            marginTop: "80px",
          }}
          variant="contained"
          onClick={() => {
            handleClick();
            handleOpen("info", "Link copied to clipboard.");
          }}
        >
          Refer Now
        </Button>
      </div>
      <CustomSnackbar open={open} handleClose={handleClose} severity={severity} message={message} />
    </section>
  );
};
