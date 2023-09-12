import { useSelector } from "react-redux";

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

  const marketItemsList =
    currencies.loadingStatus === "loading" ? <Spinner size={280} /> : renderMarketCards(currencies);

  return (
    <section className="market-trends">
      <div className="container">
        <div className="featured-coins__header-wrapper">
          <h2 className="featured-coins__title">Featured Coins</h2>
        </div>
        <div className="market-trends-items">{marketItemsList}</div>
        <hr className="horizontal-separator" />
      </div>
    </section>
  );
};
