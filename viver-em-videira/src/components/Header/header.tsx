import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

const menuItems = [
  {
    label: "Início",
    href: "#inicio",
  },
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
  {
    label: "Ajuda",
    href: "#ajuda",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#1F2937",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              minHeight: {
                xs: 64,
                md: 72,
              },
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Box
              component="a"
              href="#inicio"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: 1.5,
                  backgroundColor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <LocationCityOutlinedIcon />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1,
                    fontSize: {
                      xs: "1rem",
                      md: "1.15rem",
                    },
                  }}
                >
                  Viver em Videira
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  Guia para imigrantes
                </Typography>
              </Box>
            </Box>

            {/* Menu desktop */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    px: 1.5,
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Menu mobile */}
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 280,
          }}
          role="presentation"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
              }}
            >
              Menu
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.href}
                  onClick={handleClose}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
