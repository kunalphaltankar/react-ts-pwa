import { Divider, Grid, Paper } from "@mui/material";
import { ReactElement } from "react";
import Actions from "../actions";
import Contact from "../contact";
import Information from "../information";
import InformationTabs from "../information-tabs";
import Name from "../name";
import UpdatedBy from "../updated-by";

function CandidateDetails(): ReactElement {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Name />
        </Grid>

        <Grid item xs={12} md={6}>
          <Actions />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} md={6}>
          <Contact />
        </Grid>

        <Grid item xs={12} md={6}>
          <UpdatedBy />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Information />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <InformationTabs />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CandidateDetails;
