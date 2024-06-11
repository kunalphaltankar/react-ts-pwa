import {
  Avatar,
  Button,
  Chip,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

function JobInformation(): ReactElement {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Stack direction="row" gap={1} alignItems={"center"}>
        <Avatar>H</Avatar>

        <Stack>
          <Typography variant="subtitle1">Senior Product Manager</Typography>
          <Typography variant="body2">Recruit CRM</Typography>
        </Stack>
      </Stack>

      <Stack>
        <Typography variant="subtitle1">William Sample</Typography>
        <Typography variant="body2">Jul 10, 2023</Typography>
      </Stack>

      <Chip label="Assigned" />

      <Button variant="outlined" size="small">
        View Files
      </Button>

      <Switch inputProps={{ "aria-label": "Switch" }} defaultChecked />
    </Paper>
  );
}

export default JobInformation;
