import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { Header } from "../components/Header/header";
import { Hero } from "../components/Hero/hero";
import { ProcessStepper } from "../components/Stepper/ProcessStepper";
import { SituationCards } from "../components/SituationCards/situationCard";
import { Footer } from "../components/Footer/footer";

import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import { InformationCard } from "../components/InformationCard/InformationCard";

export function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Processo */}
        <Box
          id="regularizacao"
          component="section"
          sx={{
            py: {
              xs: 7,
              md: 10,
            },
            backgroundColor: "#FFFFFF",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                maxWidth: 720,
                mb: 6,
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
                COMO FUNCIONA
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
                Entenda o processo de regularização
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mt: 2,
                  lineHeight: 1.7,
                }}
              >
                O processo envolve diferentes etapas.
                Organizamos as principais informações
                para ajudar você a entender por onde
                começar.
              </Typography>
            </Box>

            <ProcessStepper />
          </Container>
        </Box>

        {/* Central do Imigrante */}
        <Box
          component="section"
          sx={{
            py: {
              xs: 7,
              md: 9,
            },
            backgroundColor: "#F6F7F9",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                maxWidth: 900,
              }}
            >
              <InformationCard
                icon={<LocationCityOutlinedIcon />}
                eyebrow="Atendimento local"
                title="Central do Imigrante"
                description="Em Videira, você pode procurar a Central do Imigrante para receber orientação sobre documentação, serviços públicos e encaminhamentos relacionados à sua situação."
              />
            </Box>
          </Container>
        </Box>

        <SituationCards />
      </main>

      <Footer />
    </>
  );
}