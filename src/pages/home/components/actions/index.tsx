import { Edit, MoreVert, Star, Whatshot } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

function Actions(): ReactElement {
  const navigate = useNavigate();
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

      <IconButton aria-label="edit" onClick={() => navigate("/edit-candidate")}>
        <Edit />
      </IconButton>

      <IconButton aria-label="more">
        <MoreVert />
      </IconButton>
    </Stack>
  );
}

export default Actions;
