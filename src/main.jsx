import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";

import "./styles/index.scss";

const theme = createTheme({
  typography: {
    // fontSize: 18,
    fontFamily: "'Source Sans 3', sans-serif",
    fontWeightRegular: "400",
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

// TODO: MUI
// TODO: clear unnecessary styles
// TODO: chart js
