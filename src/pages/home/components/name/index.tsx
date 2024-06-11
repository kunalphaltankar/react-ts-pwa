import {
  Facebook,
  GitHub,
  LinkedIn,
  Person,
  Twitter,
} from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

function Name(): ReactElement {
  return (
    <Stack direction="row" gap={1} alignItems="center">
      <Avatar alt="Profile Image" sx={{ width: 64, height: 64 }}>
        <Person sx={{ width: 64, height: 64 }} />
      </Avatar>

      <Stack>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="h6">William Sample</Typography>
          <Facebook />
          <Twitter />
          <LinkedIn />
          <GitHub />
        </Stack>

        <Stack direction="row" gap={2}>
          <Typography variant="body2">Senior Product Manager</Typography>
          <Typography variant="body2">United States</Typography>
          <Typography variant="body2">Dallas</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Name;
