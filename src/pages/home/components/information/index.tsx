import { Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

const data = [
  { title: "Current Organization", description: "World Bank Group" },
  { title: "Summary", description: "Application developer" },
  { title: "Skills", description: "HTML, CSS, Javascript" },
  { title: "Current Employment Status", description: "Employed" },
  { title: "Available From", description: "Jul, 14, 2023" },
  { title: "Date of Birth", description: "15 June 1993" },
  { title: "Current Salary", description: "$6000" },
  { title: "Relevant Experience", description: "7 Years" },
  { title: "Notice Period", description: "90 Days" },
  { title: "Salary Expectation", description: "$9000" },
  { title: "Full Address", description: "9400 Ashton Rd, Philadelphia" },
  { title: "Status", description: "Submitted to Client" },
  { title: "Resume", description: "Resume" },
  { title: "Salary Type", description: "Annual" },
  { title: "Total Experience", description: "5 Years" },
  { title: "Language Skills", description: "English(Elementary proficiency)" },
];

function Information(): ReactElement {
  return (
    <Grid container spacing={2}>
      {data.map(({ title, description }) => (
        <Grid item key={title} xs={12} sm={6}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default Information;
