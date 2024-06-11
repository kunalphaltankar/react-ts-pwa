import { AccountBox, Restore } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

function UpdatedBy(): ReactElement {
  return (
    <Stack direction="row" gap={2} sx={{ justifyContent: { md: "end" } }}>
      <Stack direction="row" gap={1}>
        <AccountBox />

        <Typography>Phyllis Yang</Typography>
      </Stack>

      <Stack direction="row" gap={1}>
        <Restore />

        <Typography>Jul 14, 2023, 4:04 pm</Typography>
      </Stack>
    </Stack>
  );
}

export default UpdatedBy;
