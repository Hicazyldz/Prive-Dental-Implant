"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { useTranslations } from "next-intl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { keyframes } from "@mui/system";

const products = [
  { id: 1, key: "t6Standard", image: "/product1.png", badge: "Premium" },
  { id: 2, key: "t6Torq", image: "/product2.png", badge: "Advanced" },
  { id: 3, key: "slimex", image: "/product3.png", badge: "Innovative" }
] as const;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export default function ProductsSection() {
  const tProducts = useTranslations("products");

  return (
    <Box
      id="products"
      sx={{
        bgcolor: "background.dark",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Our Products"
            sx={{
              mb: 2,
              bgcolor: "rgba(239, 68, 68, 0.2)",
              color: "primary.light",
              fontWeight: 600,
              fontSize: "0.875rem",
              px: 2,
              animation: `${fadeInUp} 0.6s ease-out`
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.75rem" },
              animation: `${fadeInUp} 0.6s ease-out 0.1s backwards`
            }}
          >
            {tProducts("title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              mx: "auto",
              animation: `${fadeInUp} 0.6s ease-out 0.2s backwards`
            }}
          >
            Discover our range of premium dental implant solutions
          </Typography>
        </Box>

        {/* Products Grid */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 6, md: 10 } }}>
          {products.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <Grid
                key={item.id}
                container
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                sx={{
                  animation: `${fadeInUp} 0.8s ease-out ${0.3 + index * 0.2}s backwards`
                }}
              >
                {/* Image */}
                <Grid size={{ xs: 12, md: 6 }}
                  sx={{
                    order: { xs: 1, md: isEven ? 1 : 2 }
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      "&:hover": {
                        "& .product-image": {
                          transform: "scale(1.05)",
                          boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                        },
                        "& .product-badge": {
                          transform: "translateY(-5px)"
                        }
                      }
                    }}
                  >
                    <Paper
                      className="product-image"
                      elevation={0}
                      sx={{
                        position: "relative",
                        borderRadius: "24px",
                        overflow: "hidden",
                        aspectRatio: "4/5",
                        bgcolor: "background.paper",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={tProducts(`items.${item.key}.title`)}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover"
                        }}
                      />
                      
                      {/* Badge */}
                      <Chip
                        className="product-badge"
                        label={item.badge}
                        sx={{
                          position: "absolute",
                          top: 20,
                          right: 20,
                          bgcolor: "primary.main",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          px: 2,
                          py: 2.5,
                          boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)",
                          transition: "transform 0.3s ease"
                        }}
                      />
                    </Paper>
                  </Box>
                </Grid>

                {/* Content */}
                <Grid size={{ xs: 12, md: 6 }} 
                  sx={{
                    order: { xs: 2, md: isEven ? 2 : 1 }
                  }}
                >
                  <Box
                    sx={{
                      pl: { xs: 0, md: isEven ? 4 : 0 },
                      pr: { xs: 0, md: isEven ? 0 : 4 }
                    }}
                  >
                    {/* Product Number */}
                    <Typography
                      sx={{
                        fontSize: "5rem",
                        fontWeight: 900,
                        color: "secondary.main",
                        lineHeight: 0.8,
                        mb: 2,
                        opacity: 0.3
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        color: "white",
                        mb: 3,
                        fontSize: { xs: "1.75rem", md: "2.25rem" }
                      }}
                    >
                      {tProducts(`items.${item.key}.title`)}
                    </Typography>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "1.125rem",
                        lineHeight: 1.8,
                        mb: 4
                      }}
                    >
                      {tProducts(`items.${item.key}.desc`)}
                    </Typography>

                    {/* Features */}
                    <Box sx={{ mb: 4 }}>
                      {["High Quality", "Long Lasting", "Easy Installation"].map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            mb: 1.5
                          }}
                        >
                          <CheckCircleOutlineIcon
                            sx={{
                              color: "primary.main",
                              fontSize: "1.5rem"
                            }}
                          />
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.9)",
                              fontSize: "1rem",
                              fontWeight: 500
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* CTA Button */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Button
                        component="a"
                        href="#contact"
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          px: 4,
                          py: 1.5,
                          fontSize: "1rem",
                          fontWeight: 600,
                          borderRadius: "50px",
                          textTransform: "none",
                          boxShadow: "0 8px 16px rgba(239, 68, 68, 0.3)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "primary.dark",
                            transform: "translateY(-2px)",
                            boxShadow: "0 12px 24px rgba(239, 68, 68, 0.4)"
                          }
                        }}
                      >
                        {tProducts("btnDetail")}
                      </Button>

                      <Button
                        component="a"
                        href="#contact"
                        variant="outlined"
                        sx={{
                          color: "text.primary",
                          borderColor: "divider",
                          borderWidth: "2px",
                          px: 4,
                          py: 1.5,
                          fontSize: "1rem",
                          fontWeight: 600,
                          borderRadius: "50px",
                          textTransform: "none",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "primary.main",
                            borderWidth: "2px",
                            color: "primary.main",
                            transform: "translateY(-2px)"
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}