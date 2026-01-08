"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const heroSlides = [
  { id: 1, image: "/hero/1.png" },
  { id: 2, image: "/hero/2.png" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Otomatik slider - 5 saniyede bir değişir
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Manuel slider kontrolleri
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        width: "100%",

        // ✅ Mobilde daha kısa, desktop'ta full'e yakın
        height: { xs: "48dvh", md: "calc(100vh - 80px)" },

        // ✅ minHeight mobilde yüksek olursa hero asla küçülmez (sendeki ana bug buydu)
        minHeight: { xs: 340, md: 600 },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Slider Fotoğrafları */}
      {heroSlides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",

            // ✅ Mobilde kadrajı biraz aşağı/yukarı ayarlayarak dev yazı kesilmeyi azaltır
            // 0% = top, 50% = center, 100% = bottom
            backgroundPosition: { xs: "center 35%", md: "center" },

            backgroundRepeat: "no-repeat",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 0,

            // ✅ Hafif overlay (opsiyonel ama okunabilirlik + premium his)
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.25))",
            },
          }}
        />
      ))}

      {/* Sol Ok */}
      <IconButton
        onClick={handlePrevSlide}
        sx={{
          position: "absolute",
          zIndex: 10,

          // ✅ Mobilde okları gizlemek daha temiz (swipe yoksa bile dots yeterli)
          display: { xs: "none", md: "flex" },

          left: { md: 40 },
          top: "50%",
          transform: "translateY(-50%)",

          bgcolor: "rgba(37, 85, 142, 0.8)",
          color: "white",
          width: 56,
          height: 56,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            bgcolor: "rgba(37, 85, 142, 1)",
            transform: "translateY(-50%) scale(1.08)",
          },
          transition: "all 0.25s ease",
        }}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: 32 }} />
      </IconButton>

      {/* Sağ Ok */}
      <IconButton
        onClick={handleNextSlide}
        sx={{
          position: "absolute",
          zIndex: 10,

          // ✅ Mobilde okları gizlemek daha temiz
          display: { xs: "none", md: "flex" },

          right: { md: 40 },
          top: "50%",
          transform: "translateY(-50%)",

          bgcolor: "rgba(37, 85, 142, 0.8)",
          color: "white",
          width: 56,
          height: 56,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            bgcolor: "rgba(37, 85, 142, 1)",
            transform: "translateY(-50%) scale(1.08)",
          },
          transition: "all 0.25s ease",
        }}
      >
        <KeyboardArrowRightIcon sx={{ fontSize: 32 }} />
      </IconButton>

      {/* Alt Nokta Navigasyonu */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 14, md: 40 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: { xs: 1, md: 2 },
          zIndex: 10,
          bgcolor: "rgba(0, 0, 0, 0.28)",
          backdropFilter: "blur(10px)",
          borderRadius: "50px",
          padding: { xs: "6px 10px", md: "8px 16px" },
        }}
      >
        {heroSlides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: currentSlide === index ? { xs: 24, md: 40 } : { xs: 10, md: 12 },
              height: { xs: 10, md: 12 },
              borderRadius: "6px",
              bgcolor:
                currentSlide === index ? "#7CBFEA" : "rgba(255, 255, 255, 0.6)",
              cursor: "pointer",
              transition: "all 0.35s ease",
              boxShadow:
                currentSlide === index
                  ? "0 0 10px rgba(124, 191, 234, 0.75)"
                  : "none",
              "&:hover": {
                bgcolor:
                  currentSlide === index
                    ? "#7CBFEA"
                    : "rgba(255, 255, 255, 0.9)",
                transform: { xs: "none", md: "scale(1.12)" },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
