import { Edit, MoreVert, Star, Whatshot } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { ReactElement } from "react";

function Actions(): ReactElement {
  return (
    <Stack direction="row" gap={1} sx={{ justifyContent: { md: "end" } }}>
      <Button variant="outlined" color="error" size="small">
        Contact Linked
      </Button>

      <IconButton aria-label="star">
        <Star />
      </IconButton>

      <IconButton aria-label="what's hot">
        <Whatshot />
      </IconButton>

      <IconButton aria-label="edit">
        <Edit />
      </IconButton>

      <IconButton aria-label="more">
        <MoreVert />
      </IconButton>
    </Stack>
  );
}

export default Actions;
