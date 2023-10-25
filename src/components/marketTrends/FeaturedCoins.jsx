import { useSelector } from "react-redux";

import Skeleton from "@mui/material/Skeleton";

import "./marketTrends.scss";
import Spinner from "../spinner/Spinner";
import { MarketTrendsItem } from "./MarketTrendsItem";

export const FeaturedCoins = () => {
  const currencies = useSelector((state) => state.currencies);

  const renderMarketCards = (currencies) => {
    const market = currencies.data.length > 0 ? currencies.data.slice(0, 6) : [];
    return market.map((currency) => {
      return <MarketTrendsItem key={currency.id} currency={currency} />;
    });
  };

  const renderDecider = (loadingStatus) => {
    switch (loadingStatus) {
      case "idle":
        return renderMarketCards(currencies);
      case "loading":
        return <Spinner size={280} />;
      case "error":
        return <Skeleton variant="rounded" animation={false} width={"100%"} height={390} />;
      default:
        throw new Error("Wrong loading status");
    }
  };

  const marketItemsList = renderDecider(currencies.loadingStatus);
  return (
    <section className="market-trends featured-coins">
      <div className="container">
        <div className="featured-coins__header-wrapper">
          <h1 className="featured-coins__title">Featured Coins</h1>
        </div>
        <div className="market-trends-items">{marketItemsList}</div>
        <hr className="h-line" />
      </div>
    </section>
  );
};
