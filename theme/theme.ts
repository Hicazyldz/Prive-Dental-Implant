import { createTheme } from "@mui/material/styles";

// 1) MUI tiplerini genişletiyoruz
declare module "@mui/material/styles" {
  interface TypeBackground {
    dark: string;
    darker: string;

    // PRIVE palette background tokenları
    brandLight: string;   // #7CBFEA
    brandMain: string;    // #25558E
    graySoft: string;     // #EAEAEA
    grayLine: string;     // #CFCFCE
  }

  interface TypeText {
    // Backgrounda göre hazır “kontrast text” tokenları
    onBrandLight: string;
    onBrandMain: string;
    onGraySoft: string;
    onGrayLine: string;
    onDark: string;
    onDarker: string;
    onPaper: string;
  }
}

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#25558E",
      light: "#4A7AB8",
      dark: "#1A3D66",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#7CBFEA",
      light: "#A5D4F2",
      dark: "#5AABDB",
      contrastText: "#FFFFFF",
    },

    // 2) Tüm renkleri background olarak ekliyoruz
    background: {
      default: "#EAEAEA", // graySoft
      paper: "#FFFFFF",

      dark: "#2a2a2a",
      darker: "#424041",

      brandLight: "#7CBFEA",
      brandMain: "#25558E",
      graySoft: "#EAEAEA",
      grayLine: "#CFCFCE",
    },

    // 3) “Zemine göre yazı rengi” tokenları
    // Açık zeminlerde koyu, koyu zeminlerde açık
    text: {
      primary: "#25558E",
      secondary: "#6B7280",
      disabled: "#9CA3AF",

      onBrandLight: "#25558E", // açık mavi üstüne koyu mavi
      onBrandMain: "#FFFFFF",  // koyu mavi üstüne beyaz
      onGraySoft: "#25558E",   // açık gri üstüne koyu mavi
      onGrayLine: "#25558E",   // gri çizgi üstüne koyu mavi
      onDark: "#FFFFFF",       // koyu zemin
      onDarker: "#FFFFFF",     // daha koyu zemin
      onPaper: "#25558E",      // beyaz zemin
    },

    divider: "#CFCFCE",

    info: { main: "#7CBFEA" },
    success: { main: "#10B981" },
    warning: { main: "#F59E0B" },
    error: { main: "#EF4444" },
  },

  typography: {
    fontFamily: ['"Montserrat"', '"Inter"', '"Roboto"', "sans-serif"].join(","),
    h1: { fontWeight: 600, fontFamily: '"Montserrat", sans-serif' },
    h2: { fontWeight: 600, fontFamily: '"Montserrat", sans-serif' },
    h3: { fontWeight: 600, fontFamily: '"Montserrat", sans-serif' },
    h4: { fontWeight: 600, fontFamily: '"Montserrat", sans-serif' },
    h5: { fontWeight: 600, fontFamily: '"Montserrat", sans-serif' },
    h6: { fontWeight: 600, fontFamily: '"Montserrat", sans-serif' },
    subtitle1: { fontWeight: 300, fontFamily: '"Montserrat", sans-serif' },
    subtitle2: { fontWeight: 300, fontFamily: '"Montserrat", sans-serif' },
    body1: { fontFamily: '"Montserrat", sans-serif' },
    body2: { fontFamily: '"Montserrat", sans-serif' },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "50px",
          padding: "10px 24px",
          fontFamily: '"Montserrat", sans-serif',
        },
        contained: {
          boxShadow: "0 4px 14px rgba(37, 85, 142, 0.2)",
          "&:hover": {
            boxShadow: "0 6px 20px rgba(37, 85, 142, 0.3)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": { borderWidth: "2px" },
        },
      },
    },
    MuiPaper: { styleOverrides: { root: { borderRadius: "8px" } } },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: "16px", boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)" },
      },
    },
  },
});

export default theme;
