import { Link } from "react-router-dom";

import { Header } from "../header/Header";
// import { Footer } from "../footer/Footer";

import { Login } from "../login/Login";

export const TradePage = () => {
  return (
    <>
      <Header />
      <Login />
      {/* <Footer /> */}
      {/* //! remove bottom block on production */}
      <div style={{ minHeight: 250, backgroundColor: "gray" }} />
      <Link to="/">to landing page</Link>
    </>
  );
};
