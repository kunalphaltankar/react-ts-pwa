import { AccountBox, Restore } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  updatedBy: {
    name: string;
    timestamp: string;
  };
}

function UpdatedBy({
  updatedBy: { name, timestamp },
}: Readonly<Props>): ReactElement {
  return (
    <Stack direction="row" gap={2} sx={{ justifyContent: { md: "end" } }}>
      <Stack direction="row" gap={1}>
        <AccountBox />

        <Typography>{name}</Typography>
      </Stack>

      <Stack direction="row" gap={1}>
        <Restore />

        <Typography>{timestamp}</Typography>
      </Stack>
    </Stack>
  );
}

export default UpdatedBy;
