import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - (${BOARD_BAR_HEIGHT} + ${APP_BAR_HEIGHT}))`;
const HEADER_HEIGHT = "50px";
const FOOTER_HEIGHT = "56px";

// Create a theme instance.
const theme = extendTheme({
  trolle: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    cardHeaderHeight: HEADER_HEIGHT,
    cardFooterHeight: FOOTER_HEIGHT,
  },
  cssCustom: {
    headerHeight: "60px",
    boardBarHeight: "60px",
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange,
  //     },
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange,
  //     },
  //   },
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "2px !important",
          },
          "&:focused": {
            borderWidth: "2px !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "1px !important",
          },
          "&:hover fieldset": {
            borderWidth: "3px !important",
          },
          "&:focused fieldset": {
            borderWidth: "3px !important",
          },
        },
      },
    },
  },
});

export default theme;
