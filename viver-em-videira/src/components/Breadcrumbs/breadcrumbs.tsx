import {
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  Typography,
} from "@mui/material";

export function Breadcrumbs() {
  return (
    <MuiBreadcrumbs
      aria-label="breadcrumb"
      sx={{ mb: 3 }}
    >
      <Link
        underline="hover"
        color="inherit"
        href="/"
      >
        Início
      </Link>

      <Link
        underline="hover"
        color="inherit"
        href="#regularizacao"
      >
        Serviços para imigrantes
      </Link>

      <Typography color="text.primary">
        Regularização migratória
      </Typography>
    </MuiBreadcrumbs>
  );
}