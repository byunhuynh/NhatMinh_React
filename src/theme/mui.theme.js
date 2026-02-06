// ==================================
// Cấu hình theme MUI toàn hệ thống
// ==================================
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // sau này map theo design hệ thống
    },
    secondary: {
      main: "#9c27b0",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default muiTheme;
