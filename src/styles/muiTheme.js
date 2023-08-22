import { createTheme } from "@mui/material";

import variables from "../styles/_variables.scss?inline";
import { convertScssToObject } from '../utils/utils';

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
          fontSize: 20,
        },
        outlined: {
          borderColor: colors.white,
          fontSize: 20,
          '&:hover': {
            borderColor: colors.primaryBlue,
          }
        },
        filter: {
          width: "auto",
          fontSize: 20,
          color: colors.grey6,
          marginBottom: "6px",
          marginLeft: "3px",
          '&.active': {
            borderTop: `2px solid ${colors.primaryBlueDark}`,
            borderBottom: `2px solid ${colors.primaryBlueDark}`,
            color: colors.primaryBlue,
          }
        },
      },
    },
  }
});

export default muiCustomTheme;