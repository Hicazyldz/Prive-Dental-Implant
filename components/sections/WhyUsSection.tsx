// components/sections/WhyUsSection.tsx
"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import VerifiedIcon from "@mui/icons-material/Verified";
import SpeedIcon from "@mui/icons-material/Speed";
import FactoryIcon from "@mui/icons-material/Factory";
import PublicIcon from "@mui/icons-material/Public";

const reasons = [
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Kanıtlanmış Kalite & Güvenilirlik",
    desc: "Titiz AR-GE çalışmaları ve dünya standartlarında üretim protokolleri ile en yüksek biyouyumlulukta implantlar sunuyoruz.",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Yenilikçi Teknoloji",
    desc: "Maxicell gibi onaylanmış yüzey teknolojilerimiz hızlı osseointegrasyon ve yüksek sağkalım oranı sağlar.",
  },
  {
    icon: <FactoryIcon fontSize="large" />,
    title: "Cerrahi ve Protezde Tam Uyum",
    desc: "Ortak iç bağlantı yapısı sayesinde kolay, hızlı ve güvenli bir cerrahi & protez süreci sunar.",
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "Uluslararası Deneyim",
    desc: "Dünya çapında hekimler tarafından tercih edilen ve güçlü klinik destek sunan güvenilir implant markası.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="quality">
      <Container maxWidth="lg" className="py-20">
          <Typography
            variant="h4"
            sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: "0.1em", display: "block", textAlign: "center", mb: 2 }}
          >
            NEDEN BİZ?
          </Typography>        <Typography
          variant="h4"
          className="font-bold text-center mb-16 tracking-tight"
        >
          Üretimde güvenebileceğiniz bir iş ortağı.
        </Typography>

        <Grid container spacing={4}>
          {reasons.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={2}
                className="h-full rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <Box sx={{ color: "primary.main", mt: 2 }}>{item.icon}</Box>

                <Typography variant="subtitle1" className="font-semibold mb-3">
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
