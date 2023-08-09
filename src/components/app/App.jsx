import reactLogo from "../../assets/react.svg";
import viteLogo from "../../../public/vite.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../slices/counterSlice";

function App() {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p style={{fontSize: 48, margin: 0}}>{value}</p>
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
