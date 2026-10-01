import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Alert,
  Button,
} from "@mui/material";

import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const documents = [
  {
    icon: <BadgeOutlinedIcon />,
    title: "Documento de identificação",
    description:
      "Passaporte ou documento de identificação oficial aceito pelas autoridades brasileiras.",
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Documentos civis",
    description:
      "Certidões de nascimento, casamento ou outros documentos que comprovem sua situação civil, quando necessários.",
  },
  {
    icon: <GavelOutlinedIcon />,
    title: "Antecedentes criminais",
    description:
      "Certidão ou documento equivalente emitido pelas autoridades competentes do país de origem, quando exigido.",
  },
  {
    icon: <TranslateOutlinedIcon />,
    title: "Tradução de documentos",
    description:
      "Documentos estrangeiros podem precisar de legalização ou apostilamento e tradução juramentada para o português.",
  },
];

export function DocumentsSection() {
  return (
    <Box
      id="documentos"
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
        {/* Cabeçalho */}
        <Box
          sx={{
            maxWidth: 750,
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
            DOCUMENTAÇÃO
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
            Prepare seus documentos
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 2,
              lineHeight: 1.7,
            }}
          >
            A documentação necessária depende da sua
            situação migratória. Alguns documentos são
            comuns em diferentes procedimentos, mas outros
            podem ser exigidos de acordo com a categoria
            de residência.
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 2.5,
          }}
        >
          {documents.map((document) => (
            <Card
              key={document.title}
              elevation={0}
              sx={{
                height: "100%",
                border: "1px solid #E5E7EB",
                borderRadius: 3,
                transition: "all 0.2s ease",

                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-3px)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.07)",
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
                  {document.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {document.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    lineHeight: 1.7,
                  }}
                >
                  {document.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Aviso */}
        <Alert
          severity="info"
          sx={{
            mt: 4,
            borderRadius: 2,
            alignItems: "flex-start",
            "& .MuiAlert-message": {
              width: "100%",
            },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 800,
              mb: 0.5,
            }}
          >
            Atenção aos documentos emitidos no exterior
          </Typography>

          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.7,
            }}
          >
            As exigências para documentos estrangeiros
            podem variar conforme o procedimento e o país
            de origem. Antes de solicitar uma tradução ou
            apostilamento, confira as exigências específicas
            da sua modalidade migratória junto às
            autoridades competentes.
          </Typography>
        </Alert>

        {/* Ação */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: {
              xs: "stretch",
              sm: "flex-start",
            },
          }}
        >
          <Button
            variant="outlined"
            href="https://www.gov.br/pf/pt-br/assuntos/imigracao"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 2.5,
              py: 1.2,
              borderRadius: 2,
              fontWeight: 700,
              width: {
                xs: "100%",
                sm: "auto",
              },
            }}
          >
            Consultar informações oficiais
          </Button>
        </Box>
      </Container>
    </Box>
  );
}