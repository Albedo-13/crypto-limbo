import { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Route, RouterProvider, Routes, Navigate } from "react-router-dom";

import Skeleton from "@mui/material/Skeleton";

import { ScrollToTop } from "../../utils/ScrollToTop";
import { fetchCurrencies } from "../../slices/currenciesSlice";
import { SignUp } from "../entry/SignUp";
import { Login } from "../entry/Login";
import { ForgotPassword } from "../entry/ForgotPassword";
import { NewPassword } from "../entry/NewPassword";

import "./App.scss";

import { EntryPage, RoadMapPage } from "../pages";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const MarketPage = lazy(() => import("../pages/MarketPage"));
const CurrencyItemPage = lazy(() => import("../pages/CurrencyItemPage"));
const ReferralPage = lazy(() => import("../pages/ReferralPage"));

const router = createBrowserRouter([
  { path: "/", lazy: () => import("../pages/LandingPage"), Component: LandingPage },
  { path: "/market", lazy: () => import("../pages/MarketPage"), Component: MarketPage },
  { path: "/market/:id", lazy: () => import("../pages/CurrencyItemPage"), Component: CurrencyItemPage },
  { path: "/referral", lazy: () => import("../pages/ReferralPage"), Component: ReferralPage },
  { path: "*", Component: Root },
]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Skeleton variant="rounded" animation="wave" width={"100vw"} height={"100vh"} />}>
        <Routes>
          <Route path="/road-map" element={<RoadMapPage />} />
          <Route path="/login" element={<EntryPage component={Login} />} />
          <Route path="/signup" element={<EntryPage component={SignUp} />} />
          <Route path="/forgot-password" element={<EntryPage component={ForgotPassword} />} />
          <Route path="/new-password" element={<EntryPage component={NewPassword} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
