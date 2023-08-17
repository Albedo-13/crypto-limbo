import { Button } from "@mui/material";
import "./marketTrends.scss";

import testGraph from "../../assets/temp/test-layout-graph.png"

export const MarketTrends = () => {

  console.log("MarketTrends render");
  return (
    <section className="market-trends">
      <div className="container">
        <div className="market-trends__header-wrapper">
          <h2 className="market-trends__title">Market Trends</h2>
          <div className="market-trends__filters">
            {/* не нужны className */}
            <Button variant="filter" className="market-trends__filter">All</Button>
            <Button variant="filter" className="market-trends__filter">Top Gainers</Button>
            <Button variant="filter" className="market-trends__filter">Top Losers</Button>
            <Button variant="filter" className="market-trends__filter">New Listing</Button>
            <Button variant="filter" className="market-trends__filter">Defi</Button>
            <Button variant="filter" className="market-trends__filter">Metaverse</Button>
          </div>
        </div>
        <div className="market-trends-items">
          <div className="market-trends-item">
            <div className="market-trends-item__image"></div>
            <div className="market-trends-item__name"></div>
            <div className="market-trends-item__price-change"></div>
            <div className="market-trends-item__current-price"></div>
            <div className="market-trends-item__graph">
              <img src={testGraph} alt="test to delete" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
