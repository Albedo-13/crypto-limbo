import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import NorthEastIcon from "@mui/icons-material/NorthEast";
import Skeleton from "@mui/material/Skeleton";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";
import { formatDigit, formatPercentage } from "../../utils/utils";

import "./welcome.scss";
import notebook from "../../assets/images/notebook.webp";

export const Welcome = () => {
  const currencies = useSelector((state) => state.currencies);

  const renderMarket = (currencies) => {
    return currencies.map((currency) => {
      const { priceChangeStyle, TrendingIcon } = trendingPriceChange(currency.price_change_percentage_24h);

      return (
        <React.Fragment key={currency.id}>
          <div className="welcome-market-item">
            <div className="welcome-market-item__wrapper">
              <div className="welcome-market-item__name">{currency.symbol}</div>
              {TrendingIcon}
              <div className={`${priceChangeStyle} welcome-market-item__price-change`}>
                {formatPercentage(currency.price_change_percentage_24h)}
              </div>
            </div>
            <div className="welcome-market-item__current-price">{formatDigit(currency.current_price)}</div>
          </div>
          <div className="v-line_grey" />
        </React.Fragment>
      );
    });
  };

  const renderDecider = (loadingStatus) => {
    switch (loadingStatus) {
      case "idle":
        return renderMarket(currencies.data.slice(0, 7));
      case "loading":
      case "error":
        return <Skeleton variant="rounded" animation={false} width={"100%"} height={80} />;
      default:
        throw new Error("Wrong loading status");
    }
  };

  const marketItemsList = renderDecider(currencies.loadingStatus);
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome__wrapper">
          <div className="welcome__wrapper-left">
            <h1 className="welcome__name h-line_small-blue">Crypto Limbo</h1>
            <h2 className="welcome__title">Buy & Sell Crypto Easy With Crypto Limbo</h2>
            <hr className="h-line_dotted" />
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
                to="/market"
              >
                Start Now
              </Button>
              <Button
                sx={{
                  width: 200,
                }}
                variant="outlined"
                component={HashLink}
                to="/#start-trading"
              >
                Beginner's Guide
              </Button>
            </div>
          </div>
          <div className="welcome__wrapper-right">
            <img className="welcome__img undraggable" src={notebook} alt="notebook with statistics" />
            <div className="bg-img-spray_round" />
          </div>
        </div>
        <div className="welcome-market">{marketItemsList}</div>
      </div>
    </section>
  );
};
