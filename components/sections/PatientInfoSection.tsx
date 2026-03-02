"use client";

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslations } from "next-intl";

// Sadece ID ve JSON'daki anahtarları tutuyoruz
const FAQ_KEYS = [
  { id: 1, key: "whatIs" },
  { id: 2, key: "toWhom" },
  { id: 3, key: "doctorDiagnosis" },
  { id: 4, key: "isHarmful" },
  { id: 5, key: "lifeSpan" },
];

export default function PatientInfoSection() {
  const t = useTranslations("patientInfo");

  // Dinamik içerik oluşturucu
  const renderAnswer = (key: string) => {
    // JSON'daki objeyi ham (raw) olarak alıyoruz
    const item = t.raw(`items.${key}`);

    return (
      <>
        {/* Düz metin cevabı varsa bas */}
        {item.answer && (
          <Typography sx={{ lineHeight: 1.8, whiteSpace: "pre-line" }}>
            {item.answer}
          </Typography>
        )}

        {/* Eğer bir liste yapısı varsa (text + list) bas */}
        {item.text && (
          <Typography sx={{ lineHeight: 1.8, mb: 1.5 }}>
            {item.text}
          </Typography>
        )}

        {item.list && (
          <Box
            component="ul"
            sx={{
              pl: 3,
              mt: 1.5,
              mb: 1.5,
              "& li": { mb: 0.75, lineHeight: 1.7 }
            }}
          >
            {item.list.map((line: string, idx: number) => (
              <li key={idx}>{line}</li>
            ))}
          </Box>
        )}

        {/* Liste içeren maddelerde uyarı metnini göster */}
        {item.list && (
          <Typography sx={{ lineHeight: 1.8, mt: 1.5, fontWeight: 500 }}>
            {t("warning")}
          </Typography>
        )}
      </>
    );
  };

  return (
    <Box
      component="section"
      id="hasta-bilgilendirme"
      sx={{
        py: { xs: 5, md: 5 },
        backgroundColor: "background.brandMain",
      }}
    >
      <Container maxWidth="md">
        {/* Başlık Bölümü */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.8rem" },
              mb: 2,
              color: "text.onBrandMain",
            }}
          >
            {t("title")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.onBrandMain",
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            {t("description")}
          </Typography>
        </Box>

        {/* FAQ Akordeon Yapısı */}
        <Box sx={{ "& .MuiAccordion-root": { mb: 2 } }}>
          {FAQ_KEYS.map((item, index) => (
            <Accordion
              key={item.id}
              defaultExpanded={index === 0}
              sx={{
                backgroundColor: "background.brandSoft",
                color: "text.onBrandSoft",
                borderRadius: "8px !important",
                "&:before": { display: "none" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ minHeight: 64 }}
              >
                <Typography sx={{ fontWeight: 600 }}>
                  {t(`items.${item.key}.question`)}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  pt: 0,
                  pb: 3,
                  px: 3,
                  color: "text.onBrandLight",
                }}
              >
                {renderAnswer(item.key)}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}