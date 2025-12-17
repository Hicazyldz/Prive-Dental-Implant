// components/sections/DealersSection.tsx
"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TurkeyProvincesMap from "./TurkeyProvincesMap";

// ==================== TİP TANIMLARI ====================
export interface DealerInfo {
  name: string;
  contact?: string;
  address?: string;
  phone?: string;
  email?: string;
  info?: string;
}

export type DealersData = Record<string, DealerInfo>;

// ==================== YAPILANDIRMA ====================
// Bayi verileri - İleride API'den veya ayrı data dosyasından çekilebilir
const DEALERS_DATA: DealersData = {
  ankara: {
    name: "ADH Medikal / Ankara Bayii",
    contact: "Ali Can Arslan",
    address: "Kızılay, Dr. Mediha Eldem Sk. No:38 D:11, 06420 Çankaya / Ankara",
    phone: "+90 533 411 41 65",
    email: "adhmedikal@gmail.com",
    info: "Satış ve teknik destek hizmetleri."
  },

  bursa: {
    name: "White Medikal",
    contact: "Osman Şimşekcan",
    address: "İhsaniye Mah. Tuna Cad. No:165 B2/7 Nilüfer / Bursa",
    phone: "+90 (505) 703 96 99",
    info: "Bölgesel satış noktası."
  },

  gaziantep: {
    name: "TAM DENTAL",
    contact: "Erhan Özil",
    address: "Korutürk Cd. No:92, 27500 Şehitkamil / Gaziantep, Türkiye",
    phone: "+90 (507) 603 92 33",
    info: "Gaziantep ve çevre iller için yetkili bayi."
  },

  adana: {
    name: "Adana",
    contact: "***",
    address: "***",
    phone: "***",
    email: "***",
    info: "Bilgiler daha sonra eklenecektir."
  },

  hatay: {
    name: "Hatay",
    contact: "***",
    address: "***",
    phone: "***",
    info: "Bilgiler daha sonra eklenecektir."
  },

  mersin: {
    name: "Mersin",
    contact: "***",
    address: "***",
    phone: "***",
    info: "Bilgiler daha sonra eklenecektir."
  },
  
  kahramanmaras: {
    name: "Kahramanmaraş",
    contact: "***",
    address: "***",
    phone: "***",
    info: "Bilgiler daha sonra eklenecektir."
  }
};


const ACTIVE_PROVINCES = Object.keys(DEALERS_DATA);

// Bölüm içeriği
const SECTION_CONTENT = {
  title: "Bayilerimiz",
  description: "Türkiye genelinde hizmet veren bayilerimiz ve satış noktalarımız. Size en yakın bayimizi bularak ürünlerimize kolayca ulaşabilirsiniz."
} as const;

// ==================== COMPONENT ====================
export default function DealersSection() {
  return (
    <Box component="section" id="dealers" aria-labelledby="dealers-title" sx={{bgcolor:'#2a2a2a'}}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        
        {/* Header */}
        <Typography
          id="dealers-title"
          component="h2"
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.5rem" }
          }}
        >
          {SECTION_CONTENT.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            maxWidth: "800px",
            mx: "auto",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            px: { xs: 2, sm: 0 }
          }}
        >
          {SECTION_CONTENT.description}
        </Typography>

        
        
        <Box
          sx={{
            p: 5,
            textAlign: "center",
            bgcolor: "transparent",
          }}
        >
        <TurkeyProvincesMap 
          activeProvinces={ACTIVE_PROVINCES} 
          dealers={DEALERS_DATA}
        />
        </Box>
      </Container>
    </Box>
  );
}