import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import JobInformation from "../job-information";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: Readonly<TabPanelProps>) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function InformationTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="Profile tabs">
          <Tab label="All Details" {...a11yProps(0)} />
          <Tab label="Assigned Jobs" {...a11yProps(1)} />
          <Tab label="Related Emails" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          mb={2}
        >
          <Typography variant="subtitle1">
            Assigned Job to William Sample
          </Typography>

          <Stack direction="row" gap={1}>
            <Button variant="contained">Assign To Job</Button>

            <Button variant="outlined">View All Assigned Jobs</Button>
          </Stack>
        </Stack>

        <Stack gap={1}>
          <JobInformation />
          <JobInformation />
          <JobInformation />
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

export default InformationTabs;
