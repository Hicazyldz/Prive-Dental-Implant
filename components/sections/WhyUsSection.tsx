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
import { useTranslations } from "next-intl";

const REASONS = [
  { id: 1, key: "quality", icon: <VerifiedIcon /> },
  { id: 2, key: "tech", icon: <SpeedIcon /> },
  { id: 3, key: "harmony", icon: <FactoryIcon /> },
  { id: 4, key: "experience", icon: <PublicIcon /> },
];

const CARD_STYLES = {
  paper: {
    height: "100%",
    borderRadius: 3,
    p: { xs: 3, md: 4 },
    display: "flex",
    flexDirection: "column" as const,
    gap: 2,
    transition: "all 0.3s ease",
    borderColor: "divider",
    bgcolor: "background.paper",
    color: "text.primary",

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
    bgcolor: "background.brandMain",   // brand soft
    color: "text.onBrandLight",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",

    "& svg": { fontSize: 32 },
  },
} as const;

export default function WhyUsSection() {
  const t = useTranslations("whyUs");

  return (
    <Box
      component="section"
      id="why-us"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "background.graySoft",   // 🔹 BRAND SOFT ZEMİN
        color: "text.onBrandSoft",   // 🔹 BRAND SOFT ÜZERİNDEKİ YAZI
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
             color: "text.onGraySoft",   // 🔹 BRAND SOFT ÜZERİNDEKİ YAZI
              fontWeight: "bold",
              letterSpacing: "0.1em",
              mb: 2,
            }}
          >
            {t("subtitle")}
          </Typography>

          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "2.5rem", md: "3.2rem" },
                mb: 3,
                letterSpacing: 1,
                color: "text.onGraySoft",
              }}
            >
              {t("title")}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.onGraySoft",
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              {t("description")}
            </Typography>
          </Box>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {REASONS.map((reason) => (
            <Grid key={reason.id} size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={CARD_STYLES.paper}>
                <Box
                  sx={{
                    ...CARD_STYLES.iconBox,
                    color: "text.onBrandMain",
                    "&:hover": {
                      bgcolor: "background.brandMain",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {reason.icon}
                </Box>

                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "1rem", md: "1.125rem" },
                    lineHeight: 1.4,
                    color: "text.onGraySoft",
                  }}
                >
                  {t(`items.${reason.key}.title`)}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.875rem", md: "0.9375rem" },
                  }}
                >
                  {t(`items.${reason.key}.desc`)}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
