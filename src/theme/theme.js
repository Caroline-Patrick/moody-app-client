import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  root: {
    display: "flex",
  },
  typography: {
    fontFamily: "Lato, Arial",
    fontSize: 12,
    h1: {
      fontFamily: "Lato, Arial",
      fontSize: 30,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Lato, Arial",
      fontSize: 20,
      fontWeight: 700,
      paddingBottom: 20,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#480075",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: "#210036",
          "&:hover": {
            backgroundColor: "#8400D6",
          },
          marginRight: 15,
        },
      },
    },
  },
});

export default createTheme(myTheme);

// backgroundColor: "#662E9B",
