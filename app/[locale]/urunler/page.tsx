"use client";
import { useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function UrunlerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box component="main" sx={{ bgcolor: "background.paper", minHeight: "0vh" }}>

      {/* 1. BANNER */}
      <Box sx={{ width: "100%" }}>
        <Box
          component="img"
          src="/urunsayfasi/5..png"
          alt="Prive Dental Banner"
          sx={{ width: "100%", height: "50vh", display: "block", objectFit: "cover" }}
        />
      </Box>

      {/* 2. TEMEL ÖZELLİKLER */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: "#1e40af", mb: 6, textAlign: "center" }}>
          TEMEL ÖZELLİKLER
        </Typography>
        <Grid container spacing={3}>
          {[
            "Bakteri sızıntılarına karşı kusursuz bir bariyer oluşturan soğuk kaynak bağlantısı sayesinde uzun ömürlü ve sağlıklı tedaviler sunar.",
            "Yenilikçi platform switch özelliği ile kemik seviyesini korur, diş eti uyumunu en üst düzeye çıkararak doğal bir görünüm elde edilmesini sağlar.",
            "Tüm çaplar için tek bir protetik bağlantı sunan akıllı tasarımıyla hekimlerimize zaman kazandırır ve restorasyon süreçlerini pratikleştirir.",
            "Kemikle mükemmel bir bütünleşme ve ilk tutunmada (primer stabilite) maksimum güç için özel olarak geliştirilmiş agresif yiv yapısına sahiptir.",
            "İmplant yüzeyindeki kalıntıları sıfıra indiren ultra saf 'SLA Clean' yüzey teknolojisi ile hızlı osseointegrasyon sağlar."
          ].map((item, index) => (
            <Grid key={index} size={{ xs: 12 }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Box sx={{
                  minWidth: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  bgcolor: "info.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  flexShrink: 0
                }}>✓</Box>
                <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 500 }}>
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. ZIGZAG İÇERİK */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>

        {/* Satır 1: Görsel Sol - Yazı Sağ */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/68..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              SOĞUK KAYNAK
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, abutment ile arasında oluşturduğu kusursuz soğuk kaynak bağlantısı sayesinde mikro hareketleri
              tamamen ortadan kaldırır ve vida gevşemesi riskini minimuma indirir. Bu sızdırmaz yapı, bakteri sızıntılarını
              engelleyerek implant çevresi enfeksiyon riskini düşürür ve implantımızın ağızda yıllarca sağlıklı kalmasını sağlar.
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 2: Yazı Sol - Görsel Sağ (mobilde görsel önce) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              TEK PLATFORM
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, farklı çap seçeneklerine sahip olmasına rağmen tek bir protetik bağlantı platformu sunarak
              kliniklerdeki stok yönetimini büyük ölçüde kolaylaştırır. Ölçü alımı ve protez aşamalarında parça karmaşasını
              ortadan kaldıran bu akıllı tasarım, hekimlerimize zaman kazandırırken hata payını da sıfıra indirir.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="img" src="/urunsayfasi/66..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

        {/* Satır 3: Görsel Sol - Yazı Sağ */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/58..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              AGRESİF YİV DİZAYN
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, özel olarak geliştirilmiş agresif yiv dizaynı sayesinde en yumuşak kemik tiplerinde bile
              olağanüstü bir ilk tutunma (primer stabilite) gücü sağlar. Kemik kesme ve yönlendirme yeteneği yüksek olan
              bu yapı, anında yükleme ve çekim sonrası anında implantasyon prosedürlerini çok daha güvenilir hale getirir.
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 4: Yazı Sol - Görsel Sağ (mobilde görsel önce) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              SLA CLEAN YÜZEY TEKNOLOJİSİ
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, "SLA Clean" yüzey teknolojisi ile kalabilecek tüm mikro partikülleri arındırarak kusursuz bir
              biyouyumluluk sunar. Yüksek saflıktaki bu yüzey, hücrelerin implanta çok daha hızlı tutunmasını sağlayarak
              osseointegrasyon sürecini hızlandırır ve iyileşme süresini güvenle kısaltır.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="img" src="/urunsayfasi/59..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

        {/* Satır 5: Görsel Sol - Yazı Sağ */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/62..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              MADE IN GERMANY
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Prive Implant represents the gold standard of the industry as it is made in Germany.
              We consistently maintain the highest standards of quality and hygiene for our dentists and patients.
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 6: Yazı Sol - Görsel Sağ (mobilde görsel önce) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>
              CERRAHİ SETİMİZ
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              Cerrahi setimiz, operasyon sırasında hekimlerimize maksimum pratiklik ve zaman tasarrufu sağlamak üzere
              tamamen sezgisel ve ergonomik bir yaklaşımla tasarlanmıştır. Tüm sterilizasyon koşullarına yüksek dayanıklılık
              gösteren kompakt yapısı, parça karmaşasını ortadan kaldırarak implantımızın yerleştirilme sürecini
              başından sonuna kadar kusursuz bir akıcılıkla destekler.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box component="img" src="/urunsayfasi/57..png"
              sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

      </Container>

      {/* 4. ÇAP VE UZUNLUK */}
      <Container maxWidth="lg" sx={{ pb: 15, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af", mb: 6 }}>
          ÇAP SINIFLANDIRMASI
        </Typography>
        <Box
          component="img"
          src="/urunsayfasi/5.png"
          alt="Çap Seçenekleri Tablosu"
          sx={{ width: "100%", borderRadius: "24px", boxShadow: 2, mb: 12 }}
        />

        <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af", mb: 6, mt: 10 }}>
          UZUNLUK SINIFLANDIRMASI
        </Typography>
        <Box
          component="img"
          src="/urunsayfasi/6.png"
          alt="Uzunluk Seçenekleri Tablosu"
          sx={{ width: "100%", borderRadius: "24px", boxShadow: 2 }}
        />
      </Container>

    </Box>
  );
}