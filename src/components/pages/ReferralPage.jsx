import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { ReferStats } from "../referStats/ReferStats";
import { ReferWhyUsCarousel } from "../referWhyUsCarousel/ReferWhyUsCarousel";
import { Testimonials } from "../testimonials/Testimonials";
import { Footer } from "../footer/Footer";

export const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>Referral | Crypto Limbo</title>
      </Helmet>

      <Header />
      <ReferStats />
      <ReferWhyUsCarousel />
      <Testimonials />
      <Footer />
    </>
  );
};
