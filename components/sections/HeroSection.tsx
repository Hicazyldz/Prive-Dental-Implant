"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTranslations } from "next-intl";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { keyframes } from "@mui/system";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(211,47,47,0.3) 100%)",
          zIndex: 1
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.2) 0%, transparent 50%)",
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, py: { xs: 8, md: 0 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                animation: `${fadeInUp} 1s ease-out`
              }}
            >
              {/* Subtitle Badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2.5,
                  py: 1,
                  mb: 3,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  animation: `${fadeInUp} 1s ease-out 0.2s backwards`
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: "#d32f2f",
                    animation: `${bounce} 2s infinite`
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    letterSpacing: "0.5px"
                  }}
                >
                  Premium Dental Implants
                </Typography>
              </Box>

              {/* Main Title */}
              <Typography
                variant="h1"
                sx={{
                  color: "white",
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  animation: `${fadeInUp} 1s ease-out 0.3s backwards`,
                  background: "linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)"
                }}
              >
                {t("titleLine1")}
                <br />
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #d32f2f 0%, #ff6659 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block"
                  }}
                >
                  {t("titleLine2")}
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: "600px",
                  animation: `${fadeInUp} 1s ease-out 0.4s backwards`
                }}
              >
                {t("description")}
              </Typography>

              {/* CTA Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  animation: `${fadeInUp} 1s ease-out 0.5s backwards`
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#kurumsal"
                  sx={{
                    bgcolor: "#d32f2f",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    textTransform: "none",
                    boxShadow: "0 8px 24px rgba(211, 47, 47, 0.4)",
                    background: "linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 28px rgba(211, 47, 47, 0.5)",
                      background: "linear-gradient(135deg, #e53935 0%, #d32f2f 100%)"
                    }
                  }}
                >
                  {t("ctaCorporate")}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#products"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    borderWidth: "2px",
                    textTransform: "none",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "white",
                      background: "rgba(255, 255, 255, 0.15)",
                      transform: "translateY(-2px)",
                      borderWidth: "2px"
                    }
                  }}
                >
                  {t("ctaProducts")}
                </Button>
              </Box>

              {/* Stats
              <Grid container spacing={3} sx={{ mt: 6 }}>
                {[
                  { number: "15+", label: "Years Experience" },
                  { number: "50K+", label: "Happy Patients" },
                  { number: "100%", label: "Quality Assured" }
                ].map((stat, index) => (
                  <Grid size={{ xs: 4 }} key={index}>
                    <Box
                      sx={{
                        animation: `${fadeInUp} 1s ease-out ${0.6 + index * 0.1}s backwards`
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: { xs: "1.5rem", md: "2rem" },
                          fontWeight: 800
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: { xs: "0.75rem", md: "0.875rem" },
                          fontWeight: 500
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid> */}
            </Box>
          </Grid>

        
        </Grid>
      </Container>

     
    </Box>
  );
}