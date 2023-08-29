import { Link } from "react-router-dom";

import { Header } from "../header/Header";
import { Welcome } from "../welcome/Welcome";
import { MarketTrends } from "../marketTrends/MarketTrends";
import { SimpleStep } from "../simpleStep/SimpleStep";
import { WhyChooseUs } from "../whyChooseUs/WhyChooseUs";
import { Testimonials } from "../testimonials/Testimonials";
import { FrequentlyAskedQuestions } from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <MarketTrends />
        <SimpleStep />
        <WhyChooseUs />
        <Testimonials />
        <FrequentlyAskedQuestions />
      </main>
      <Link to="/second">to second page</Link>
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
    </>
  );
};
