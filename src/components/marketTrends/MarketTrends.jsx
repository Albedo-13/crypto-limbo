import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Button, Skeleton } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import "./marketTrends.scss";

import { activeFilterChanged, filteredCurrenciesChanged, fetchDefi, fetchMetaverse } from "../../slices/filtersSlice";
import Spinner from "../spinner/Spinner";
import { MarketTrendsItem } from "./MarketTrendsItem";

export const MarketTrends = () => {
  const currencies = useSelector((state) => state.currencies);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filteredCurrenciesChanged(currencies.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currencies.data, filters.activeFilter]);

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
      const isDisabled = filter.isRequireFetch && filters.isFetchingError;
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

  const renderMarketCards = (currencies) => {
    const market = currencies.filteredCurrencies.length > 0 ? currencies.filteredCurrencies.slice(0, 6) : [];
    return market.map((currency) => {
      return <MarketTrendsItem key={currency.id} currency={currency} />;
    });
  };

  const renderDecider = (loadingStatus) => {
    switch (loadingStatus) {
      case "idle":
        return renderMarketCards(filters);
      case "loading":
        return <Spinner size={280} />;
      case "error":
        return <Skeleton variant="rounded" animation={false} width={"100%"} height={390} />;
      default:
        throw new Error("Wrong loading status");
    }
  };

  const marketFiltersList = renderFilters(filters);
  const marketItemsList = renderDecider(currencies.loadingStatus);
  return (
    <section className="market-trends">
      <div className="container">
        <div className="market-trends__header-wrapper">
          <h2 className="market-trends__title">Market Trends</h2>
          <div className="market-trends__filters">{marketFiltersList}</div>
        </div>
        <hr className="h-line" />
        <div className="market-trends-items">{marketItemsList}</div>
        <div className="market-trends__link">
          <Button
            variant="contained"
            sx={{ width: 240 }}
            endIcon={<NorthEastIcon size="small" />}
            component={Link}
            to="/market"
          >
            See All Market
          </Button>
        </div>
      </div>
    </section>
  );
};
