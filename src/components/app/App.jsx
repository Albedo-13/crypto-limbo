import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import "./App.scss";

import { fetchCurrencies } from "../../slices/currenciesSlice";
import { LandingPage } from "../pages/LandingPage";
import { TradePage } from "../pages/TradePage";
import { ScrollToTop } from "../../utils/ScrollToTop";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trade" element={<TradePage />} />
      </Routes>
    </>
  );
}
