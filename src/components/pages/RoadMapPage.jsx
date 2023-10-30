import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { RoadMap } from "../roadMap/RoadMap";
import { FrequentlyAskedQuestions } from "../frequentlyAskedQuestions/FrequentlyAskedQuestions";
import { Footer } from "../footer/Footer";

export const RoadMapPage = () => {
  return (
    <>
      <Helmet>
        <title>Road Map | Crypto Limbo</title>
        <meta name="description" content="Check our Crypto Limbo development roadmap progress from 2018 to 2024" />
      </Helmet>

      <Header />
      <RoadMap />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};
