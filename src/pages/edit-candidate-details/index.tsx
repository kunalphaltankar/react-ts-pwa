import { Button, Grid, Stack, TextField } from "@mui/material";
import {
  HTMLInputTypeAttribute,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CandidateDetailsType,
  setCandidateDetails,
} from "../../redux/reducers/candidateDetails.reducer";
import { updateHeaderTitle } from "../../redux/reducers/global.reducer";
import { setNotification } from "../../redux/reducers/notification.reducer";
import { RootState } from "../../redux/store";
import { INFORMATION_KEYS } from "../home/components/information";

const BASIC_KEYS = [
  "name",
  "designation",
  "country",
  "state",
  "email",
  "phone",
] as const;

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

  const handleTextInput = (value: string, key: keyof CandidateDetailsType) => {
    setCandidate({ ...candidate, [key]: value });
  };

  const getInputType = (key: string): HTMLInputTypeAttribute => {
    if (key === "email") {
      return "email";
    }

    if (key === "phone") {
      return "tel";
    }

    return "text";
  };

  return (
    <Grid container spacing={2}>
      {BASIC_KEYS.map((key) => (
        <Grid item xs={12} md={6} key={key}>
          <TextField
            fullWidth
            id={key}
            label={key}
            variant="outlined"
            type={getInputType(key)}
            value={candidate[key]}
            onChange={(e) => handleTextInput(e.target.value, key)}
          />
        </Grid>
      ))}

      {INFORMATION_KEYS.map((key) => (
        <Grid item xs={12} md={6} key={key}>
          <TextField
            fullWidth
            id={key}
            label={candidate[key].title}
            variant="outlined"
            type={"text"}
            value={candidate[key].value}
            onChange={(e) =>
              setCandidate({
                ...candidate,
                [key]: { ...candidate[key], value: e.target.value },
              })
            }
          />
        </Grid>
      ))}

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
