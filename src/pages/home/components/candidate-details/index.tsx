import { Divider, Grid, Paper } from "@mui/material";
import { ReactElement } from "react";
import Actions from "../actions";
import Contact from "../contact";
import Information from "../information";
import InformationTabs from "../information-tabs";
import Name from "../name";
import UpdatedBy from "../updated-by";

const candidateDetailsJson = {
  name: "William Sample",
  profilePhotoUri: "https://picsum.photos/id/237/200",
  designation: "Senior Product Manager",
  country: "United States",
  state: "Dallas",
  email: "williamsample@gmail.com",
  phone: "+91 9810012345",
  updatedBy: {
    name: "Phyllis Yang",
    timestamp: "Jul 14, 2023, 4:04 pm",
  },
  currentOrganization: {
    title: "Current Organization",
    value: "World Bank Group",
  },
  summary: { title: "Summary", value: "Application developer" },
  skills: { title: "Skills", value: "HTML, CSS, Javascript" },
  currentEmploymentStatus: {
    title: "Current Employment Status",
    value: "Employed",
  },
  availableFrom: { title: "Available From", value: "Jul, 14, 2023" },
  dateOfBirth: { title: "Date of Birth", value: "15 June 1993" },
  currentSalary: { title: "Current Salary", value: "$6000" },
  relevantExperience: { title: "Relevant Experience", value: "7 Years" },
  noticePeriod: { title: "Notice Period", value: "90 Days" },
  salaryExpectation: { title: "Salary Expectation", value: "$9000" },
  fullAddress: { title: "Full Address", value: "9400 Ashton Rd, Philadelphia" },
  status: { title: "Status", value: "Submitted to Client" },
  resume: { title: "Resume", value: "Resume" },
  salaryType: { title: "Salary Type", value: "Annual" },
  totalExperience: { title: "Total Experience", value: "5 Years" },
  languageSkills: {
    title: "Language Skills",
    value: "English(Elementary proficiency)",
  },
};

export type CandidateDetailsType = typeof candidateDetailsJson;

function CandidateDetails(): ReactElement {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Name
            name={candidateDetailsJson.name}
            country={candidateDetailsJson.country}
            designation={candidateDetailsJson.designation}
            profilePhotoUri={candidateDetailsJson.profilePhotoUri}
            state={candidateDetailsJson.state}
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
            email={candidateDetailsJson.email}
            phone={candidateDetailsJson.phone}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <UpdatedBy updatedBy={candidateDetailsJson.updatedBy} />
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Information
            candidateDetails={
              candidateDetailsJson as unknown as Record<
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
