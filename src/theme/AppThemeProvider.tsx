import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import ColorModeContext from "./ColorModeContext";
import { themeOptions } from "./themeOptions";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: { ...themeOptions.palette, mode },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppThemeProvider;
