import React, { useState, createContext } from "react";
import {Switch,FormControlLabel,CssBaseline,Box,Typography} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export const ColorModeContext = createContext();
function MuiSwitch(){
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode,
    },
  });
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            p: 3,
            minHeight: "100vh",
            backgroundColor: "background.default",
            color: "text.primary",
          }}>
          <FormControlLabel
            control={
              <Switch
                checked={mode === "dark"}
                onChange={toggleMode}
              />
            }
            label={mode === "dark" ? "Dark Mode" : "Light Mode"}
          />
          <Typography>
            Current Theme: {mode}
          </Typography>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default MuiSwitch;