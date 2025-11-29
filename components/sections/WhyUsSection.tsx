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
    title: "Yüksek Kalite Standartları",
    desc: "Her çift çorap, sıkı kalite kontrol süreçlerinden geçerek paketlenir.",
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Hızlı ve Güvenilir Termin",
    desc: "Siparişlerinizi söz verilen tarihte, hatta çoğu zaman daha erken teslim ederiz.",
  },
  {
    icon: <FactoryIcon fontSize="large" />,
    title: "Esnek Üretim Kapasitesi",
    desc: "Hem küçük adetli hem de yüksek hacimli siparişlerde ölçeklenebilir üretim.",
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "İhracat Tecrübesi",
    desc: "Yurt içi ve yurt dışında birçok marka ile uzun süreli iş ortaklıkları.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="quality">
      <Container maxWidth="lg" className="py-20">
        <Typography
          variant="overline"
          className="text-amber-600 font-semibold tracking-widest block text-center mb-2"
        >
          NEDEN BİZ?
        </Typography>

        <Typography
          variant="h4"
          className="font-bold text-center mb-10 tracking-tight"
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
                <Box className="text-blue-700">{item.icon}</Box>

                <Typography variant="subtitle1" className="font-semibold">
                  {item.title}
                </Typography>

                <Typography variant="body2" className="text-gray-600">
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
