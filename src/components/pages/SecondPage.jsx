import { Link } from "react-router-dom";

import { MarketTrends } from "../marketTrends/MarketTrends";

export const SecondPage = () => {
  return (
    <>
      <MarketTrends />
      <Link to="/">to first page</Link>
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
    </>
  );
};
