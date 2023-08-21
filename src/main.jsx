import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";

import muiCustomTheme from "./styles/muiTheme.js";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <ThemeProvider theme={muiCustomTheme}>
        <App />
      </ThemeProvider>
    {/* </React.StrictMode> */}
  </Provider>
);


// TODO: bg sprays to another scss file?
// TODO: clear unnecessary styles
// TODO: chart js
// TODO: extend currencySlice. Another Slice?
// TODO: Spinner to api info in Welcome & Market Trends
// TODO: api error boundaries
// TODO: react-helmet