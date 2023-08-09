import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, fetchCurrencies } from "../../slices/currencySlice";
import { useHttp } from "../../hooks/http.hook";
import "./App.scss";

function App() {
  const { value } = useSelector((state) => state.currency);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    request("https://api.coincap.io/v2/assets/bitcoin")
      .then((data) => dispatch(fetchCurrencies(data.data)))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p style={{ fontSize: 48, margin: 0 }}>{value}</p>
        <button onClick={() => dispatch(increment(5))}>INC</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
