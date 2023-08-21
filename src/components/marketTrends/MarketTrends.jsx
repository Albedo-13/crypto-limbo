import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import { createChartData, options } from "./chart";
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

import "./marketTrends.scss";

import { formatDigit, formatPercentage } from "../../utils/utils";
import { setActiveFilter, setFilteredCurrencies } from "../../slices/marketTrendsFiltersSlice";
import { useEffect } from "react";

// TODO: change market-trends__link (overwrap)
// TODO?: filters (and react states from here) to new slice
// TODO: memoize useselectors
// TODO: memoize filters change
// TODO: crypto item to different file
// TODO?: filter buttons from redux store?
// TODO?: filters to new component?

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const MarketTrends = () => {
  const currencies = useSelector((state) => state.currencies);
  const filters = useSelector((state) => state.marketTrendsFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilteredCurrencies(currencies.data.slice(0, 6)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies.data]);

  const renderFilters = (filters) => {
    return filters.filters.map((filter) => {
      const isActive = classNames({ active: filter === filters.activeFilter });
      return (
        <Button
          key={filter}
          name={filter}
          variant="filter"
          className={isActive}
          onClick={() => dispatch(setActiveFilter(filter))}
        >
          {filter}
        </Button>
      );
    });
  };

  const renderMarket = (currencies) => {
    const market = currencies.length > 0 ? currencies.slice(0, 6) : [];
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

      const chartData = createChartData(currency);
      return (
        <Link to="#" key={currency.id} className="market-trends-item">
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
    });
  };

  const marketFiltersList = renderFilters(filters);
  const marketItemsList = renderMarket(filters.filteredCurrencies);
  return (
    <section className="market-trends">
      <div className="container">
        <div className="market-trends__header-wrapper">
          <h2 className="market-trends__title">Market Trends</h2>
          <div className="market-trends__filters">{marketFiltersList}</div>
        </div>
        <hr className="horizontal-separator" />
        <div className="market-trends-items">{marketItemsList}</div>
        <Link to="#" className="market-trends__link">
          <Button variant="contained" sx={{ width: 240 }} endIcon={<NorthEastIcon size="small" />}>
            See All Market
          </Button>
        </Link>
      </div>
    </section>
  );
};
