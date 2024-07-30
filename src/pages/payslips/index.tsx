import { Grid, Typography } from "@mui/material";
import { ReactElement } from "react";

function Payslips(): ReactElement {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>List of Payslips</Typography>
      </Grid>
    </Grid>
  );
}

export default Payslips;
