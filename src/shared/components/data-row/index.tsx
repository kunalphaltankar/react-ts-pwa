import { Stack, Typography } from "@mui/material";

interface Props {
  label: string;
  value?: string;
}
function DataRow({ label, value }: Readonly<Props>) {
  return (
    <Stack direction="row" gap={2}>
      <Typography variant="body2" component={"span"} width={"50%"}>
        {label}:
      </Typography>

      <Typography variant="body2" color="text.secondary" component={"span"}>
        {value || "-"}
      </Typography>
    </Stack>
  );
}

export default DataRow;
