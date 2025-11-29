// components/sections/HeroSection.tsx
"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function HeroSection() {
  return (
    <Container maxWidth="lg" className="py-16 md:py-24">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant="overline"
            className="text-amber-600 font-semibold tracking-widest"
          >
            ÇORAP ÜRETİCİSİ
          </Typography>

          <Typography
            variant="h3"
            component="h1"
            className="font-bold mt-3 leading-tight"
          >
            Her adımda konfor, <br /> her çiftte kalite.
          </Typography>

          <Typography variant="body1" className="mt-4 text-gray-600">
            Günlük, spor ve özel üretim çoraplarımızla markanız için güvenilir
            bir üretim ortağı sunuyoruz.
          </Typography>

          <Box className="flex flex-wrap gap-3 mt-6">
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#products"
            >
              Ürünlere göz at
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              href="#contact"
            >
              Hemen iletişime geç
            </Button>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="flex justify-center md:justify-end">
            <Paper
              elevation={3}
              className="w-full max-w-sm aspect-4/5 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center"
            >
              <Typography
                variant="h6"
                className="text-gray-300 text-center px-6"
              >
                Buraya daha sonra <br />
                çorap ürün fotoğrafları <br />
                gelecek.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
