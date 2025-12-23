"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { useTranslations } from "next-intl";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

export default function ContactSection() {
  const theme = useTheme();
  const t = useTranslations("contact");

  return (
    <Box
    id="contact"
  sx={{
    bgcolor: "#2a2a2a",
    py: { xs: 8, md: 12 },
    width: "100%"}}>
    <Container >
      <Grid container spacing={6}>
        {/* Sol taraf: iletişim bilgileri */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            variant="h4"
            sx={{ color: "primary.main", fontWeight: "bold", letterSpacing: "0.1em", mb: 2, display: "block" }}
          >
            {t("subtitle")}
          </Typography>

          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 4, trackingTight: "-0.02em", color: "white" }}
          >
            {t("title")}
          </Typography>

          <Typography variant="body1" sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 6 }}>
            {t("description")}
          </Typography>

          <Box className="flex flex-col gap-4">
            <Box className="flex items-center gap-3">
              <PhoneIcon sx={{ color: "primary.main" }} />
              <Typography variant="body2" sx={{ color: "white" }}>
                {t("phone")}: <span className="font-medium">+90 5XX XXX XX XX</span>
              </Typography>
            </Box>

            <Box className="flex items-center gap-3">
              <WhatsAppIcon sx={{ color: "success.main" }} />
              <Typography variant="body2" sx={{ color: "white" }}>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: theme.palette.primary.main, textDecoration: "underline" }}
                >
                  {t("whatsapp")}
                </a>
              </Typography>
            </Box>

            <Box className="flex items-center gap-3">
              <MailIcon sx={{ color: "primary.main" }} />
              <Typography variant="body2" sx={{ color: "white" }}>
                {t("email")}: <span className="font-medium">info@firmaadi.com</span>
              </Typography>
            </Box>

            <Box className="flex items-start gap-3">
              <LocationOnIcon sx={{ color: "primary.main", mt: 0.5 }} />
              <Typography variant="body2" sx={{ color: "white" }}>
                {t("address")}: <span className="font-medium">{t("addressDetail")}</span>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Sağ taraf: form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            sx={{ borderRadius: "16px", p: { xs: 3, md: 4 }, bgcolor: "background.paper" }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              {t("formTitle")}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 4 }}>
              {t("formDesc")}
            </Typography>

            <Box component="form" className="flex flex-col gap-4">
              <TextField
                label={t("labels.name")}
                size="small"
                fullWidth
              />
              <TextField
                label={t("labels.company")}
                size="small"
                fullWidth
              />
              <TextField
                label={t("labels.email")}
                size="small"
                type="email"
                fullWidth
              />
              <TextField
                label={t("labels.message")}
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
                  {t("labels.button")}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}