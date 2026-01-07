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
import { useTranslations } from "next-intl";

interface CorporateItem {
  id: number;
  key: string; // JSON'daki anahtar (vision, quality vb.)
  image: string;
}

const corporateItems: CorporateItem[] = [
  { id: 2, key: "vision", image: "/corporate/vision.png" },
  { id: 3, key: "quality", image: "/corporate/quality.png" },
  { id: 4, key: "certificates", image: "/corporate/certificates.png" },
  { id: 5, key: "environment", image: "/corporate/environment.png" },
  { id: 6, key: "hr", image: "/corporate/hr.png" },
  { id: 7, key: "kvkk", image: "/corporate/kvkk.png" },
  { id: 8, key: "cookie", image: "/corporate/cookie.png" },
];

export default function CorporateSection() {
  const theme = useTheme();
  const t = useTranslations("corporate"); // JSON'daki 'corporate' anahtarını kullanır
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
    <Box id="kurumsal" sx={{ py: 12,  bgcolor: "background.graySoft" }}>
      <Container maxWidth="lg">
        {/* Başlık ve açıklama */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: "primary.main",
              fontSize: { xs: "2.5rem", md: "3.2rem" },
              mb: 3,
              letterSpacing: 1,
            }}
          >
            <Box component="span" sx={{ fontWeight: 700 }}>
            {t("title")}
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
            {t("description")}
          </Typography>
        </Box>

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
                {/* İkon boyutu 210px'den 160px'e küçültüldü */}
                <Box
                  sx={{
                    width: 160,
                    height: 160,
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

                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    color: "primary.main",
                    fontSize: "0.95rem",
                  }}
                >
                  {/* Dinamik Başlık: items.vision.title vb. */}
                  {t(`items.${item.key}.title`)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Modal - içeriğe göre otomatik boyutlanır, fotoğraf yok */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            maxWidth: 650,
            width: "100%",
            mx: 2,
          },
        }}
      >
        {selectedItem && (
          <>
            {/* Modal başlık alanı - fotoğraf kaldırıldı, sadece başlık */}
            <Box
              sx={{
                p: 3,
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
                  {t(`items.${selectedItem.key}.title`)}
                </Typography>

                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    color: "text.secondary",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.05)" },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Modal içerik - padding artırıldı, daha okunabilir */}
            <DialogContent
              sx={{
                pt: 4,
                pb: 4,
                px: 4,
              }}
            >
              <Typography
                variant="body1"
                sx={{ 
                  color: "text.secondary", 
                  lineHeight: 1.8,
                  fontSize: "1rem",
                }}
              >
                {/* Modal Detay Metni */}
                {t(`items.${selectedItem.key}.details`)}
              </Typography>
            </DialogContent>

            {/* Modal footer - daha az padding */}
            <DialogActions
              sx={{
                p: 2.5,
                px: 4,
                borderTop: `1px solid ${theme.palette.divider}`,
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={handleCloseModal} variant="contained">
                {t("btnClose")}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}