import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { FeaturedCoins } from "../marketTrends/FeaturedCoins";
import { MarketTable } from "../marketTable/MarketTable";

export const MarketPage = () => {
  return (
    <>
      <Helmet>
        <title>Market | Crypto Limbo</title>
      </Helmet>

      <Header />
      <main>
        <FeaturedCoins />
        <MarketTable />
      </main>
      <Footer />
    </>
  );
};
