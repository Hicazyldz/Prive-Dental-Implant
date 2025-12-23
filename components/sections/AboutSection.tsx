"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("about");

  // JSON'daki paragrafları bir dizi olarak alıyoruz
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section id="about">
      <Container maxWidth="lg" className="py-20">
        <Grid container spacing={6} alignItems="center">
          {/* Yazı tarafı */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              sx={{ 
                color: "primary.main", 
                fontWeight: "bold", 
                letterSpacing: "0.1em", 
                mb: 4, 
                display: "block" 
              }}
            >
              {t("subtitle")}
            </Typography>

            {/* Paragrafları döngü ile basıyoruz */}
            {paragraphs.map((text, index) => (
              <Typography 
                key={index} 
                variant="body1" 
                sx={{ 
                  mb: index === paragraphs.length - 1 ? 0 : 3,
                  lineHeight: 1.8 
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
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <img 
                  src="/Prive_logo.png" 
                  alt={t("subtitle")} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}