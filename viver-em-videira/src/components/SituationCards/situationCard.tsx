import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

import { InformationCard } from "../InformationCard/InformationCard";

const situations = [
  {
    title: "Trabalho",
    description:
      "Informações para quem pretende residir no Brasil por motivo de trabalho.",
    icon: <HomeWorkIcon />,
  },
  {
    title: "Estudos",
    description:
      "Orientações para estudantes estrangeiros que desejam permanecer no Brasil.",
    icon: <SchoolOutlinedIcon />,
  },
  {
    title: "Reunião familiar",
    description:
      "Informações para quem possui vínculo familiar com brasileiro ou residente no Brasil.",
    icon: <FamilyRestroomOutlinedIcon />,
  },
  {
    title: "Mercosul",
    description:
      "Informações para cidadãos de países abrangidos pelos acordos de residência aplicáveis.",
    icon: <PublicOutlinedIcon />,
  },
];

export function SituationCards() {
  return (
    <Box
      id="situacoes"
      component="section"
      sx={{
        py: {
          xs: 7,
          md: 10,
        },
        backgroundColor: "#F6F7F9",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: 700,
            mb: 5,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              letterSpacing: 1.5,
            }}
          >
            ENCONTRE SEU CAMINHO
          </Typography>

          <Typography
            component="h2"
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 800,
              fontSize: {
                xs: "2rem",
                md: "2.7rem",
              },
            }}
          >
            Qual é a sua situação?
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2,
              lineHeight: 1.7,
            }}
          >
            O processo de regularização pode variar
            conforme o motivo da sua permanência no
            Brasil. Encontre abaixo a situação que mais
            se aproxima do seu caso.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2.5,
          }}
        >
          {situations.map((situation) => (
            <InformationCard
              key={situation.title}
              icon={situation.icon}
              title={situation.title}
              description={situation.description}
              href="#regularizacao"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}