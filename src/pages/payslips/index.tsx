import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

interface Payslip {
  id: string;
  fromDate: string;
  toDate: string;
  file: string;
}

const payslips: Payslip[] = [
  {
    file: "https://picsum.photos/seed/picsum/200/300",
    fromDate: "01-02-2024",
    toDate: "28-02-2024",
    id: "1",
  },
  {
    file: "https://picsum.photos/seed/picsum/200/300",
    fromDate: "01-02-2024",
    toDate: "28-02-2024",
    id: "2",
  },
  {
    file: "https://picsum.photos/seed/picsum/200/300",
    fromDate: "01-02-2024",
    toDate: "28-02-2024",
    id: "3",
  },
  {
    file: "https://picsum.photos/seed/picsum/200/300",
    fromDate: "01-02-2024",
    toDate: "28-02-2024",
    id: "4",
  },
];

function Payslips(): ReactElement {
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

              <Stack direction="row" gap={2}>
                <Typography variant="body2" component={"span"} width={"50%"}>
                  from:
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  component={"span"}
                >
                  {fromDate}
                </Typography>
              </Stack>

              <Stack direction="row" gap={2}>
                <Typography variant="body2" component={"span"} width={"50%"}>
                  to:
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  component={"span"}
                >
                  {toDate}
                </Typography>
              </Stack>
            </CardContent>

            <CardActions>
              <Button size="small">View details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Payslips;
