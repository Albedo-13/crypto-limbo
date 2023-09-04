import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import { MarketTrends } from "../marketTrends/MarketTrends";

export const TradePage = () => {
  return (
    <>
      <Header />
      <main>
        <MarketTrends />
      </main>
      <Footer />
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
      <Link to="/">to landing page</Link>
    </>
  );
};
