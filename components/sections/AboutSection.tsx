"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTranslations } from "next-intl";
export default function AboutSection() {
  const t = useTranslations("about");

  const paragraphs = t.raw("paragraphs") as string[];
  return (
    <Box id="about" sx={[{ bgcolor: "background.grayLine"}]}>
      <Container maxWidth="lg" className="py-20">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{
                color: "text.onGraySoft",
                fontWeight: "bold",
                letterSpacing: "0.1em",
                mb: 2,
                display: "block",
              }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                {t("subtitle")}
              </Box>
            </Typography>

            {paragraphs.map((text, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  mb: index === paragraphs.length - 1 ? 0 : 3,
                  lineHeight: 1.8,
                }}
              >
                {text}
              </Typography>
            ))}
          </Grid>

          {/* Görsel tarafı */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex justify-center md:justify-end">
              <Paper
                sx={{
                  width: "100%",
                  maxWidth: "28rem",
                  aspectRatio: "2/3",
                  borderRadius: "24px",
                  overflow: "hidden",
                  bgcolor: "background.default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 24px rgba(37, 85, 142, 0.5)",
                }}
              >
                <img
                  src="/about_photo.png"
                  alt={t("subtitle")}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
