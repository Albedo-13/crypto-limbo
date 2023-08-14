import { createTheme } from "@mui/material";

import variables from "../styles/_variables.scss?inline";
import { convertScssToObject } from '../utils/scssConverter';

const colors = convertScssToObject(variables);

const muiCustomTheme = createTheme({
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
        text: {

        },
        contained: {
          backgroundColor: colors.primaryBlue,
        }
      },
    },
  }
});

export default muiCustomTheme;