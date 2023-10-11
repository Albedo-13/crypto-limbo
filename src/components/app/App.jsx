import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Route, RouterProvider, Routes, Navigate } from "react-router-dom";

import { ScrollToTop } from "../../utils/ScrollToTop";
import { fetchCurrencies } from "../../slices/currenciesSlice";
import { LandingPage, MarketPage, EntryPage, CurrencyItemPage } from "../pages";
import { SignUp } from "../entry/SignUp";
import { Login } from "../entry/Login";
import { ForgotPassword } from "../entry/ForgotPassword";
import { NewPassword } from "../entry/NewPassword";

import "./App.scss";

// TODO!: WebSocket постоянное обновление https://learn.javascript.ru/websocket

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
        <Route path="/market" element={<MarketPage />} />
        <Route path="/market/:id" element={<CurrencyItemPage />} errorElement={<LandingPage />} />
        <Route path="/login" element={<EntryPage component={Login} />} />
        <Route path="/signup" element={<EntryPage component={SignUp} />} />
        <Route path="/forgot-password" element={<EntryPage component={ForgotPassword} />} />
        <Route path="/new-password" element={<EntryPage component={NewPassword} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
