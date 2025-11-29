"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const products = [
  {
    id: 1,
    title: "Erkek Günlük Çoraplar",
    desc: "Yüksek pamuk oranı ve nefes alabilir kumaşıyla günlük kullanım için ideal.",
  },
  {
    id: 2,
    title: "Kadın Desenli Çoraplar",
    desc: "Modern tasarımlar ve kaliteli iplik dokusuyla hem şık hem konforlu.",
  },
  {
    id: 3,
    title: "Spor Performans Çorapları",
    desc: "Terletmeyen, destekli taban yapısı ile sporcular için özel üretim.",
  },
];

export default function ProductsSection() {
  return (
    <section id="products">
      <Container maxWidth="lg" className="py-20">
        <Typography
          variant="h4"
          className="font-bold text-center mb-16 tracking-tight"
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
                    },
                  }}
                >
                  <Paper
                    elevation={3}
                    className="w-full aspect-4/3 rounded-3xl overflow-hidden bg-gray-200 flex items-center justify-center"
                  >
                    <Typography variant="body2" className="text-gray-500">
                      Ürün fotoğrafı buraya gelecek
                    </Typography>
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
                  <Typography variant="h5" className="font-bold mb-3">
                    {item.title}
                  </Typography>

                  <Typography variant="body1" className="text-gray-600 mb-6">
                    {item.desc}
                  </Typography>

                  <Box className="flex gap-3">
                    <a
                      href="#contact"
                      className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-xl text-sm transition-all"
                    >
                      Detaylı Bilgi
                    </a>
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
