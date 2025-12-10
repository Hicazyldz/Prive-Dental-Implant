// components/sections/ContactSection.tsx
"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

export default function ContactSection() {
  const theme = useTheme();
  return (
    <section id="contact">
      <Container maxWidth="lg" className="py-20">
        <Grid container spacing={6}>
          {/* Sol taraf: iletişim bilgileri */}
  <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h4"
              sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: "0.1em", mb: 2, display: "block" }}
            >
              İLETİŞİM
            </Typography>

            <Typography
              variant="h4"
              className="font-bold mb-8 tracking-tight"
            >
              Sizinle çalışmayı sabırsızlıkla bekliyoruz.
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", mb: 6 }}>
              Ürünlerimiz ve üretim süreçlerimiz hakkında detaylı bilgi almak
              veya teklif talep etmek için bizimle dilediğiniz kanaldan
              iletişime geçebilirsiniz.
            </Typography>

            <Box className="flex flex-col gap-4">
              <Box className="flex items-center gap-3">
                <PhoneIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2">
                  Telefon: <span className="font-medium">+90 5XX XXX XX XX</span>
                </Typography>
              </Box>

              <Box className="flex items-center gap-3">
                <WhatsAppIcon sx={{ color: "success.main" }} />
                <Typography variant="body2">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/905XXXXXXXXX"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: theme.palette.primary.main, textDecoration: "underline" }}
                  >
                    Hemen mesaj gönderin
                  </a>
                </Typography>
              </Box>

              <Box className="flex items-center gap-3">
                <MailIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2">
                  E-posta:{" "}
                  <span className="font-medium">info@firmaadi.com</span>
                </Typography>
              </Box>

              <Box className="flex items-start gap-3">
                <LocationOnIcon sx={{ color: "primary.main", mt: 0.5 }} />
                <Typography variant="body2">
                  Adres: <span className="font-medium">Organize Sanayi Bölgesi, İstanbul / Türkiye</span>
                  <br />
                  {/* İleride buraya Google Maps linki ekleyebilirsin */}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Sağ taraf: form */}
  <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              sx={{ borderRadius: "16px", p: { xs: 3, md: 4 }, bgcolor: "background.paper" }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                Teklif veya bilgi formu
              </Typography>

              <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
                Kısaca ihtiyacınızı yazın, en kısa sürede size geri dönüş
                yapalım.
              </Typography>

              <Box component="form" className="flex flex-col gap-4">
                <TextField
                  label="Ad Soyad"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Firma Adı"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="E-posta"
                  size="small"
                  type="email"
                  fullWidth
                />
                <TextField
                  label="Mesajınız"
                  size="small"
                  fullWidth
                  multiline
                  minRows={4}
                />

                <Box className="flex justify-end mt-2">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Mesajı Gönder
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
