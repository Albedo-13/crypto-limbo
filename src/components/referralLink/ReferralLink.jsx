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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit vel eveniet aut ipsum sit nam
          quae magni blanditiis aliquid nihil. Quas quod aliquid, ducimus laudantium consectetur impedit blanditiis
          inventore!
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
