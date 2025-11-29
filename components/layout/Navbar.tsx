// components/layout/Navbar.tsx
"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const navItems = [
  { label: "Ürünler", href: "#products" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Kalite", href: "#quality" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <Toolbar className="max-w-6xl mx-auto w-full flex justify-between">
        <Typography
          variant="h6"
          component="div"
          className="font-semibold tracking-tight"
        >
          Socks Company
        </Typography>

        <Box className="flex gap-4 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <Button
            variant="contained"
            color="primary"
            size="small"
            className="ml-4"
            href="#contact"
          >
            Teklif Al
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
