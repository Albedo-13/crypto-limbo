import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { FeaturedCoins } from "../marketTrends/FeaturedCoins";
import { Table } from "../table/Table";
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
        <Table component={MarketTable} />
      </main>
      <Footer />
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
    </>
  );
};
