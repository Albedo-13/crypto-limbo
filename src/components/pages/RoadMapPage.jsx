import { Helmet } from "react-helmet";

import { Header } from "../header/Header";
import { RoadMap } from "../roadMap/RoadMap";

export const RoadMapPage = () => {
  return (
    <>
      <Helmet>
        <title>Road Map | Crypto Limbo</title>
      </Helmet>

      <Header />
      <RoadMap />
    </>
  );
};
