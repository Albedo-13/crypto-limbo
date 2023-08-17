import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import classNames from "classnames";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { formatDigit, formatPercentage } from "../../utils/utils";
import notebook from "../../assets/images/notebook.png";
import "./welcome.scss";

export const Welcome = () => {
  const coins = useSelector((state) => state.currencies.data.slice(0, 7));

  const renderMarket = (coins) => {
    return coins.map((currency) => {
      const isPercentageIncreasing = currency.price_change_percentage_24h >= 0;

      const TrendingIcon = isPercentageIncreasing ? (
        <TrendingUpIcon sx={{ fontSize: "18px" }} className="success" />
      ) : (
        <TrendingDownIcon sx={{ fontSize: "18px" }} className="error" />
      );

      const priceChangeStyles = classNames("welcome-market-item__price-change", {
        success: isPercentageIncreasing,
        error: !isPercentageIncreasing,
      });

      return (
        <div key={currency.id} className="welcome-market-item vertical-separator__market">
          <div className="welcome-market-item__wrapper">
            <div className="welcome-market-item__name">{currency.symbol}</div>
            {TrendingIcon}
            <div className={priceChangeStyles}>{formatPercentage(currency.price_change_percentage_24h)}</div>
          </div>
          <div className="welcome-market-item__current-price">{formatDigit(currency.current_price)}</div>
        </div>
      );
    });
  };

  const marketItemsList = renderMarket(coins);
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__wrapper-left">
            <h1 className="welcome__name horizontal-separator__small-blue">Crypto Brains</h1>
            <h2 className="welcome__title">Buy & Sell Crypto Easy With Crypto Limbo</h2>
            <hr className="horizontal-separator__dotted" />
            <p className="welcome__subtitle">
              It is a long established fact that a reader will be distracted by the readable content of a page when{" "}
              <br />
              looking at its layout.
            </p>
            <div className="welcome__buttons">
              <Button
                sx={{
                  width: 200,
                  marginRight: "30px",
                }}
                variant="contained"
                endIcon={<NorthEastIcon size="small" />}
              >
                Start Now
              </Button>
              <Button
                sx={{
                  width: 200,
                }}
                variant="outlined"
              >
                Beginner's Guide
              </Button>
            </div>
          </div>
          <div className="welcome__wrapper-right">
            <img className="welcome__img undraggable" src={notebook} alt="notebook with statistics" />
            <div className="welcome__bg-spray"></div>
          </div>
        </div>
        <div className="welcome-market">{marketItemsList}</div>
      </div>
    </section>
  );
};
