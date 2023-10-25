import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    "fontFamily": `"Source Sans 3", sans-serif`,
  },
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;