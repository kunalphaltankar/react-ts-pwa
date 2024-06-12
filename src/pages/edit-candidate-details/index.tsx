import { Button, Grid, Stack, TextField } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCandidateDetails } from "../../redux/reducers/candidateDetails.reducer";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";
import { setNotification } from "../../redux/reducers/notification.reducer";
import { RootState } from "../../redux/store";

function EditCandidateDetails(): ReactElement {
  const dispatch = useDispatch();
  const { candidateDetails } = useSelector(
    (state: RootState) => state.candidateDetailsState
  );

  // local state
  const [candidate, setCandidate] = useState(candidateDetails);

  useEffect(() => {
    dispatch(updateHeaderTitle({ title: "Edit Candidate Details" }));
  }, []);

  const handleSubmit = () => {
    dispatch(setCandidateDetails(candidate));
    dispatch(
      setNotification({
        message: "Candidate details updated success fully.",
        show: true,
        type: "success",
      })
    );
  };

  const handleReset = () => setCandidate({ ...candidateDetails });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          value={candidate.name}
          onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          id="designation"
          label="Designation"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField fullWidth id="country" label="Country" variant="outlined" />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField fullWidth id="state" label="State" variant="outlined" />
      </Grid>

      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default EditCandidateDetails;
