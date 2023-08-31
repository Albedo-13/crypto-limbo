import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import { fetchCurrencies } from "../../slices/currenciesSlice";
import "./App.scss";
import { LandingPage } from "../pages/LandingPage";
import { SecondPage } from "../pages/SecondPage";

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
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}
