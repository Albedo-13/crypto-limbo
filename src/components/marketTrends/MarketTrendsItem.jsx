import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";

import { formatPercentage, formatDigit } from "../../utils/utils";
import { sparklineChartConfig } from "./chart";

import { trendingPriceChange } from "../../utils/TrendingPriceChange";

export const MarketTrendsItem = ({ currency }) => {
  const { TrendingIcon, priceChangeStyles } = trendingPriceChange(
    currency.price_change_percentage_24h,
    "market-trends-item__price-change"
  );
  
  const { createChartData, options } = sparklineChartConfig;
  const chartData = createChartData(currency);

  return (
    <Link to={`/market/${currency.id}`} className="market-trends-item">
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
        <Line data={chartData} options={options} />
      </div>
    </Link>
  );
};
