import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          /* Add your scrollbar styling code here */
          /* Webkit/Blink Browsers */
          "::-webkit-scrollbar": {
            width: "20px",
          },
          "::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#888",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },

          /* Style the scrollbar for Firefox */
          "scrollbar-width": "thin",
          "scrollbar-color": "#f1f1f1 #888",
        },
      },
    },
  },
});

export default theme;
