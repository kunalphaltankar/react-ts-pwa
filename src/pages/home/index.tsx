import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";
import CandidateBreadcrumbs from "./components/candidate-breadcrumbs";
import CandidateDetails from "./components/candidate-details";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateHeaderTitle({ title: "Home Screen" }));
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CandidateBreadcrumbs />
      </Grid>

      <Grid item xs={12}>
        <CandidateDetails />
      </Grid>
    </Grid>
  );
}

export default Home;
