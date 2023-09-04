import { Link } from "react-router-dom";

import { Header } from "../header/Header";
// import { Footer } from "../footer/Footer";

import { Login } from "../entry/Login";
import { Entry } from "../entry/Entry";

export const TradePage = () => {
  return (
    <>
      <Header />
      <Entry component={Login} />
      {/*<Footer /> */}
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
      <Link to="/">to landing page</Link>
    </>
  );
};
