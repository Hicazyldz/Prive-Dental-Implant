// components/sections/AboutSection.tsx
"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function AboutSection() {
  return (
    <section id="about">
      <Container maxWidth="lg" className="py-20">
        <Grid container spacing={6} alignItems="center">
          {/* Yazı tarafı */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              className="text-amber-600 font-semibold tracking-widest mb-2 block"
            >
              HAKKIMIZDA
            </Typography>

            <Typography
              variant="h4"
              className="font-bold mb-4 tracking-tight"
            >
              Çorap üretiminde köklü bir deneyim.
            </Typography>

            <Typography variant="body1" className="text-gray-600 mb-4">
              X yıl önce tekstil sektöründe başladığımız yolculuğumuza, bugün
              yurt içi ve yurt dışında birçok markaya üretim yapan bir çorap
              üreticisi olarak devam ediyoruz. Kaliteli iplikler, modern
              makineler ve titiz kalite kontrol süreçlerimizle her çift çorabın
              arkasında duruyoruz.
            </Typography>

            <Typography variant="body1" className="text-gray-600">
              Müşterilerimize; günlük kullanımdan spor performansına, kurumsal
              ve logolu özel üretimlere kadar geniş bir ürün yelpazesi sunuyor,
              koleksiyonlarını birlikte tasarlıyoruz.
            </Typography>
          </Grid>

          {/* Görsel tarafı */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex justify-center md:justify-end">
              <Paper
                elevation={3}
                className="w-full max-w-md aspect-4/3 rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center"
              >
                <Typography variant="body2" className="text-gray-500 px-6 text-center">
                  Buraya üretim hattı, fabrika içi veya ürünlerden oluşan bir
                  fotoğraf yerleştirilecek.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
