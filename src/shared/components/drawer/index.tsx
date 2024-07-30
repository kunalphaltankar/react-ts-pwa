import { Home, Logout } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoggedStatus } from "../../../redux/reducers/global.reducer";
const drawerWidth = 240;

type AppDrawerProps = {
  isOpen: boolean;
  onDrawerClose: VoidFunction;
};

function AppDrawer({ isOpen, onDrawerClose }: Readonly<AppDrawerProps>) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onMenuClick = (menu: string) => {
    switch (menu) {
      case "Dashboard":
        navigate("/dashboard");
        break;
      case "Manage User":
        navigate("/manage-user");
        break;
      case "Payslips":
        navigate("/payslips");
        break;
      case "Logout":
        dispatch(updateLoggedStatus({ isLoggedIn: false }));
        navigate("/");
        break;
      default:
        navigate("/home");
        break;
    }
    onDrawerClose();
  };

  const routes = ["Home", "Dashboard", "Manage User", "Payslips", "Logout"];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "env(safe-area-inset-top)",
          zIndex: 10,
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <List>
        {routes.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => onMenuClick(text)}>
              <ListItemIcon>
                {index !== routes.length ? <Home /> : <Logout />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default AppDrawer;
