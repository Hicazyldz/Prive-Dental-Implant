"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TurkeyProvincesMap from "./TurkeyProvincesMap";
import { useTranslations, useLocale } from "next-intl";

export default function DealersSection() {
  const t = useTranslations("dealers");
  const locale = useLocale();

  // ✅ TR değilse Türkiye haritası hiç görünmesin
  const showTurkeyMap = locale === "tr";

  const dealersData = t.raw("data"); // { "Ankara": { dealer: "..."} , ... }
  const activeProvinces = Object.keys(dealersData);

  return (
    <Box component="section" id="dealers" aria-labelledby="dealers-title" sx={{ bgcolor: "background.brandMain" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography
          id="dealers-title"
          component="h2"
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
            color: "text.onBrandMain",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          {t("title")}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "text.onBrandMain",
            maxWidth: "800px",
            mx: "auto",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            px: { xs: 2, sm: 0 },
          }}
        >
          {t("description")}
        </Typography>

        {showTurkeyMap && (
          <Box sx={{ p: { xs: 0, md: 5 }, textAlign: "center", bgcolor: "transparent" }}>
            <TurkeyProvincesMap activeProvinces={activeProvinces} dealers={dealersData} />
          </Box>
        )}
      </Container>
    </Box>
  );
}
