import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { ReferStats } from "../referStats/ReferStats";
import { ReferWhyUsCarousel } from "../referWhyUsCarousel/ReferWhyUsCarousel";
import { Testimonials } from "../testimonials/Testimonials";
import { ReferralLink } from "../referralLink/ReferralLink";
import { Footer } from "../footer/Footer";

export const ReferralPage = () => {
  return (
    <>
      <Helmet>
        <title>Referral | Crypto Limbo</title>
        <meta name="description" content="Invite your friends with referral link and both of your receive generous bonuses with Crypto Limbo" />
      </Helmet>

      <Header />
      <ReferStats />
      <ReferWhyUsCarousel />
      <Testimonials />
      <ReferralLink />
      <Footer />
    </>
  );
};
