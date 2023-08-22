import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import { fetchCurrencies } from "../../slices/currenciesSlice";
import "./App.scss";
import { MainPage } from "../pages/MainPage";
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
      <Route path="/" element={<MainPage />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}
