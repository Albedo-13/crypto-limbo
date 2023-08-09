import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCurrencies } from "../../slices/currencySlice";
import "./App.scss";
import { MainPage } from "../pages/MainPage";
import { SecondPage } from "../pages/SecondPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainPage />
      <SecondPage />
    </>
  );
}

export default App;
