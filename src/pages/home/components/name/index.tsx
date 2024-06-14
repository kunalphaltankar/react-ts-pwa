import {
  Facebook,
  GitHub,
  LinkedIn,
  Person,
  Twitter,
} from "@mui/icons-material";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  name: string;
  designation: string;
  country: string;
  state: string;
  profilePhotoUri: string;
}

function Name({
  country,
  designation,
  name,
  profilePhotoUri,
  state,
}: Readonly<Props>): ReactElement {
  return (
    <Stack direction="row" gap={1} alignItems="center">
      <Avatar
        alt="Profile Image"
        sx={{ width: 64, height: 64 }}
        src={profilePhotoUri}
      >
        <Person sx={{ width: 64, height: 64 }} />
      </Avatar>

      <Stack>
        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="h6">{name}</Typography>

          <IconButton aria-label="Facebook profile" size="small">
            <Facebook fontSize="inherit" />
          </IconButton>

          <IconButton aria-label="Twitter profile" size="small">
            <Twitter fontSize="inherit" />
          </IconButton>

          <IconButton aria-label="LinkedIn profile" size="small">
            <LinkedIn fontSize="inherit" />
          </IconButton>

          <IconButton aria-label="GitHub profile" size="small">
            <GitHub fontSize="inherit" />
          </IconButton>
        </Stack>

        <Stack direction="row" gap={2}>
          <Typography variant="body2">{designation}</Typography>
          <Typography variant="body2">{country}</Typography>
          <Typography variant="body2">{state}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Name;
