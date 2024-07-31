import { Download } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Grid, LinearProgress, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setNotification } from "../../redux/reducers/notification.reducer";
import DataRow from "../../shared/components/data-row";
import { payslips } from "../payslips/samplePayslips";
import { downloadPDF } from "./downloadPdf";

function Payslip(): ReactElement {
  const params = useParams();
  const dispatch = useDispatch();

  // local states
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const payslip = payslips.find(({ id }) => id === params.payslipId);

  const handleDownload = async () => {
    try {
      setLoading(true);
      await downloadPDF(
        "https://file-examples.com/storage/fe27f03f2b66aa57894a910/2017/10/file-example_PDF_1MB.pdf",
        setDownloadProgress
      );
    } catch (error) {
      dispatch(
        setNotification({
          message: "Error in downloading the file!",
          show: true,
          type: "error",
        })
      );
    } finally {
      setDownloadProgress(0);
      setLoading(false);
    }
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
