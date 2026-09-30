import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
} from "@mui/material";

const links = [
  {
    title: "Navegação",
    items: [
      { label: "Início", href: "#inicio" },
      {
        label: "Regularização",
        href: "#regularizacao",
      },
      {
        label: "Documentos",
        href: "#documentos",
      },
      {
        label: "Situações",
        href: "#situacoes",
      },
    ],
  },
  {
    title: "Ajuda",
    items: [
      {
        label: "Perguntas frequentes",
        href: "#ajuda",
      },
      {
        label: "Fontes oficiais",
        href: "#fontes",
      },
      {
        label: "Polícia Federal",
        href: "#policia-federal",
      },
    ],
  },
];

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0B1F3A",
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: {
              xs: 6,
              md: 8,
            },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.5fr 1fr 1fr",
            },
            gap: {
              xs: 5,
              md: 8,
            },
          }}
        >
          {/* Marca */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
              }}
            >
              Viver em Videira
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 1.5,
                color: "rgba(255,255,255,0.7)",
                maxWidth: 380,
                lineHeight: 1.7,
              }}
            >
              Guia informativo para imigrantes que
              desejam viver, trabalhar e construir sua
              vida em Videira.
            </Typography>

            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 2,
                backgroundColor:
                  "rgba(255,255,255,0.06)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  display: "block",
                }}
              >
                Este site possui finalidade
                exclusivamente informativa e não
                substitui os canais oficiais das
                autoridades brasileiras.
              </Typography>
            </Box>
          </Box>

          {/* Links */}
          {links.map((section) => (
            <Box key={section.title}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.2,
                }}
              >
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    underline="none"
                    sx={{
                      color:
                        "rgba(255,255,255,0.7)",
                      fontSize: "0.9rem",
                      "&:hover": {
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        <Divider
          sx={{
            borderColor:
              "rgba(255,255,255,0.12)",
          }}
        />

        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            gap: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            © 2026 Viver em Videira
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Informações podem ser alteradas.
            Consulte sempre as fontes oficiais.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}