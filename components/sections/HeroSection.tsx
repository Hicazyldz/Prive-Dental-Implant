"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Sadece 2 fotoğraflı slider
const heroSlides = [
  {
    id: 1,
    image: "/hero/hero1.png",
  },
  {
    id: 2,
    image: "/hero/hero2.png",
  },
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 80px)", // Navbar yüksekliğini çıkar (navbar genelde 64-80px)
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "#EAEAEA",
      }}
    >
      {/* Slider Fotoğrafları */}
      {heroSlides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Sol Ok */}
      <IconButton
        onClick={handlePrevSlide}
        sx={{
          position: "absolute",
          left: { xs: 16, md: 40 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          bgcolor: "rgba(37, 85, 142, 0.8)",
          color: "white",
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            bgcolor: "rgba(37, 85, 142, 1)",
            transform: "translateY(-50%) scale(1.1)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <KeyboardArrowLeftIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
      </IconButton>

      {/* Sağ Ok */}
      <IconButton
        onClick={handleNextSlide}
        sx={{
          position: "absolute",
          right: { xs: 16, md: 40 },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          bgcolor: "rgba(37, 85, 142, 0.8)",
          color: "white",
          width: { xs: 48, md: 56 },
          height: { xs: 48, md: 56 },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            bgcolor: "rgba(37, 85, 142, 1)",
            transform: "translateY(-50%) scale(1.1)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <KeyboardArrowRightIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
      </IconButton>

      {/* Alt Nokta Navigasyonu */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 24, md: 40 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
          zIndex: 10,
          bgcolor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          borderRadius: "50px",
          padding: "8px 16px",
        }}
      >
        {heroSlides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: currentSlide === index ? 40 : 12,
              height: 12,
              borderRadius: "6px",
              bgcolor: currentSlide === index ? "#7CBFEA" : "rgba(255, 255, 255, 0.6)",
              cursor: "pointer",
              transition: "all 0.4s ease",
              boxShadow: currentSlide === index ? "0 0 12px rgba(124, 191, 234, 0.8)" : "none",
              "&:hover": {
                bgcolor: currentSlide === index ? "#7CBFEA" : "rgba(255, 255, 255, 0.9)",
                transform: "scale(1.15)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}