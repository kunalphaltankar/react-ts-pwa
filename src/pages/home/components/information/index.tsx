import { Grid, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";

export const INFORMATION_KEYS = [
  "currentOrganization",
  "summary",
  "skills",
  "currentEmploymentStatus",
  "availableFrom",
  "dateOfBirth",
  "currentSalary",
  "relevantExperience",
  "noticePeriod",
  "salaryExpectation",
  "fullAddress",
  "status",
  "resume",
  "salaryType",
  "totalExperience",
  "languageSkills",
] as const;

interface Props {
  candidateDetails: Record<string, { title: string; value: string }>;
}

function Information({ candidateDetails }: Readonly<Props>): ReactElement {
  return (
    <Grid container spacing={2}>
      {INFORMATION_KEYS.map((key) => (
        <Grid
          item
          key={candidateDetails[key].title ? candidateDetails[key].title : ""}
          xs={12}
          sm={6}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">
              {candidateDetails[key].title}
            </Typography>
            <Typography variant="body2">
              {candidateDetails[key].value}
            </Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}

export default Information;
