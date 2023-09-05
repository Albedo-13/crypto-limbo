import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import "./App.scss";

import { fetchCurrencies } from "../../slices/currenciesSlice";
import { LandingPage, TradePage, EntryPage } from "../pages";
import { SignUp } from "../entry/SignUp";
import { Login } from "../entry/Login";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { ForgotPassword } from "../entry/ForgotPassword";

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
        <Route path="/login" element={<EntryPage component={Login} />} />
        <Route path="/signup" element={<EntryPage component={SignUp} />} />
        <Route path="/forgot-password" element={<EntryPage component={ForgotPassword} />} />
      </Routes>
    </>
  );
}
