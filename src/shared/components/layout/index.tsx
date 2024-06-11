import {
  Alert,
  AlertTitle,
  Backdrop,
  Box,
  CircularProgress,
  Container,
  Grid,
  Snackbar,
} from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNetworkStatus } from "../../../redux/reducers/global.reducer";
import { resetNotification } from "../../../redux/reducers/notification.reducer";
import { RootState } from "../../../redux/store";
import AppHeader from "../header";

type LayoutProps = {
  children: ReactElement;
};

function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch();

  const globalState = useSelector((state: RootState) => state.globalState);

  const notificationState = useSelector(
    (state: RootState) => state.notificationState
  );

  const { isLoggedIn, showLoader } = globalState;

  const checkOffline = (status: boolean) => {
    dispatch(updateNetworkStatus({ isOffline: status }));
  };

  useEffect(() => {
    checkOffline(!navigator.onLine);
    window.addEventListener("offline", () => checkOffline(true));
    window.addEventListener("online", () => checkOffline(false));
    return () => {
      window.removeEventListener("offline", () => checkOffline(false));
      window.removeEventListener("online", () => checkOffline(false));
    };
  }, []);

  const onNotificationClose = () => {
    dispatch(resetNotification());
  };

  return (
    <>
      <Box>
        <Grid container flexDirection="column">
          {isLoggedIn && (
            <Grid item>
              <AppHeader />
            </Grid>
          )}
          <Grid item>
            <Container maxWidth="lg">{children}</Container>
          </Grid>
        </Grid>
      </Box>
      {notificationState.show && (
        <Snackbar
          open={notificationState.show}
          autoHideDuration={6000}
          onClose={onNotificationClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={onNotificationClose}
            severity={notificationState.type}
            sx={{ width: "100%" }}
          >
            <AlertTitle>
              {notificationState.type.toLocaleUpperCase()}
            </AlertTitle>
            {notificationState.message}
          </Alert>
        </Snackbar>
      )}
      {showLoader && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={showLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default Layout;
