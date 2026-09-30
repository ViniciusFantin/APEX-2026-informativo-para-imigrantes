import type { ReactNode } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface InformationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
}

export function InformationCard({
  icon,
  title,
  description,
  href,
  eyebrow,
}: InformationCardProps) {
  return (
    <Card
      component={href ? "a" : "div"}
      href={href}
      elevation={0}
      sx={{
        height: "100%",
        textDecoration: "none",
        color: "inherit",
        border: "1px solid #E5E7EB",
        borderRadius: 3,
        transition: "all 0.2s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "primary.main",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          "&:last-child": {
            pb: 3,
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            backgroundColor: "primary.light",
            color: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2.5,
          }}
        >
          {icon}
        </Box>

        {eyebrow && (
          <Typography
            variant="caption"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 0.8,
            }}
          >
            {eyebrow}
          </Typography>
        )}

        <Typography
          variant="h6"
          sx={{
            mt: eyebrow ? 0.5 : 0,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1,
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>

        {href && (
          <Box
            sx={{
              mt: 2.5,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              color: "primary.main",
              fontSize: "0.9rem",
              fontWeight: 700,
            }}
          >
            Saiba mais
            <ArrowForwardIcon fontSize="small" />
          </Box>
        )}
      </CardContent>
    </Card>
  );
}