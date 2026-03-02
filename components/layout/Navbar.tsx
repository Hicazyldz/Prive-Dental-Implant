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
  { key: "home", href: "/" },
  { key: "products", href: "/urunler" },
  { key: "corporate", href: "/kurumsal" },
  { key: "patientInfo", href: "/hasta-bilgilendirme" },
  { key: "whyUs", href: "/neden-biz" },
  { key: "dealers", href: "/bayiler", onlyLocale: "tr" },
  { key: "about", href: "/#about" },
  { key: "contact", href: "/iletisim" },
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

  // 🔥 HYDRATION FIX
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true,
  });

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as LocaleCode;
  const tNav = useTranslations("nav");

  const filteredNav = useMemo(() => {
    return NAV_ITEMS.filter((item) => {
      if (!("onlyLocale" in item)) return true;
      return item.onlyLocale === locale;
    });
  }, [locale]);

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

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => setLangAnchor(null);

  const handleLanguageChange = (nextLocale: LocaleCode) => {
    const hash =
      typeof window !== "undefined" ? window.location.hash : "";
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
          {/* Logo (locale-safe) */}
          <Box
            component="a"
            href={`/${locale}`}
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src="/logo/logo_head.png"
              alt="Prive Implant"
              sx={{
                height: { xs: 35, md: scrolled ? 70 : 80 },
                transition: "height 0.3s ease-in-out",
              }}
            />
          </Box>

          {isMobile ? (
            <>
              <IconButton onClick={handleDrawerToggle}>
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List sx={{ width: 280 }}>
                  {filteredNav.map((item) => (
                    <ListItem key={item.key} disablePadding>
                      <ListItemButton
                        component="a"
                        href={`/${locale}${item.href}`}
                        onClick={handleNavClick}
                      >
                        <ListItemText primary={tNav(item.key)} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {filteredNav.map((item) => (
                <Button
                  key={item.key}
                  component="a"
                  href={`/${locale}${item.href}`}
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {tNav(item.key)}
                </Button>
              ))}

              <Button
                variant="outlined"
                startIcon={<LanguageIcon />}
                onClick={handleLanguageClick}
                sx={{ textTransform: "none", fontWeight: 600 }}
              >
                {currentLang?.flag} {currentLang?.label}
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Menu
        anchorEl={langAnchor}
        open={Boolean(langAnchor)}
        onClose={handleLanguageClose}
      >
        {languageOptions.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === locale}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.flag} {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}