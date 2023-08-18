import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import classNames from "classnames";

// import NorthEastIcon from "@mui/icons-material/NorthEast";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import "./marketTrends.scss";

import { formatDigit, formatPercentage } from "../../utils/utils";
import { Link } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// TODO: graph js
// TODO: section header separator & button variant contained
// FIND INFO: MUI Button toggle active class

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["January", "February"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random(-1000, 1000) * 1000),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointRadius: 10,
      pointHoverRadius: 15,
    },
    {
      label: "Dataset 2",
      data: labels.map(() => Math.random(-1000, 1000) * 1000),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      pointRadius: 10,
      pointHoverRadius: 15,
    },
  ],
};

export const MarketTrends = () => {
  const coins = useSelector((state) => state.currencies.data.slice(0, 6));

  const renderMarket = (market) => {
    return market.map((currency) => {
      const isPercentageIncreasing = currency.price_change_percentage_24h >= 0;

      const TrendingIcon = isPercentageIncreasing ? (
        <TrendingUpIcon sx={{ fontSize: "20px" }} className="success" />
      ) : (
        <TrendingDownIcon sx={{ fontSize: "20px" }} className="error" />
      );

      const priceChangeStyles = classNames("market-trends-item__price-change", {
        success: isPercentageIncreasing,
        error: !isPercentageIncreasing,
      });

      return (
        <Link to="#" key={currency.id} className="market-trends-item">
          <div className="market-trends-item__image">
            <img src={currency.image} alt={currency.name} />
          </div>
          <div className="market-trends-item__name">
            {currency.name} / {currency.symbol.toUpperCase()}
          </div>
          <div className="market-trends-item__price-change-wrapper">
            {TrendingIcon}
            <div className={priceChangeStyles}>{formatPercentage(currency.price_change_percentage_24h)}</div>
          </div>
          <div className="market-trends-item__current-price">{formatDigit(currency.current_price)}</div>
          <div className="market-trends-item__graph">
            <Line options={options} data={data} />
          </div>
        </Link>
      );
    });
  };

  console.log("MarketTrends render");
  const marketItemsList = renderMarket(coins);
  return (
    <section className="market-trends">
      <div className="container">
        <div className="market-trends__header-wrapper">
          <h2 className="market-trends__title">Market Trends</h2>
          <div className="market-trends__filters">
            {/* не нужны className */}
            <Button variant="filter" className="market-trends__filter">
              All
            </Button>
            <Button variant="filter" className="market-trends__filter">
              Top Gainers
            </Button>
            <Button variant="filter" className="market-trends__filter">
              Top Losers
            </Button>
            <Button variant="filter" className="market-trends__filter">
              New Listing
            </Button>
            <Button variant="filter" className="market-trends__filter">
              Defi
            </Button>
            <Button variant="filter" className="market-trends__filter">
              Metaverse
            </Button>
          </div>
        </div>
=        <div className="market-trends-items">{marketItemsList}</div>
      </div>
    </section>
  );
};
