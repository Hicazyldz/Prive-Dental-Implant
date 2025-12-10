"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const products = [
  {
    id: 1,
    title: "T6 Standard",
    desc: "Kemik seviyesi implant. Modern ve estetik tasarımı, güvenli cerrahi protokolü ve zengin üst yapı seçenekleriyle hekime ve hastaya konforlu bir cerrahi ve protetik süreç sunar.",
  },
  {
    id: 2,
    title: "T6 Torq",
    desc: "Kemik seviyesi implant. Kesici ve derin diş profili sayesinde tüm kemik tiplerinde güçlü mekanik tutunma sağlar; yüksek ISQ değerleriyle hemen ve erken yükleme için tasarlanmıştır. Ortak iç yapısı ve Maxicell yüzeyiyle T6 serisinin kanıtlanmış gücünü sürdürür.",
  },
  {
    id: 3,
    title: "Slimex",
    desc: "Dar kretler ve sınırlı kemik kalınlığında ince ama dayanıklı çözümler sunan implant sistemi. External tasarımı ve geniş üst yapı seçenekleriyle farklı protez tedavilerine uyum sağlar; Maxicell yüzeyiyle güvenli ve yüksek sağkalım oranı sunar.",
  },
];


export default function ProductsSection() {
  return (
    <section id="products">
      <Container maxWidth="lg" className="py-20">
        <Typography
          variant="h4"
          className="font-bold text-center mb-20"
        >
          Ürün Gruplarımız
        </Typography>

        <Box className="flex flex-col gap-24">
          {products.map((item, index) => {
            const isEven = index % 2 === 0; // 0,2,4... için true

            return (
              <Grid key={item.id} container spacing={6} alignItems="center">
                {/* FOTOĞRAF KISMI */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    order: {
                      xs: 1,
                      md: isEven ? 1 : 2, // tek ürünlerde sol, çift ürünlerde sağ
                    }
                  }}
                >
                  <Paper
                    sx={{ width: "100%", aspectRatio: "2/3", borderRadius: "24px", overflow: "hidden", bgcolor: "background.default", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <img src={`/product${item.id}.jpg`} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Paper>
                </Grid>

                {/* YAZI KISMI */}
                <Grid
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    order: {
                      xs: 2,
                      md: isEven ? 2 : 1, // fotoğraf neredeyse, yazı tam tersi
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#FFFFFF",
                      borderBottom: "12px solid #EF4444",
                      borderRadius: isEven 
                        ? "0px 15px 60px 0px"  // Sağda: sağ kenarlar rounded
                        : "15px 0px 0px 60px", // Solda: sol kenarlar rounded
                      marginLeft: isEven ? "auto" : "0",
                      marginRight: isEven ? "0" : "auto",
                      padding: "24px",
                    }}
                  >
                    <Typography variant="h3" sx={{ color: "text.primary",}} className="font-bold mb-6">
                      {item.title}
                    </Typography>

                    <Typography variant="h5" sx={{ color: "text.secondary", mb: 6 }}>
                      {item.desc}
                    </Typography>

                    <Box className="flex gap-3">
                      <Button
                        component="a"
                        href="#contact"
                        variant="outlined"
                        color="primary"
                        size="medium"
                      >
                        Detaylı Bilgi
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Container>
    </section>
  );
}
