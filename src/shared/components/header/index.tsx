import {
  AccountCircle,
  Add,
  CardGiftcard,
  Close,
  Mail,
  Notifications,
  Search,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  ButtonBase,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import AppDrawer from "../drawer";

const AppHeader = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color="transparent">
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

            <Typography variant="h6">Deel</Typography>

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

              <ButtonBase
                sx={{ p: 1, display: "flex", gap: 1, borderRadius: 1 }}
              >
                <AccountCircle />

                <Stack>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: "12px", lineHeight: "16px" }}
                  >
                    Phyllis Yang
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", lineHeight: "16px" }}
                  >
                    Silicon Links Inc
                  </Typography>
                </Stack>
              </ButtonBase>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <AppDrawer isOpen={isOpen} onDrawerClose={() => setIsOpen(false)} />
    </Box>
  );
});

export default AppHeader;
