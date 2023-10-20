import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";

import "./styles/index.scss";

import theme from "./styles/muiTheme.js";

console.log(
  "Hello, visitor! Please consider, that site is using free version of crypto API. It means that sometimes you can receive errors (like 429 - too many requests) even without reaching requests limit. Please, be patient and refresh page after a few minutes"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

//! Landing Page (and general)

// TODO: test skeletons on mobile adaptation
// TODO: mobile adaptation, sprays change width & height %'s on adapt screen sizes
// TODO: explore a11y, adapt for screen readers
// TODO: reduce bundle size (vite console advices)
