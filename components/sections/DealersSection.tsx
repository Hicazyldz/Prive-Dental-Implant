"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TurkeyProvincesMap from "./TurkeyProvincesMap";
import { useTranslations } from "next-intl";

export default function DealersSection() {
  const t = useTranslations("dealers");
  
  // JSON'dan bayi verilerini ham obje olarak çekiyoruz
  const dealersData = t.raw("data");
  const activeProvinces = Object.keys(dealersData);

  return (
    <Box 
      component="section" 
      id="dealers" 
      aria-labelledby="dealers-title" 
      sx={{ bgcolor: '#2a2a2a' }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        
        {/* Header */}
        <Typography
          id="dealers-title"
          component="h2"
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
            color: "primary.main", 
            fontSize: { xs: "2rem", md: "2.5rem" }
          }}
        >
          {t("title")}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "800px",
            mx: "auto",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            px: { xs: 2, sm: 0 }
          }}
        >
          {t("description")}
        </Typography>

        <Box
          sx={{
            p: { xs: 0, md: 5 },
            textAlign: "center",
            bgcolor: "transparent",
          }}
        >
          {/* Haritaya dinamik veriyi gönderiyoruz */}
          <TurkeyProvincesMap 
            activeProvinces={activeProvinces} 
            dealers={dealersData}
          />
        </Box>
      </Container>
    </Box>
  );
}