import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { Welcome } from "../welcome/Welcome";
import { MarketTrends } from "../marketTrends/MarketTrends";
import { SimpleStep } from "../simpleStep/SimpleStep";
import { WhyChooseUs } from "../whyChooseUs/WhyChooseUs";
import { Testimonials } from "../testimonials/Testimonials";
import { FrequentlyAskedQuestions } from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import { DownloadApp } from "../downloadApp/DownloadApp";
import { Footer } from "../footer/Footer";

export const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Crypto Limbo</title>
        <link rel="preload" as="image" href="/assets/images/notebook.webp" />
      </Helmet>

      <Header />
      <main>
        <Welcome />
        <MarketTrends />
        <SimpleStep />
        <WhyChooseUs />
        <Testimonials />
        <DownloadApp />
        <FrequentlyAskedQuestions />
      </main>
      <Footer />
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
    </>
  );
};
