import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiOptionsType, invokeApi } from "../../api-client";
import {
  updateHeaderTitle,
  updateLoggedStatus,
} from "../../redux/reducers/global.reducer";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(updateHeaderTitle({ title: "Login Screen" }));
  }, []);

  const onLoginClick = () => {
    dispatch(updateLoggedStatus({ isLoggedIn: true }));
    navigate("/home");
  };

  const onNewUserClick = async () => {
    const options: ApiOptionsType = {
      method: "get",
      api: "posts/1",
      successMessage: "Posts loaded successfully.",
    };
    const response = await invokeApi(options);
    console.log(response);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            maxWidth: "25rem",
          }}
        >
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  {t("pages.login.title")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="tf-username"
                  label="Username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="tf-password"
                  label="Password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Stack direction="row" justifyContent="space-between" width="100%">
              <Button variant="text" onClick={onNewUserClick}>
                New user?
              </Button>
              <Button variant="contained" onClick={onLoginClick}>
                Login
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default Login;
