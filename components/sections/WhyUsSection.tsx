// components/sections/WhyUsSection.tsx
"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import FactoryIcon from "@mui/icons-material/Factory";
import PublicIcon from "@mui/icons-material/Public";
import { SvgIconProps } from "@mui/material/SvgIcon";

// ==================== TİP TANIMLARI ====================
interface ReasonItem {
  id: number;
  icon: React.ReactElement<SvgIconProps>;
  title: string;
  description: string;
}

// ==================== YAPILANDIRMA ====================
const SECTION_CONTENT = {
  subtitle: "NEDEN BİZ?",
  title: "Üretimde güvenebileceğiniz bir iş ortağı.",
  description: "Kalite, güvenilirlik ve yenilikçi teknoloji ile hekimlere ve hastalara en iyi implant çözümlerini sunuyoruz."
} as const;

const REASONS: ReasonItem[] = [
  {
    id: 1,
    icon: <VerifiedIcon />,
    title: "Kanıtlanmış Kalite & Güvenilirlik",
    description: "Titiz AR-GE çalışmaları ve dünya standartlarında üretim protokolleri ile en yüksek biyouyumlulukta implantlar sunuyoruz.",
  },
  {
    id: 2,
    icon: <SpeedIcon />,
    title: "Yenilikçi Teknoloji",
    description: "Maxicell gibi onaylanmış yüzey teknolojilerimiz hızlı osseointegrasyon ve yüksek sağkalım oranı sağlar.",
  },
  {
    id: 3,
    icon: <FactoryIcon />,
    title: "Cerrahi ve Protezde Tam Uyum",
    description: "Ortak iç bağlantı yapısı sayesinde kolay, hızlı ve güvenli bir cerrahi & protez süreci sunar.",
  },
  {
    id: 4,
    icon: <PublicIcon />,
    title: "Uluslararası Deneyim",
    description: "Dünya çapında hekimler tarafından tercih edilen ve güçlü klinik destek sunan güvenilir implant markası.",
  },
];

// Stil konfigürasyonu
const CARD_STYLES = {
  paper: {
    height: "100%",
    borderRadius: 3,
    p: { xs: 3, md: 4 },
    display: "flex",
    flexDirection: "column" as const,
    gap: 2,
    transition: "all 0.3s ease",
    border: "1px solid",
    borderColor: "divider",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
      borderColor: "primary.main",
    },
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 2,
    bgcolor: "primary.50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "primary.main",
    transition: "all 0.3s ease",
    "& svg": {
      fontSize: 32,
    },
  },
} as const;

// ==================== COMPONENT ====================
export default function WhyUsSection() {
  return (
    <Box
      component="section"
      id="why-us"
      aria-label="Neden Biz"
      sx={{
        py: { xs: 10, md: 16 },
      }}
    >
      <Container maxWidth="lg">
        {/* Başlık ve Açıklama */}
        <Stack spacing={2} sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          {/* Üst Başlık */}
          <Typography
              variant="h4"
              sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: "0.1em", mb: 2, display: "block" }}
            >
            {SECTION_CONTENT.subtitle}
          </Typography>

          {/* Ana Başlık */}
          <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "2.5rem", md: "3.2rem" },
              mb: 3,
              letterSpacing: 1,
            }}
          >
            {SECTION_CONTENT.title}
          </Typography>
          

          {/* Açıklama - Opsiyonel */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.7,
              mt: 1,
            }}
          >
            {SECTION_CONTENT.description}
          </Typography>
          </Box>
        </Stack>

        {/* Kartlar */}
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {REASONS.map((reason) => (
            <Grid key={reason.id} size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={CARD_STYLES.paper}>
                {/* İkon */}
                <Box
                  sx={{
                    ...CARD_STYLES.iconBox,
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white",
                      transform: "scale(1.05)",
                    }
                  }}
                >
                  {reason.icon}
                </Box>

                {/* Başlık */}
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    lineHeight: 1.4,
                    color: "text.primary",
                  }}
                >
                  {reason.title}
                </Typography>

                {/* Açıklama */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.875rem", md: "0.9375rem" },
                  }}
                >
                  {reason.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}