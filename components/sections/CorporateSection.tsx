"use client";

import { useState, useEffect } from "react";
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
import useMediaQuery from "@mui/material/useMediaQuery";

interface CorporateItem {
  id: number;
  key: string;
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
  const t = useTranslations("corporate");
  const [selectedItem, setSelectedItem] = useState<CorporateItem | null>(null);
  const [openModal, setOpenModal] = useState(false);

  // 1. HYDRATION HATASINI ÇÖZEN MOUNTED STATE'İ
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleItemClick = (item: CorporateItem) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => setSelectedItem(null), 250);
  };

  return (
    <Box id="kurumsal" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.graySoft" }}>
      <Container maxWidth="lg">
        {/* Başlık ve açıklama */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: "primary.main",
              fontSize: { xs: "2rem", md: "3.2rem" },
              mb: 2,
              letterSpacing: 1,
            }}
          >
            <Box component="span" sx={{ fontWeight: 700 }}>
              {t("title")}
            </Box>
          </Typography>

          {/* İhtiyaten component="div" ekledik ki JSON içinden <br> vb gelirse patlamasın */}
          <Typography
            variant="body1"
            component="div"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              maxWidth: "980px",
              mx: "auto",
              lineHeight: 1.8,
              px: { xs: 2, sm: 0 },
            }}
          >
            {t("description")}
          </Typography>
        </Box>

        {/* 2. MOUNTED KONTROLÜ: Sadece tarayıcıda yüklendikten sonra isMobile çalışır */}
        {mounted && isMobile ? (
          /* ✅ MOBİL: Yatay kaydırmalı şerit */
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              pb: 1,
              px: 1,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {corporateItems.map((item) => (
              <Box
                key={item.id}
                onClick={() => handleItemClick(item)}
                sx={{
                  flex: "0 0 auto",
                  width: 150,
                  scrollSnapAlign: "start",
                  cursor: "pointer",
                  textAlign: "center",
                  borderRadius: 3,
                  p: 1.5,
                  bgcolor: "rgba(255,255,255,0.65)",
                  boxShadow: "0 8px 22px rgba(0,0,0,0.10)",
                  transition: "transform 0.25s ease",
                  "&:active": { transform: "scale(0.98)" },
                }}
              >
                <Box
                  sx={{
                    width: 112,
                    height: 112,
                    borderRadius: "50%",
                    overflow: "hidden",
                    mx: "auto",
                    mb: 1.5,
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    boxShadow: "0 8px 18px rgba(0,0,0,0.14)",
                    filter: "grayscale(15%)",
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    fontSize: "0.85rem",
                    lineHeight: 1.3,
                    minHeight: 34,
                  }}
                >
                  {t(`items.${item.key}.title`)}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          /* ✅ DESKTOP/TABLET: Normal grid (size yerine standart item yapısına çevrildi) */
          <Grid container spacing={6} justifyContent="center">
            {corporateItems.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id} sx={{ textAlign: "center" }}>
                <Box
                  onClick={() => handleItemClick(item)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
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
                    sx={{
                      fontWeight: 600,
                      color: "primary.main",
                      fontSize: "0.95rem",
                    }}
                  >
                    {t(`items.${item.key}.title`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Modal */}
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
            <Box sx={{ p: 3, borderBottom: `1px solid ${theme.palette.divider}` }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: "primary.main" }}>
                  {t(`items.${selectedItem.key}.title`)}
                </Typography>

                <IconButton
                  onClick={handleCloseModal}
                  sx={{ color: "text.secondary", "&:hover": { bgcolor: "rgba(0,0,0,0.05)" } }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            <DialogContent sx={{ pt: 4, pb: 4, px: { xs: 3, md: 4 } }}>
              <Typography component="div" sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1rem" }}>
                {t(`items.${selectedItem.key}.details`)}
              </Typography>
            </DialogContent>

            <DialogActions
              sx={{
                p: 2.5,
                px: { xs: 3, md: 4 },
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