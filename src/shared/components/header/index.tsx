import { Close } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useColorMode } from "../../../theme/ColorModeContext";
import AppDrawer from "../drawer";

const AppHeader = memo(function Header() {
  const globalState = useSelector((state: RootState) => state.globalState);
  const theme = useTheme();
  const colorMode = useColorMode();

  const {
    header: { title },
    isOffline,
  } = globalState;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(
      "Environment Variable: ",
      `${import.meta.env.PWA_API_ENDPOINT}--`
    );
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" component="nav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Close /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {isOffline ? <WifiOffIcon sx={{ opacity: 0.5 }} /> : <WifiIcon />}

            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>

            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <AppDrawer isOpen={isOpen} />
    </Box>
  );
});

export default AppHeader;
