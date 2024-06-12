import { Mail, Phone } from "@mui/icons-material";
import { Link, Stack } from "@mui/material";
import { ReactElement } from "react";

interface Props {
  email: string;
  phone: string;
}

function Contact({ email, phone }: Readonly<Props>): ReactElement {
  return (
    <Stack direction="row" gap={2}>
      <Stack direction="row" gap={1}>
        <Mail />

        <Link href={`mailto:${email}`} underline="none">
          {email}
        </Link>
      </Stack>

      <Stack direction="row" gap={1}>
        <Phone />

        <Link href={`tel:${phone}`} underline="none">
          {phone}
        </Link>
      </Stack>
    </Stack>
  );
}

export default Contact;
