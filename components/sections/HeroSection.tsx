// components/sections/HeroSection.tsx
"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function HeroSection() {
  return (
    <Box
      id="home"
      className="w-full text-white py-24 md:py-40 relative overflow-hidden"
      sx={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            className="font-extrabold leading-tight tracking-tight"
            sx={{ fontSize: { xs: "2rem", md: "3rem" }, lineHeight: "1.1" }}
          >
            Yenilikçi <br /> İmplant Teknolojisi
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mt: 3, fontSize: "1.125rem" }}>
            Biyouyumlu titanyum yüzeyler, yüksek stabilite ve ileri mühendislik ile geliştirilen implant çözümleri.
            Daha güçlü, daha hızlı iyileşen ve estetik sonuçlar için tasarlandı.
          </Typography>

          <Box className="flex gap-4 mt-10">
            <Button
              variant="contained"
              size="large"
              href="#kurumsal"
              color="error"
            >
              Kurumsal
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#products"
              color="error"
            >
              Ürünler
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
