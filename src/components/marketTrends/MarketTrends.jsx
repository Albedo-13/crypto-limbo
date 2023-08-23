import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

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

import "./marketTrends.scss";

import {
  activeFilterChanged,
  filteredCurrenciesChanged,
  fetchDefi,
  fetchMetaverse,
} from "../../slices/marketTrendsFiltersSlice";
import { MarketTrendsItem } from "./MarketTrendsItem";

// TODO?: filter buttons from redux store?
// TODO: try to extend init request to 250 coins

// TODO: try to fix double filter renders (maybe whole section double renders)
// TODO!: memoize useselectors
// TODO: memoize filters change
// TODO: transitions (react transition group)

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const MarketTrends = () => {
  const currencies = useSelector((state) => state.currencies);
  const filters = useSelector((state) => state.marketTrendsFilters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredCurrenciesChanged(currencies.data.slice(0, 6)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies.data]);

  useEffect(() => {
    dispatch(filteredCurrenciesChanged(currencies.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.activeFilter, filters.isFetchButtonsDisable]);

  const dispatchBasedOnFilter = (filter) => {
    switch (filter) {
      case "Defi":
        filters.filteredCurrenciesDefi.length > 0 ? dispatch(activeFilterChanged(filter)) : dispatch(fetchDefi(filter));
        break;
      case "Metaverse":
        filters.filteredCurrenciesMetaverse.length > 0
          ? dispatch(activeFilterChanged(filter))
          : dispatch(fetchMetaverse(filter));
        break;
      default:
        dispatch(activeFilterChanged(filter));
        break;
    }
  };

  const renderFilters = (filters) => {
    return filters.filters.map((filter) => {
      const isActive = classNames({ active: filter.name === filters.activeFilter });
      const isDisabled = (filter.isRequireFetch && filters.isFetchButtonsError);
      return (
        <Button
          key={filter.name}
          name={filter.name}
          variant="filter"
          className={isActive}
          onClick={() => dispatchBasedOnFilter(filter.name)}
          disabled={isDisabled}
        >
          {filter.name}
        </Button>
      );
    });
  };

  const renderMarket = (currencies) => {
    const market = currencies.length > 0 ? currencies.slice(0, 6) : [];
    return market.map((currency) => {
      return <MarketTrendsItem key={currency.id} currency={currency} />;
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
        <div className="market-trends__link">
          <Link to="#">
            <Button variant="contained" sx={{ width: 240 }} endIcon={<NorthEastIcon size="small" />}>
              See All Market
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
