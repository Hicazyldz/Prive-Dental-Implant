"use client";

import { useMemo, useState, useEffect } from "react";
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
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LanguageIcon from "@mui/icons-material/Language";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

type LocaleCode = "tr" | "en" | "de" | "ar";
const NAV_ITEMS = [
  { key: "home", href: "#home" },
  { key: "products", href: "#products" },
  { key: "corporate", href: "#kurumsal" },
  { key: "patientInfo", href: "#hasta-bilgilendirme" },
  { key: "whyUs", href: "#why-us" },
  { key: "dealers", href: "#dealers" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
] as const;

const LANGUAGES: { code: LocaleCode; flag: string; label: string }[] = [
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "ar", flag: "🇸🇦", label: "العربية" },
];

function replaceLocaleInPath(pathname: string, nextLocale: string) {
  const parts = pathname.split("/");
  if (parts.length >= 2) {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }
  return `/${nextLocale}`;
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as LocaleCode;

  const tNav = useTranslations("nav");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langAnchor, setLangAnchor] = useState<null | HTMLElement>(null);

  const languageOptions = useMemo(() => LANGUAGES, []);
  const currentLang = languageOptions.find((lang) => lang.code === locale);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => setDrawerOpen((p) => !p);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLangAnchor(null);
  };

  const handleLanguageChange = (nextLocale: LocaleCode) => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const nextPath = replaceLocaleInPath(pathname, nextLocale);
    router.push(`${nextPath}${hash}`, { scroll: false });
    handleLanguageClose();
  };

  const handleNavClick = () => {
    if (isMobile) setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={scrolled ? 4 : 0}
      sx={{
        backdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: "background.graySoft",
        borderBottom: scrolled ? "none" : "1px solid",
        borderColor: "divider",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 70, md: scrolled ? 80 : 100 },
            transition: "min-height 0.3s ease-in-out",
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
              transition: "transform 0.2s ease-in-out",

              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              component="img"
              src="/logo/logo_head.png"
              alt="Prive Implant"
              sx={{
                height: { xs: 35, md: scrolled ? 70 : 80 },
                width: "auto",
                display: "block",
                transition: "height 0.3s ease-in-out",
              }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: "text.primary",
                  bgcolor: "rgba(0, 0, 0, 0.04)",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.08)",
                  },
                }}
                aria-label={drawerOpen ? "Close menu" : "Open menu"}
              >
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    width: 300,
                    bgcolor: "background.paper",
                  },
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Box
                      component="img"
                      src="/logo/logo_down.png"
                      alt="Logo"
                      sx={{ height: 40 }}
                    />
                    <IconButton onClick={handleDrawerToggle} size="small">
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  <List sx={{ flex: 1, pt: 2 }}>
                    {NAV_ITEMS.map((item) => (
                      <ListItem key={item.key} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                          component="a"
                          href={item.href}
                          onClick={handleNavClick}
                          sx={{
                            mx: 2,
                            borderRadius: 2,
                            "&:hover": {
                              bgcolor: "background.brandLight",
                              "& .MuiListItemText-primary": {
                                color: "white",
                              },
                            },
                            transition: "all 0.2s ease-in-out",
                          }}
                        >
                          <ListItemText
                            primary={tNav(item.key)}
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontWeight: 600,
                                fontSize: "0.95rem",
                                color: "text.primary",
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>

                  <Box
                    sx={{
                      p: 3,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<LanguageIcon />}
                      onClick={handleLanguageClick}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "none",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "text.primary",
                        borderColor: "#e0e0e0",
                        "&:hover": {
                          borderColor: "background.brandLight",
                          bgcolor: "rgba(211, 47, 47, 0.04)",
                          color: "background.onBrandLight",
                        },
                      }}
                    >
                      {currentLang?.flag} {currentLang?.label}
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.key}
                  component="a"
                  href={item.href}
                  sx={{
                    px: 2,
                    py: 1,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "text.primary",
                    textTransform: "none",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 2,
                      bgcolor: "info.main",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "info.main",
                      "&::after": {
                        width: "80%",
                      },
                    },
                  }}
                >
                  {tNav(item.key)}
                </Button>
              ))}

              <Box
                sx={{
                  ml: 2,
                  pl: 2,
                  borderLeft: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<LanguageIcon />}
                  onClick={handleLanguageClick}
                  sx={{
                    textTransform: "none",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 2,
                    borderColor: "#e0e0e0",
                    color: "text.primary",
                    "&:hover": {
                      borderColor: "info.main",
                      bgcolor: "background.brandMain",
                      color: "text.onBrandMain",
                    },
                  }}
                >
                  {currentLang?.flag} {currentLang?.label}
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Menu
        anchorEl={langAnchor}
        open={Boolean(langAnchor)}
        onClose={handleLanguageClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 150,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        {languageOptions.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === locale}
            onClick={() => handleLanguageChange(lang.code)}
            sx={{
              gap: 1.5,
              py: 1.5,
              "&.Mui-selected": {
                bgcolor: "background.brandMain",
                color: "text.onBrandMain",
                "&:hover": {
                  bgcolor: "background.brandLight",
                },
              },
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>{lang.flag}</span>
            <span style={{ fontWeight: 500 }}>{lang.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}
