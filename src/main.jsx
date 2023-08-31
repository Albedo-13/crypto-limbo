import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";

import muiCustomTheme from "./styles/muiTheme.js";
import "./styles/index.scss";

console.log("Hello, visitor! Please consider, that site is using free version of crypto API. It means that sometimes you can receive errors (like 429 - too many requests) even without reaching requests limit. Please, be patient and refresh page after a few minutes");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <ThemeProvider theme={muiCustomTheme}>
        <App />
      </ThemeProvider>
    {/* </React.StrictMode> */}
  </Provider>
);

// TODO: Link to NavLink in Header and Footer to color and disable active pages
// TODO: sprays change width & height %'s on adapt screen sizes
// TODO: replace lorem ipsum & fishtext with meaningful content
// TODO: react-helmet
// TODO: ChartJS.register in MarketTrends (dublicate? to top or other file?)
// TODO: transitions (react transition group)
// TODO: backdrop on React.lazy -> Suspense loading (https://mui.com/material-ui/react-backdrop/)
// TODO: All MUI selectors to new file (muiTheme.scss?)
// TODO: update footer & header links (all links i mean)
// TODO: a11y
// TODO: mobile adaptation

// for graph
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1691167778&to=1692267778
