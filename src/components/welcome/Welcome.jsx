import { Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import "./welcome.scss";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <h1 className="welcome__name horizontal-separator__small-blue">Crypto Brains</h1>
          <h2 className="welcome__title">Buy & Sell Crypto Easy With Crypto Limbo</h2>
          <hr className="horizontal-separator__dotted" />
          <p className="welcome__subtitle">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout.
          </p>
          <Button
            sx={{
              width: 200,
              marginRight: "30px",
            }}
            variant="contained"
            endIcon={<NorthEastIcon size="small" />}>
            Start Now
          </Button>
          <Button
            sx={{
              width: 200,
            }}
            variant="outlined">
            Beginner's Guide
          </Button>
        </div>
      </div>
    </section>
  );
};
