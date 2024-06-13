import {
  Add,
  CardGiftcard,
  Close,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Toolbar,
} from "@mui/material";
import { memo, useState } from "react";
import RCRMLogo from "../../../assets/RCRM-Logo-Watermark.png";
import AppDrawer from "../drawer";

const AppHeader = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="transparent">
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

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <FormControl variant="outlined" size="small">
              <InputLabel htmlFor="input-with-icon-adornment">
                Search
              </InputLabel>
              <OutlinedInput
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
                label="Search"
              />
            </FormControl>

            <img src={RCRMLogo} alt="Recruit CRM Logo" />

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <IconButton color="inherit">
                <Add />
              </IconButton>

              <Divider flexItem orientation="vertical" />

              <IconButton color="inherit">
                <CardGiftcard />
              </IconButton>

              <IconButton color="inherit">
                <Mail />
              </IconButton>

              <IconButton color="inherit">
                <Notifications />
              </IconButton>

              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <AppDrawer isOpen={isOpen} onDrawerClose={() => setIsOpen(false)} />
    </Box>
  );
});

export default AppHeader;
