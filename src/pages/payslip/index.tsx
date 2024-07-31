import { Download } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Grid, LinearProgress, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import DataRow from "../../shared/components/data-row";
import { payslips } from "../payslips/samplePayslips";
import { downloadPDF } from "./downloadPdf";

/* function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
 */
function Payslip(): ReactElement {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const payslip = payslips.find(({ id }) => id === params.payslipId);

  const handleDownload = async () => {
    setLoading(true);
    await downloadPDF(
      "https://file-examples.com/storage/fe27f03f2b66aa57894a910/2017/10/file-example_PDF_1MB.pdf",
      setDownloadProgress
    );
    setDownloadProgress(0);
    setLoading(false);
  };

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

      {downloadProgress > 0 && (
        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={downloadProgress} />
        </Grid>
      )}

      <Grid item xs={12}>
        <LoadingButton
          size="small"
          color="secondary"
          onClick={handleDownload}
          loading={loading}
          loadingPosition="start"
          startIcon={<Download />}
          variant="contained"
        >
          <span>Download Payslip</span>
        </LoadingButton>
      </Grid>
    </Grid>
  );
}

export default Payslip;
