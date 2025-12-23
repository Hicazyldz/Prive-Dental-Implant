import { createTheme } from "@mui/material/styles";

// Extend the Theme interface
declare module "@mui/material/styles" {
  interface TypeBackground {
    dark: string;
    darker: string;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EF4444", 
      light: "#F87171",
      dark: "#DC2626",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F59E0B", 
      light: "#FBBF24",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#e0e0e0",
      paper: "#FFFFFF",
      dark: "#2a2a2a",
      darker: "#424041",
    },
    text: {
      primary: "#1a1a1a", 
      secondary: "#6B7280", 
      disabled: "#9CA3AF", 
    },
    info: { 
      main: "#06B6D4", 
    },
    success: {
      main: "#10B981", 
    },
    warning: {
      main: "#F59E0B", 
    },
    error: {
      main: "#EF4444", 
    },
    divider: "#E5E7EB",
  },
  typography: {
    fontFamily: ['"Inter"', '"Roboto"', "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "50px",
          padding: "10px 24px",
        },
        contained: {
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});

export default theme;