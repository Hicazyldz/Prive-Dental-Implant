// components/sections/DealersSection.tsx
"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TurkeyProvincesMap from "./TurkeyProvincesMap";

const DEALER_PROVINCES = [
  "ankara",
  "corum",
  "adana",
  "hatay",
  "mersin",
  "gaziantep",
  "kahramanmaras",
  "sanliurfa",
];

export default function DealersSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 12 }}>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        Bayilerimiz
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          maxWidth: "800px",
          mx: "auto",
          mb: 6,
          fontSize: "1.1rem",
          lineHeight: 1.8,
        }}
      >
        Türkiye genelinde hizmet veren bayilerimiz ve satış noktalarımız.
        Size en yakın bayimizi bularak ürünlerimize kolayca ulaşabilirsiniz.
      </Typography>

      <TurkeyProvincesMap activeProvinces={DEALER_PROVINCES} />
    </Container>
  );
}
