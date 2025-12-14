// components/layout/Navbar.tsx
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const navItems = [
  { label: "Anasayfa", href: "#home" },
  { label: "Kurumsal", href: "#kurumsal" },
  { label: "Ürünler", href: "#products" },
  { label: "Kaynaklar", href: "#resources" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("tr");

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value);
          //todo ileride burada i18n.changeLanguage(language) gibi bir entegrasyon yapacağız
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar className="max-w-6xl mx-auto w-full flex justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Implant Company"
            className="h-25 w-auto"
          /> 
        </a>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <Box
                sx={{ width: 260 }}
                role="presentation"
                onClick={handleDrawerToggle}
                className="flex flex-col h-full justify-between"
              >
                <Box>
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.href} disablePadding>
                        <ListItemButton component="a" href={item.href}>
                          <ListItemText  className=' text-6xl' primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#contact">
                        <ListItemText primary="Teklif Al" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>

                {/* Mobile’da dil seçimi */}
                <Box className="p-3 border-t border-gray-200">
                  <FormControl size="small" fullWidth>
                    <Select
                      value={language}
                      onChange={handleLanguageChange}
                      sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#E5E7EB",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#0F4C81",
                        },
                      }}
                    >
                      <MenuItem value="tr">🇹🇷 Türkçe</MenuItem>
                      <MenuItem value="en">🇬🇧 English</MenuItem>
                      <MenuItem value="de">🇩🇪 Deutsch</MenuItem>
                      <MenuItem value="ar">🇸🇦 العربية</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box className="flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-[#EF4444] transition-colors"
              >
                {item.label}
              </a>
            ))}

            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select
                value={language}
                onChange={handleLanguageChange}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#E5E7EB",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#EF4444",
                  },
                }}
              >
                <MenuItem value="tr">🇹🇷 Türkçe</MenuItem>
                <MenuItem value="en">🇬🇧 English</MenuItem>
                <MenuItem value="de">🇩🇪 Deutsch</MenuItem>
                <MenuItem value="ar">🇸🇦 العربية</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              size="medium"
              className="ml-2 text-white bg-[#0F4C81] hover:bg-[#0b385f]"
              href="#contact"
            >
              Teklif Al
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
