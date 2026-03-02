"use client";
import { useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useTranslations } from "next-intl";

export default function UrunlerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = useTranslations("productSection");

  return (
    <Box component="main" sx={{ bgcolor: "background.paper", minHeight: "0vh" }}>

      {/* 1. BANNER */}
      <Box
        sx={{
          width: "100%",
          lineHeight: 0, // img altındaki boşluğu kaldırır
        }}
      >
        <Box
          component="img"
          src="/urunsayfasi/5..png"
          alt="Prive Dental Banner"
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* 2. TEMEL ÖZELLİKLER */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: "#1e40af", mb: 6, textAlign: "center" }}>
          {t("featuresTitle")}
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Grid key={i} size={{ xs: 12 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box sx={{
                  minWidth: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  bgcolor: "info.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  flexShrink: 0
                }}>✓</Box>
                <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 500 }}>
                  {t(`feature${i}`)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. ZIGZAG İÇERİK */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>

        {/* Satır 1: Görsel Sol - Yazı Sağ */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/68..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              {t("sections.s1.title")}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t("sections.s1.body")}
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 2: Yazı Sol - Görsel Sağ (mobilde görsel önce) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              {t("sections.s2.title")}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t("sections.s2.body")}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="img" src="/urunsayfasi/66..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

        {/* Satır 3: Görsel Sol - Yazı Sağ */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/58..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              {t("sections.s3.title")}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t("sections.s3.body")}
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 4: Yazı Sol - Görsel Sağ (mobilde görsel önce) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              {t("sections.s4.title")}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t("sections.s4.body")}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="img" src="/urunsayfasi/59..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

        {/* Satır 5: Görsel Sol - Yazı Sağ */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/62..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              {t("sections.s5.title")}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t("sections.s5.body")}
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 6: Yazı Sol - Görsel Sağ (mobilde görsel önce) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              {t("sections.s6.title")}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              {t("sections.s6.body")}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="img" src="/urunsayfasi/57..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

      </Container>

      {/* 4. ÇAP VE UZUNLUK */}
      <Container maxWidth="lg" sx={{ pb: 15, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af", mb: 6 }}>
          {t("diameterTitle")}
        </Typography>
        <Box
          component="img"
          src="/urunsayfasi/5.png"
          alt={t("diameterImageAlt")}
          sx={{ width: "100%", borderRadius: "24px", boxShadow: 2, mb: 12 }}
        />

        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af", mb: 6, mt: 10 }}>
          {t("lengthTitle")}
        </Typography>
        <Box
          component="img"
          src="/urunsayfasi/6.png"
          alt={t("lengthImageAlt")}
          sx={{ width: "100%", borderRadius: "24px", boxShadow: 2 }}
        />
      </Container>

    </Box>
  );
}