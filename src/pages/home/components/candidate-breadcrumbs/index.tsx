import { NavigateNext } from "@mui/icons-material";
import {
  Breadcrumbs,
  Button,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Candidates
  </Link>,
  <Typography key="2" color="text.primary">
    Breadcrumb
  </Typography>,
];

function CandidateBreadcrumbs(): ReactElement {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={2}
    >
      <Stack direction="row" alignItems={"center"} gap={1}>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>

        <Chip label="ID - 231" size="small" />
      </Stack>

      <Stack direction="row" gap={1}>
        <Button variant="outlined" size="small" color="inherit">
          Request Profile Update
        </Button>

        <Button variant="outlined" size="small" color="inherit">
          Previous
        </Button>

        <Button variant="outlined" size="small" color="inherit">
          Next
        </Button>
      </Stack>
    </Stack>
  );
}

export default CandidateBreadcrumbs;
