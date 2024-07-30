import { Button, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import DataRow from "../../shared/components/data-row";
import { payslips } from "../payslips/samplePayslips";
import { downloadPDF } from "./downloadPdf";

function Payslip(): ReactElement {
  const params = useParams();
  const payslip = payslips.find(({ id }) => id === params.payslipId);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Viewing Payslip {params.payslipId}</Typography>
      </Grid>

      <Grid item xs={12}>
        <img
          src={payslip?.file}
          width={"100%"}
          height={150}
          alt={"payslip " + payslip?.id}
        />
      </Grid>

      <Grid item xs={12}>
        <DataRow label="from" value={payslip?.fromDate} />
      </Grid>

      <Grid item xs={12}>
        <DataRow label="to" value={payslip?.toDate} />
      </Grid>

      <Grid item xs={12}>
        <Button
          onClick={() =>
            downloadPDF(
              "https://file-examples.com/storage/fe3f15b9da66a36baa1b51a/2017/10/file-sample_150kB.pdf"
            )
          }
        >
          Download Payslip
        </Button>
      </Grid>
    </Grid>
  );
}

export default Payslip;
