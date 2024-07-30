import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import DataRow from "../../shared/components/data-row";
import { payslips } from "./samplePayslips";

function Payslips(): ReactElement {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">List of Payslips</Typography>
      </Grid>

      {payslips.map(({ file, fromDate, id, toDate }) => (
        <Grid item key={id} xs={12} sm={4} md={3}>
          <Card variant="elevation">
            <CardMedia
              sx={{ height: 140 }}
              image={file}
              title="Payslip from 1 to 2"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {id}
              </Typography>

              <DataRow label="from" value={fromDate} />

              <DataRow label="to" value={toDate} />
            </CardContent>

            <CardActions>
              <Button size="small" onClick={() => navigate("/payslips/" + id)}>
                View details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Payslips;
