import { Link } from "react-router-dom";
import classNames from "classnames";
import { Line } from "react-chartjs-2";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { formatPercentage, formatDigit } from "../../utils/utils";
import { createChartData, options } from "./chart";

export const MarketTrendsItem = ({ currency }) => {
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

  const chartData = createChartData(currency);
  return (
    <Link to="#" className="market-trends-item">
      <div className="market-trends-item__image">
        <img className="undraggable" src={currency.image} alt={currency.name} />
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
        <Line options={options} data={chartData} />
      </div>
    </Link>
  );
};
