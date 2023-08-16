import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { Welcome } from "../welcome/Welcome";
import { MarketTrends } from "../marketTrends/MarketTrends";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Welcome />
      <MarketTrends />
      <Link to="/second">to second page</Link>
      {/* //! remove bottom block on production */}
      <div style={{minHeight: 250, backgroundColor: "gray"}} />
    </>
  );
}