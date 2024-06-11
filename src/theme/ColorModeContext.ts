import { createContext, useContext } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function useColorMode() {
  const colorMode = useContext(ColorModeContext);
  return colorMode;
}

export default ColorModeContext;
