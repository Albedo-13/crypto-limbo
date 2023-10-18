import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { ReferStats } from "../referStats/ReferStats";
import { Footer } from "../footer/Footer";

export const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>Referral | Crypto Limbo</title>
      </Helmet>

      <Header />
      <ReferStats />
      <Footer />
    </>
  );
};
