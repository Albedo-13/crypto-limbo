import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchImage } from "../../slices/currencySlice";

export const Header = () => {
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchImage("btc"));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};
