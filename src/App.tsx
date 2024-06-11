import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./i18n";
import AppRouter from "./router";
import Layout from "./shared/components/layout";
import { initDB } from "./shared/db";
import AppThemeProvider from "./theme/AppThemeProvider";

initDB();

function App() {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
