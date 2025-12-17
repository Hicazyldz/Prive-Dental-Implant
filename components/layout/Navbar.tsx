// components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// ==================== TİP TANIMLARI ====================
interface NavItem {
  label: string;
  href: string;
}

interface Language {
  code: string;
  label: string;
  flag: string;
}

// ==================== YAPILANDIRMA ====================
const NAV_ITEMS: NavItem[] = [
  { label: "Anasayfa", href: "#home" },
  { label: "Ürünler", href: "#products" },
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "Hasta Bilgilendirme", href: "#hasta-bilgilendirme" },
  { label: "Neden Biz?", href: "#why-us" },
  { label: "Bayiler", href: "#dealers" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

const LANGUAGES: Language[] = [
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

const NAVBAR_CONFIG = {
  logo: {
    src: "/logo.png",
    alt: "Prive Implant Logo",
    height: 48 // px
  },
  drawer: {
    width: 280
  }
} as const;

// Stil konfigürasyonu
const STYLES = {
  appBar: {
    bgcolor: "background.paper",
    borderBottom: "1px solid",
    borderColor: "divider",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
  },
  navLink: {
    position: "relative" as const,
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "text.secondary",
    textDecoration: "none",
    padding: "8px 0",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "error.main",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: 0,
      height: "2px",
      bgcolor: "error.main",
      transition: "width 0.3s ease",
    },
    "&:hover::after": {
      width: "100%",
    }
  },
  languageSelect: {
    minWidth: 140,
    bgcolor: "background.paper",
    borderRadius: 2,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "divider",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "error.main",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "error.main",
    }
  }
} as const;

// ==================== COMPONENT ====================
export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [language, setLanguage] = useState("tr");

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    // TODO: İleride i18n entegrasyonu
    // i18n.changeLanguage(event.target.value);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar position="sticky" elevation={0} sx={STYLES.appBar}>
      <Toolbar
        sx={{
          maxWidth: "lg",
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3 },
          justifyContent: "space-between"
        }}
      >
        {/* Logo */}
        <Box
          component="a"
          href="#home"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
            "&:hover": { opacity: 0.8 }
          }}
          aria-label="Ana Sayfaya Git"
        >
          <Box
            component="img"
            src={NAVBAR_CONFIG.logo.src}
            alt={NAVBAR_CONFIG.logo.alt}
            sx={{
              height: { xs: 40, md: NAVBAR_CONFIG.logo.height },
              width: "auto"
            }}
          />
        </Box>

        {/* Mobile: Hamburger Menu */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label={drawerOpen ? "Menüyü Kapat" : "Menüyü Aç"}
              onClick={handleDrawerToggle}
              sx={{
                color: "text.primary",
                "&:hover": { bgcolor: "action.hover" }
              }}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  width: NAVBAR_CONFIG.drawer.width,
                  bgcolor: "background.paper"
                }
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                {/* Navigation Links */}
                <Box>
                  {/* Drawer Header */}
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid",
                      borderColor: "divider"
                    }}
                  >
                    <Box
                      component="img"
                      src={NAVBAR_CONFIG.logo.src}
                      alt={NAVBAR_CONFIG.logo.alt}
                      sx={{ height: 36, width: "auto" }}
                    />
                    <IconButton
                      onClick={handleDrawerToggle}
                      size="small"
                      aria-label="Menüyü Kapat"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {/* Nav Items */}
                  <List sx={{ pt: 2 }}>
                    {NAV_ITEMS.map((item) => (
                      <ListItem key={item.href} disablePadding>
                        <ListItemButton
                          component="a"
                          href={item.href}
                          onClick={handleNavClick}
                          sx={{
                            py: 1.5,
                            px: 3,
                            "&:hover": {
                              bgcolor: "error.50",
                              "& .MuiListItemText-primary": {
                                color: "text.primary"
                              }
                            }
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: "1rem",
                              fontWeight: 500
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Language Selector - Mobile */}
                <Box sx={{ p: 3, borderTop: "1px solid", borderColor: "divider" }}>
                  <FormControl size="small" fullWidth>
                    <Select
                      value={language}
                      onChange={handleLanguageChange}
                      sx={STYLES.languageSelect}
                    >
                      {LANGUAGES.map((lang) => (
                        <MenuItem key={lang.code} value={lang.code}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          /* Desktop: Navigation Links */
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            {/* Nav Links */}
            {NAV_ITEMS.map((item) => (
              <Box
                key={item.href}
                component="a"
                href={item.href}
                sx={STYLES.navLink}
              >
                {item.label}
              </Box>
            ))}

            {/* Divider */}
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

            {/* Language Selector - Desktop */}
            <FormControl size="small">
              <Select
                value={language}
                onChange={handleLanguageChange}
                sx={STYLES.languageSelect}
              >
                {LANGUAGES.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}