import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EF4444", 
      light: "#1E6BA8",
      dark: "#0A3560",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F59E0B", // warm amber
      light: "#FBBF24",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#e0e0e0", // light neutral background
      paper: "#FFFFFF",
    },
    text: {
      primary: "#EF4444", // dark gray
      secondary: "#6B7280", // medium gray
    },
    info: { 
      main: "#06B6D4", // cyan
    },
    success: {
      main: "#10B981", // emerald
    },
    warning: {
      main: "#F59E0B", // amber
    },
    error: {
      main: "#EF4444", // red
    },
    divider: "#E5E7EB",
  },
  typography: {
    fontFamily: ['"Inter"', '"Roboto"', "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
