import { Link } from "react-router-dom";

import { Header } from "../header/Header";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Link to="/second">to second page</Link>
    </>
  );
}