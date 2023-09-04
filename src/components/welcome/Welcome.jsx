import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { formatDigit, formatPercentage } from "../../utils/utils";
import Spinner from "../spinner/Spinner";
import "./welcome.scss";
import "../../styles/_sprays.scss";

export const Welcome = () => {
  const currencies = useSelector((state) => state.currencies);

  const renderMarket = (currencies) => {
    return currencies.map((currency) => {
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
        <div key={currency.id} className="welcome-market-item">
          <div className="welcome-market-item__wrapper">
            <div className="welcome-market-item__name">{currency.symbol}</div>
            {TrendingIcon}
            <div className={priceChangeStyles}>{formatPercentage(currency.price_change_percentage_24h)}</div>
          </div>
          <div className="welcome-market-item__current-price">{formatDigit(currency.current_price)}</div>
          <div className="vertical-separator__market" />
        </div>
      );
    });
  };

  const marketItemsList =
    currencies.loadingStatus === "loading" ? <Spinner /> : renderMarket(currencies.data.slice(0, 7));
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__wrapper-left">
            <h1 className="welcome__name horizontal-separator__small-blue">Crypto Brains</h1>
            <h2 className="welcome__title">Buy & Sell Crypto Easy With Crypto Limbo</h2>
            <hr className="horizontal-separator__dotted" />
            <p className="welcome__subtitle">
              Go through a couple of simple steps and start earning today with Crypto Limbo - one of the largest
              cryptocurrency exchanges in the world
            </p>
            <div className="welcome__buttons">
              <Button
                sx={{
                  width: 200,
                  marginRight: "30px",
                }}
                variant="contained"
                endIcon={<NorthEastIcon size="small" />}
                component={Link}
                to="/trade"
              >
                Start Now
              </Button>
              <Button
                sx={{
                  width: 200,
                }}
                variant="outlined"
                component={HashLink}
                to="/#simpleStep"
              >
                Beginner's Guide
              </Button>
            </div>
          </div>
          <div className="welcome__wrapper-right">
            <img className="welcome__img undraggable" src="/assets/images/notebook.webp" alt="notebook with statistics" />
            <div className="bg-img-spray_round" />
          </div>
        </div>
        <div className="welcome-market">{marketItemsList}</div>
      </div>
    </section>
  );
};
