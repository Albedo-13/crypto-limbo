import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import App from "./components/app/App.jsx";
import { store } from "./store/store.js";

import "./styles/index.scss";
import variables from "./styles/_variables.scss?inline";
import { convertScssToObject } from './utils/scssConverter';

const colors = convertScssToObject(variables);

const theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: "'Source Sans 3', sans-serif",
    fontWeightRegular: "400",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: colors.white,
          width: "140px",
          height: "56px",
          textTransform: "none",
        },
      },
    },
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

// TODO: clear unnecessary styles
// TODO: chart js
