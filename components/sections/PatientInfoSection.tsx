// components/sections/PatientInfoSection.tsx
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

// ==================== TİP TANIMLARI ====================
interface FAQItem {
  id: number;
  question: string;
  answer: string | { text: string; list?: string[] };
}

// ==================== YAPILANDIRMA ====================
const SECTION_CONTENT = {
  title: "Hasta Bilgilendirme",
  description: "Dental implant tedavisi hakkında merak edilen temel sorular ve bilgilendirici yanıtlar."
} as const;

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: "İmplant nedir?",
    answer: "Dental implant, genellikle insan biyolojisi ile uyumlu titanyum malzemeden üretilen ve diş kökü yerine çene kemiğine yerleştirilen yapay köklerdir. Her türlü diş kaybının tedavisinde kullanılır. Kemik içine yerleştirilen implant kemik ile kaynadıktan sonra, porselen dişler implant üzerine vida ya da yapıştırma yöntemi ile bağlanır."
  },
  {
    id: 2,
    question: "Kimlere uygulanır?",
    answer: "Genel sağlık durumu iyi olan, ergenlik çağını tamamlamış ve hekim tarafından implant tedavisine uygun bulunan her bireye dental implant uygulanabilir."
  },
  {
    id: 3,
    question: "Hangi durumlarda implant tedavisi hekim teşhisine bağlıdır?",
    answer: {
      text: "Aşağıdaki durumlarda implant tedavisi hekim değerlendirmesine bağlıdır:",
      list: [
        "Kronik şeker hastalarında",
        "Hamilelerde",
        "Kemik gelişimi tamamlanmamış bireylerde",
        "Aşırı sigara tüketimi olan kişilerde",
        "Alkol ve uyuşturucu bağımlılığı olanlarda",
        "Bağışıklık sistemi yetersizliği bulunan hastalarda",
        "Hemofili ve yüksek tansiyon gibi kronik rahatsızlıklarda"
      ]
    }
  },
  {
    id: 4,
    question: "Herhangi bir zararı var mıdır?",
    answer: "Prive Implant ürünleri, insan vücudu ile yüksek biyouyumluluğa sahip saf titanyumdan üretilmektedir. Doğru uygulanmış ve düzenli bakımı yapılmış implantlarda %98'e varan başarı oranları bildirilmektedir.\n\nTüm cerrahi işlemlerde olduğu gibi implant tedavisinde de potansiyel riskler bulunmaktadır. Hekiminiz sizin için en sağlıklı kararı verecektir."
  },
  {
    id: 5,
    question: "İmplantın ömrü ne kadardır?",
    answer: "İmplantlar, doğal dişler gibi kemik ve diş etiyle ilişki içindedir. Düzenli ağız bakımı yapılmadığında diş eti problemleri implant çevresinde de görülebilir.\n\nDoğru ağız hijyeni ve düzenli diş hekimi kontrolleri ile implantlar uzun yıllar sağlıklı şekilde kullanılabilir. Günümüzde 30 yıl önce yapılan implantları halen kullanan hastalar bulunmaktadır."
  }
];

// ==================== YARDIMCI FONKSİYONLAR ====================
const renderAnswer = (answer: FAQItem["answer"]) => {
  // String ise direkt render et
  if (typeof answer === "string") {
    return answer.split("\n").map((paragraph, index) => (
      <Typography 
        key={index} 
        sx={{ 
          lineHeight: 1.8,
          mb: index < answer.split("\n").length - 1 ? 2 : 0
        }}
      >
        {paragraph}
      </Typography>
    ));
  }

  // Liste içeriyorsa
  return (
    <>
      <Typography sx={{ lineHeight: 1.8, mb: 1.5 }}>
        {answer.text}
      </Typography>
      {answer.list && (
        <Box
          component="ul"
          sx={{
            pl: 3,
            mt: 1.5,
            mb: 1.5,
            "& li": {
              mb: 0.75,
              lineHeight: 1.7
            }
          }}
        >
          {answer.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Box>
      )}
      <Typography sx={{ lineHeight: 1.8, mt: 1.5 }}>
        Bu durumlarda implant uygulaması riskli olabilir. Bu nedenle hekiminizin önerisine mutlaka uyunuz.
      </Typography>
    </>
  );
};

// ==================== COMPONENT ====================
export default function PatientInfoSection() {
  return (
    <Box
      component="section"
      id="hasta-bilgilendirme"
      aria-label="Hasta Bilgilendirme"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#2a2a2a",
      }}
    >
      <Container maxWidth="md">
        {/* Başlık */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 6 } }}>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
              mb: 2,
              color: "white"
            }}
          >
            {SECTION_CONTENT.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.8,
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1rem" },
              px: { xs: 2, sm: 0 }
            }}
          >
            {SECTION_CONTENT.description}
          </Typography>
        </Box>

        {/* FAQ Accordionları */}
        <Box sx={{ "& .MuiAccordion-root": { mb: 2 } }}>
          {FAQ_ITEMS.map((item, index) => (
            <Accordion
              key={item.id}
              defaultExpanded={index === 0}
              sx={{
                backgroundColor: "#3a3a3a",
                color: "white",
                borderRadius: "8px !important",
                "&:before": { display: "none" },
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                "&.Mui-expanded": {
                  margin: "0 0 16px 0 !important",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{
                  minHeight: 64,
                  "&.Mui-expanded": {
                    minHeight: 64,
                  },
                  "& .MuiAccordionSummary-content": {
                    my: 1.5,
                  },
                }}
              >
                <Typography 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    pr: 2
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  pt: 0,
                  pb: 3,
                  px: 3,
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: { xs: "0.9rem", md: "0.95rem" }
                }}
              >
                {renderAnswer(item.answer)}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}