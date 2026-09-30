import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export function Hero() {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: {
              xs: "auto",
              md: 520,
            },
            py: {
              xs: 7,
              md: 10,
            },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.15fr 0.85fr",
            },
            gap: {
              xs: 5,
              md: 8,
            },
            alignItems: "center",
          }}
        >
          {/* Conteúdo */}
          <Box>
            <Chip
              icon={<LocationOnOutlinedIcon />}
              label="Videira - Santa Catarina"
              sx={{
                mb: 3,
                color: "primary.main",
                backgroundColor: "primary.light",
                fontWeight: 600,
              }}
            />

            <Typography
              component="h1"
              variant="h2"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                fontSize: {
                  xs: "2.35rem",
                  sm: "3rem",
                  md: "3.7rem",
                },
                maxWidth: 700,
              }}
            >
              Regularize sua situação para{" "}
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                }}
              >
                viver em Videira
              </Box>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mt: 3,
                maxWidth: 650,
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              Encontre informações sobre residência,
              documentação, taxas e atendimento para
              regularizar sua situação migratória no Brasil.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mt: 4,
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="#regularizacao"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                }}
              >
                Começar orientação
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="#situacoes"
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                }}
              >
                Ver minha situação
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 3,
              }}
            >
              <CheckCircleOutlineOutlinedIcon
                sx={{
                  color: "secondary.main",
                  fontSize: 20,
                }}
              />

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Informações organizadas em etapas simples
              </Typography>
            </Box>
          </Box>

          {/* Card visual */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "center",
                md: "flex-end",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 430,
                borderRadius: 4,
                overflow: "hidden",
                background:
                  "linear-gradient(145deg, #1351B4 0%, #0B3D91 100%)",
                color: "#FFFFFF",
                p: {
                  xs: 3,
                  md: 4,
                },
                boxShadow:
                  "0 20px 50px rgba(19, 81, 180, 0.18)",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  opacity: 0.8,
                }}
              >
                SUA JORNADA
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 1,
                  fontWeight: 800,
                  lineHeight: 1.2,
                }}
              >
                Do primeiro atendimento à CRNM
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {[
                  "Orientação",
                  "Documentação",
                  "Autorização",
                  "Polícia Federal",
                  "CRNM",
                ].map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        flexShrink: 0,
                        borderRadius: "50%",
                        backgroundColor:
                          "rgba(255,255,255,0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                      }}
                    >
                      {index + 1}
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}