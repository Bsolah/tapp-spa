"use client";
import { createTheme } from "@mui/material";
const baseTheme = createTheme();
export const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "Inter",
        fontWeight: "300",
        color: "#000",
      },
      styleOverrides: {
        h3: {
          fontSize: 40,
          [baseTheme.breakpoints.down("sm")]: {
            fontSize: 28,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        contained: {
          background: "var(--primary-gradient)",
          boxShadow: "none",
          borderRadius: 10,
          padding: "8px 24px",
          fontSize: 14,
          fontWeight: 500,
          transition: "all 0.3s ease-in-out",
        },
        outlined: {
          boxShadow: "none",
          borderRadius: 10,
          padding: "8px 24px",
          fontSize: 14,
          fontWeight: 500,
          color: "#fff",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#C06CE9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#212436",
      contrastText: "#fff",
    },
  },
});
