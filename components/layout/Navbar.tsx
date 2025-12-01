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


const navItems = [
  { label: "Ürünler", href: "#products" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Kalite", href: "#quality" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar className="max-w-8xl mx-auto w-full flex justify-between">
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="GELAL" className="h-25 w-auto mt-1 mb-1" />
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
              <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.href} disablePadding>
                      <ListItemButton component="a" href={item.href}>
                        <ListItemText primary={item.label} />
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
            </Drawer>
          </>
        ) : (
          <Box className="flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-gray-900 hover:text-green-800 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Button
              variant="contained"
              
              size="large"
              className="ml-4 text-gray-900 hover:bg-gray-500 hover:text-white"
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
