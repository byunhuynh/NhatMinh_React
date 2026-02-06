// ==================================
// Entry point của ứng dụng React
// Bọc MUI Theme + CssBaseline toàn hệ thống
// ==================================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";

import "./index.css";
import App from "./App.jsx";
import muiTheme from "./theme/mui.theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
