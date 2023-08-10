import { Link } from "react-router-dom";

import { MarketTrands } from "../marketTrands/MarketTrands"

export const SecondPage = () => {
  return (
    <>
      <MarketTrands />
      <Link to="/">to first page</Link>
    </>
  );
}