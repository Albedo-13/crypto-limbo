import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import notebook from "../../assets/images/notebook.png";
import "./welcome.scss";
import { formatDigit } from "../../utils/scssConverter";

export const Welcome = () => {
  const market = useSelector((state) => state.currencies.data.slice(0, 7));
  console.log(market);

  const renderMarket = (market) => {
    return market.map(() => {
      return <div className="welcome-market-item"></div>;
    });
  };


  const marketItemsList = renderMarket(market);
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
        <div className="welcome-market">

          <div className="welcome-market-item">
            <div className="welcome-market-item__wrapper">
              <div className="welcome-market-item__name">BTC / INR</div>
              <TrendingUpIcon fontSize="15" className="welcome-market-item__trend-icon"></TrendingUpIcon>
              <div className="welcome-market-item__price-change">5.76</div>
            </div>
            <div className="welcome-market-item__current-price">{formatDigit(29321.32)}</div>
          </div>

          <div className="welcome-market-item">
            <div className="welcome-market-item__wrapper">
              <div className="welcome-market-item__name">BTC/INR</div>
              <div className="welcome-market-item__price-change">5.76</div>
            </div>
            <div className="welcome-market-item__current-price">29321.32</div>
          </div>

          {/* {marketItemsList} */}
        </div>
      </div>
    </section>
  );
};
