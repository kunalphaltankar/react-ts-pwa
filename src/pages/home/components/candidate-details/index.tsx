import { Divider, Grid, Paper } from "@mui/material";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import Actions from "../actions";
import Contact from "../contact";
import Information from "../information";
import InformationTabs from "../information-tabs";
import Name from "../name";
import UpdatedBy from "../updated-by";

function CandidateDetails(): ReactElement {
  const { candidateDetails } = useSelector(
    (state: RootState) => state.candidateDetailsState
  );

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Name
            name={candidateDetails.name}
            country={candidateDetails.country}
            designation={candidateDetails.designation}
            profilePhotoUri={candidateDetails.profilePhotoUri}
            state={candidateDetails.state}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Actions />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} md={6}>
          <Contact
            email={candidateDetails.email}
            phone={candidateDetails.phone}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <UpdatedBy updatedBy={candidateDetails.updatedBy} />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Information
            candidateDetails={
              candidateDetails as unknown as Record<
                string,
                { title: string; value: string }
              >
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <InformationTabs />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CandidateDetails;
