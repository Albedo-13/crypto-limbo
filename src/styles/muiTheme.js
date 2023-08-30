import { createTheme } from "@mui/material";

import variables from "../styles/_variables.scss?inline";
import { convertScssToObject } from "../utils/utils";

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
        contained: {
          backgroundColor: colors.primaryBlue,
          fontSize: 20,
        },
        outlined: {
          borderColor: colors.white,
          fontSize: 20,
          "&:hover": {
            borderColor: colors.primaryBlue,
          },
        },
        filter: {
          width: "auto",
          fontSize: 20,
          color: colors.grey6,
          marginBottom: "6px",
          marginLeft: "3px",
          "&.active": {
            borderTop: `2px solid ${colors.primaryBlueDark}`,
            borderBottom: `2px solid ${colors.primaryBlueDark}`,
            color: colors.primaryBlue,
          },
          "&.Mui-disabled": {
            color: colors.grey8,
            opacity: 0.4,
            "&.active": {
              borderTop: `2px solid ${colors.grey8}`,
              borderBottom: `2px solid ${colors.grey8}`,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          position: "relative",
          minHeight: "78px",
          color: `${colors.white}`,
          backgroundColor: "transparent",
          borderRadius: "4px",
          border: `1px solid ${colors.white}1a`,
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: "78px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          color: `${colors.grey6}`,
        },
      },
    },
  },
});

export default muiCustomTheme;
