"use client";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useTranslations } from "next-intl";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { keyframes } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const products = [
  { id: 1, key: "prive_info", image: "/info/prive_info.png", isCatalog: false },
 
  { id: 3, key: "catalog", image: "/info/catalog.png", isCatalog: true } 
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
  const theme = useTheme();

  return (
  
    <Box
      id="products"
      sx={{
        bgcolor: "background.brandMain",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
        color: "text.onBrandMain",
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
            {tProducts("description")}
          </Typography>
        </Box>

        {/* Products Grid */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 6, md: 10 } }}>
          {products.map((item, index) => {
            const isEven = index % 2 === 0;
            const isFirstProduct = index === 0; // İlk ürün kontrolü
            const isCatalog = item.isCatalog; // Katalog kontrolü

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

                    {/* Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                      color: "text.onBrandMain",
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

                    {/* Features - Sadece ilk ürün için göster */}
                    {isFirstProduct && (
                      <Box sx={{ mb: 4 }}>
                        {tProducts("items.properties").split("\n").map((feature, idx) => (
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
                                color: "secondary.main",
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
                    )}

                    {/* CTA Buttons - Katalog için özel buton */}
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      {isCatalog ? (
                        // Katalog için PDF butonu
                        <Button
                          component="a"
                          href="https://forevermedikal.com/uploads/pdfs/68f6032c6b777_PRIVEENG.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="contained"
                          endIcon={<PictureAsPdfIcon />}
                          sx={{
                            bgcolor: "primary.dark",
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 600,
                            borderRadius: "50px",
                            textTransform: "none",
                            boxShadow: "0 8px 16px rgba(37, 85, 142, 0.4)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              color: "text.onBrandLight",
                              bgcolor: "background.brandLight",
                              transform: "translateY(-2px)",
                              boxShadow: "0 12px 24px rgba(37, 85, 142, 0.5)"
                            }
                          }}
                        >
                          {tProducts("btnViewCatalog")}
                        </Button>
                      ) : (
                        // Diğer ürünler için normal buton
                        <Button
                          component="a"
                          href="/urunler"
                          variant="contained"
                          endIcon={<ArrowForwardIcon />}
                          sx={{ 
                            bgcolor: "primary.dark",
                            color: "text.onBrandMain",
                            px: 4,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 600,
                            borderRadius: "50px",
                            textTransform: "none",
                            boxShadow: "0 8px 16px rgba(37, 85, 142, 0.4)",
                            transition: "all 0.3s ease",
                            "&:hover": { 
                              color: "text.onBrandLight",
                              bgcolor: "background.brandLight",
                              transform: "translateY(-2px)",
                              boxShadow: "0 12px 24px rgba(37, 85, 142, 0.5)"
                            }
                          }}
                        >
                          {tProducts("btnDetail")}
                        </Button>
                      )}
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