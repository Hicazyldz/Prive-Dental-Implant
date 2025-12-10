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
              variant="h4"
              sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: "0.1em", mb: 2, display: "block" }}
            >
              HAKKIMIZDA
            </Typography>

            

            <Typography variant="body1" sx={{  mb: 4 }}>
           
          Türkiye’nin yenilikçi implant çözümleri sunan öncü markalarından biri
          olarak kurulan firmamız, yüksek hassasiyetli üretim teknolojileri ve
          bilimsel altyapı üzerine inşa edilmiştir. Amacımız; hekimlere güven
          veren, hastalara ise uzun ömürlü ve konforlu çözümler sağlayan üstün
          kaliteli implant sistemleri geliştirmektir.
          <br />
          <br />
          Ar-Ge odaklı yaklaşımımızla, biyouyumluluk ve yüzey teknolojileri
          alanındaki güncel bilimsel gelişmeleri takip ediyor; global
          standartlarla uyumlu, güvenilir ve temiz implant yüzeyleri üretmek
          için çalışıyoruz. Her bir ürünümüz, titiz protokollerle test edilmekte
          ve klinik beklentilere yüksek doğrulukla cevap verecek şekilde
          tasarlanmaktadır.
          <br />
          <br />
          Klinik hekimler ve akademisyenlerle sürdürdüğümüz iş birliği sayesinde
          implantoloji alanındaki yenilikleri destekliyor; bilgi paylaşımı ve
          sürekli gelişim odaklı bilimsel platformlarda aktif rol alıyoruz.
          <br />
          <br />
          Etik, şeffaf ve sorumluluk bilinci yüksek yönetim anlayışımız;
          üretimden satış sonrası desteğe kadar tüm süreçlerimizin temelini
          oluşturur. Hasta güvenliğini ve hekim memnuniyetini merkeze alarak,
          sektöre değer katmaya devam ediyoruz.
        </Typography>
          </Grid>

          {/* Görsel tarafı */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="flex justify-center md:justify-end">
              <Paper
                sx={{ width: "100%", maxWidth: "28rem", aspectRatio: "2/3", borderRadius: "24px", overflow: "hidden", bgcolor: "background.default", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <img src="/Prive_logo.png" alt="Hakkımızda" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
