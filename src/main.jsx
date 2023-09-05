import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";

import "./styles/index.scss";

console.log("Hello, visitor! Please consider, that site is using free version of crypto API. It means that sometimes you can receive errors (like 429 - too many requests) even without reaching requests limit. Please, be patient and refresh page after a few minutes");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

//! Landing Page (and general)
// TODO: Link to NavLink in Header and Footer to color and disable active pages
// V TODO: replace lorem ipsum & fishtext with meaningful content
// TODO: react-helmet (try to preload images only on landing page)
// TODO: ChartJS.register (where to init?)
// TODO: transitions (react transition group)
// TODO: backdrop on React.lazy -> Suspense loading (https://mui.com/material-ui/react-backdrop/)
// TODO: update footer & header links (all links i mean)
// TODO: mobile adaptation
// TODO: sprays change width & height %'s on adapt screen sizes
// TODO: explore a11y, adapt for screen readers

// for graph
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1691167778&to=1692267778
