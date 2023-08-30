import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { MarketTrends } from "../marketTrends/MarketTrends";
import { Footer } from "../footer/Footer";

export const SecondPage = () => {
  return (
    <>
      <Header />
      <MarketTrends />
      <Footer />
      <Link to="/">to first page</Link>
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
    </>
  );
};
