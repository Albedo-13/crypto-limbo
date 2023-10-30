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
        <meta name="description" content="View top cryptocurrency prices live, crypto charts, market cap, and trading volume. Discover today’s new and trending coins, top crypto gainers and losers in the market with crypto brains." />
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
