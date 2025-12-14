// components/sections/CorporateSection.tsx
"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

interface CorporateItem {
  id: number;
  title: string;        
  image: string;        
  description: string;  
  details: string;      
}

const corporateItems: CorporateItem[] = [
  
  {
    id: 2,
    title: "Vizyonumuz ve Misyonumuz",
    image: "/corp_vision.png",
    description: "Vizyonumuz ve Misyonumuz",
    details:
      "Vizyonumuz; yerel güçle geliştirilen, global ölçekte tercih edilen bir implant markası olmaktır. Misyonumuz ise; hekimlere cerrahi ve protetik açıdan güven veren, hastalara ise uzun ömürlü ve estetik sonuçlar sunan implant sistemleri geliştirmektir.",
  },
  {
    id: 3,
    title: "Kalite Politikamız",
    image: "/corp_quality.png",
    description: "Kalite Politikamız",
    details:
      "Kalite yönetim sistemimizi uluslararası tıbbi cihaz standartlarına uygun şekilde kurguluyor, her implantı üretimden sevkiyata kadar izlenebilir kılıyoruz. Sürekli iyileştirme kültürü ile süreçlerimizi, ürün performansını ve hizmet kalitemizi düzenli olarak gözden geçiriyoruz.",
  },
  {
    id: 4,
    title: "Sertifikalarımız",
    image: "/corp_certificates.png",
    description: "Sertifikalarımız",
    details:
      "Prive Implant ürünleri ve üretim tesisleri, ilgili mevzuat ve standartlara uygunluk için düzenli olarak denetlenmekte ve belgelendirilmektedir. Sertifikasyon yapımız; güvenli, izlenebilir ve regülasyonlara uyumlu bir üretim anlayışının göstergesidir.",
  },
  {
    id: 5,
    title: "Çevre Politikamız",
    image: "/corp_environment.png",
    description: "Çevre Politikamız",
    details:
      "Üretim süreçlerimizde kaynak kullanımını optimize etmeyi, atıkları azaltmayı ve çevresel etkilerimizi en aza indirmeyi hedefliyoruz. Sürdürülebilirlik odaklı yaklaşımımız doğrultusunda enerji verimliliği, atık yönetimi ve geri dönüşüm konularına öncelik veriyoruz.",
  },
  {
    id: 6,
    title: "İnsan Kaynakları Politikamız",
    image: "/corp_hr.png",
    description: "İnsan Kaynakları Politikamız",
    details:
      "Çalışanlarımızı; markamızın en önemli değeri ve sürdürülebilir başarımızın temel unsuru olarak görüyoruz. Gelişimi destekleyen, adil, şeffaf ve kapsayıcı bir çalışma ortamı oluşturmayı, sürekli eğitim ve yetkinlik artırma programları ile ekiplerimizi güçlendirmeyi amaçlıyoruz.",
  },
  {
    id: 7,
    title: "Kişisel Verilerin Korunması Politikamız",
    image: "/corp_kvkk.png",
    description: "Kişisel Verilerin Korunması",
    details:
      "Prive Implant olarak kişisel verilerin gizliliği ve güvenliği konusunda ilgili mevzuata tam uyum sağlamayı taahhüt ediyoruz. Veri işleme faaliyetlerimizi şeffaflık ilkesiyle yürütüyor, yalnızca gerekli bilgilere erişimi yetkili personelle sınırlıyoruz.",
  },
  {
    id: 8,
    title: "Çerez Politikamız",
    image: "/corp_cookie.png",
    description: "Çerez Politikamız",
    details:
      "Dijital kanallarımızda kullanılan çerezler; kullanıcı deneyimini iyileştirmek, site performansını analiz etmek ve güvenliği artırmak amacıyla sınırlı şekilde kullanılmaktadır. Çerez tercihleri, kullanıcılarımızın kontrolü altındadır ve talep edildiğinde güncellenebilmektedir.",
  },
];

export default function CorporateSection() {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<CorporateItem | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleItemClick = (item: CorporateItem) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedItem(null), 250);
  };

  return (
    <Box
      id="kurumsal"
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        {/* Başlık ve açıklama */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "2.5rem", md: "3.2rem" },
              mb: 3,
              letterSpacing: 1,
            }}
          >
            Yenilikçi{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              Vizyon
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.05rem" },
              maxWidth: "980px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Prive Implant; titiz AR-GE çalışmalarını ve klinik bilgi birikimini,
            yüksek hassasiyetli üretim protokolleri ile birleştirerek hekimlere
            güvenilir implant çözümleri sunar. Verimliliği artırmak, cerrahi
            sü  reçleri kolaylaştırmak ve daha konforlu tedavi deneyimi sağlamak
            için yenilikçi ürünler tasarlamaya, geliştirmeye ve uygulamaya
            devam ediyoruz.
          </Typography>
        </Box>
        <Grid container spacing={6} justifyContent="center">
          <Grid size={{ xs: 12 }}>
            </Grid>
          </Grid>

       <Grid container spacing={6} justifyContent="center">
  {corporateItems.map((item) => (
    <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ textAlign: "center" }}>
              <Box
                onClick={() => handleItemClick(item)}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Daire */}
                <Box
                  sx={{
                    width: 210,
                    height: 210,
                    borderRadius: "50%",
                    overflow: "hidden",
                    mb: 2.5,
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.18)",
                    filter: "grayscale(20%)",
                  }}
                />

                {/* Alt başlık – tamamen küçük harf, NucleOSS havası */}
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    color: "text.primary",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            maxWidth: 900,
            width: "100%",
            mx: 2,
            maxHeight: 500,
            height: "100%",
          },
        }}
      >
        {selectedItem && (
          <>
            {/* Header görseli */}
            <Box
              sx={{
                position: "relative",
                height: { xs: 220, md: 320 },
                overflow: "hidden",
                backgroundImage: `url('${selectedItem.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.35), rgba(0,0,0,0.7))",
                }}
              />

              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#fff",
                  bgcolor: "rgba(0,0,0,0.35)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  color: "white",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  {selectedItem.description}
                </Typography>
              </Box>
            </Box>

            <DialogContent
              sx={{
                pt: 3,
                maxHeight: {
                  xs: "calc(95vh - 220px - 96px)",
                  md: "calc(95vh - 320px - 96px)",
                },
                overflowY: "auto",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", lineHeight: 1.8 }}
              >
                {selectedItem.details}
              </Typography>
            </DialogContent>

            <DialogActions
              sx={{
                p: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={handleCloseModal} variant="contained">
                Kapat
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
