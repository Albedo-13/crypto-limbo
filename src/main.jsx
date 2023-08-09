import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// TODO: React Router
// TODO: MUI
// TODO: clear unnecessary styles
// TODO: chart js