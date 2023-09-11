import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { MarketTrends } from "../marketTrends/MarketTrends";

export const TradePage = () => {
  return (
    <>
      <Helmet>
        <title>Trade | Crypto Limbo</title>
      </Helmet>

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
