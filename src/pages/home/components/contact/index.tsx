import { Mail, Phone } from "@mui/icons-material";
import { Link, Stack } from "@mui/material";
import { ReactElement } from "react";

function Contact(): ReactElement {
  return (
    <Stack direction="row" gap={2}>
      <Stack direction="row" gap={1}>
        <Mail />

        <Link href="mailto:williamsample@gmail.com" underline="none">
          williamsample@gmail.com
        </Link>
      </Stack>

      <Stack direction="row" gap={1}>
        <Phone />

        <Link href="tel:+91 9021232326" underline="none">
          +91 9021232326
        </Link>
      </Stack>
    </Stack>
  );
}

export default Contact;
