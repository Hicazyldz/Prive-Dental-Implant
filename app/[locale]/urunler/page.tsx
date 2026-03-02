"use client";

import { useEffect } from "react";
// Grid yerine Grid2 import ediyoruz
import { Box, Container, Typography, Grid as Grid } from "@mui/material"; 
import Navbar from "../../../components/layout/Navbar"; 

export default function UrunlerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
//SAsaas
  return (
    <Box component="main" sx={{ bgcolor: "background.paper", minHeight: "0vh" }}>
      

      {/* 1. BANNER (5.png) */}
      <Box sx={{ width: "100%" }}>
        <Box
          component="img"
          src="/urunsayfasi/5..png"
          alt="Prive Dental Banner"
          sx={{ width: "100%", height: "50vh", display: "block" }}
        />
      </Box>

      {/* 2. TEMEL ÖZELLİKLER LİSTESİ */}
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
            // Grid2'de 'item' prop'u yerine sadece 'size' kullanılır
            <Grid key={index} size={12}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <Box sx={{ minWidth: "28px", height: "28px", borderRadius: "50%", bgcolor: "info.main", display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>✓</Box>
                <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: 500 }}>{item}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. ZIGZAG İÇERİK AKIŞI */}
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        
        {/* Satır 1: 68.png (Sol) - Yazı (Sağ) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/68..png" sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>SOĞUK KAYNAK</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, abutment ile arasında oluşturduğu kusursuz soğuk kaynak bağlantısı sayesinde mikro hareketleri tamamen ortadan kaldırır ve vida gevşemesi riskini minimuma indirir.
              Bu sızdırmaz yapı, bakteri sızıntılarını (mikrobiyal sızıntı) engelleyerek implant çevresi enfeksiyon (peri-implantitis) riskini düşürür ve implantımızın ağızda yıllarca sağlıklı kalmasını sağlar. 
             
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 2: Yazı (Sol) - 66.png (Sağ) */}
        {/* Grid2'de sıralama kontrolü yine Container üzerinden yapılır */}
        <Grid container spacing={8} alignItems="center" direction={{ xs: "column-reverse", md: "row" }} sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>TEK PLATFORM</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, farklı çap seçeneklerine sahip olmasına rağmen tek bir protetik bağlantı platformu sunarak kliniklerdeki stok yönetimini büyük ölçüde kolaylaştırır.
             Ölçü alımı ve protez aşamalarında parça karmaşasını ortadan kaldıran bu akıllı tasarım, hekimlerimize zaman kazandırırken hata payını da sıfıra indirir
          
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/66..png" sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

        {/* Satır 3: 58.png (Sol) - Yazı (Sağ) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/58..png" sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>AGRESİF YİV DİZAYN</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              İmplantımız, özel olarak geliştirilmiş agresif yiv dizaynı sayesinde en yumuşak kemik tiplerinde bile olağanüstü bir ilk tutunma (primer stabilite) gücü sağlar.
             Kemik kesme ve yönlendirme yeteneği yüksek olan bu yapı, anında yükleme (immediate loading) ve çekim sonrası anında implantasyon prosedürlerini çok daha güvenilir hale getirir.
        
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 4: Yazı (Sol) - 59.png (Sağ) */}
        <Grid container spacing={8} alignItems="center" direction={{ xs: "column-reverse", md: "row" }} sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>SLA CLEAN YÜZEY TEKNOLOJİSİ</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
             İmplantımız, "SLA Clean" yüzey teknolojisi ile kalabilecek tüm mikro partikülleri arındırarak kusursuz bir biyouyumluluk (biocompatibility) sunar.
             Yüksek saflıktaki bu yüzey, hücrelerin implanta çok daha hızlı tutunmasını sağlayarak kemiğe kaynama (osseointegrasyon) sürecini hızlandırır ve iyileşme süresini güvenle kısaltır. 
             
              </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/59..png" sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>

        {/* Satır 5: 62.png (Sol) - Yazı (Sağ) */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/62..png" sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>MADE IN GERMANY</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              prive Implant represents the gold standard of the industry as it is made in Germany. We consistently maintain the highest standards of quality and hygiene for our dentists and patients.
            </Typography>
          </Grid>
        </Grid>

        {/* Satır 6: Yazı (Sol) - 57.png (Sağ) */}
        <Grid container spacing={8} alignItems="center" direction={{ xs: "column-reverse", md: "row" }} sx={{ mb: 15 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, color: "#1e40af" }}>CERRAHİ SETİMİZ</Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
             Cerrahi setimiz, operasyon sırasında hekimlerimize maksimum pratiklik ve zaman tasarrufu sağlamak üzere tamamen sezgisel (kullanıcı dostu) ve ergonomik bir yaklaşımla tasarlanmıştır.
 Tüm sterilizasyon koşullarına yüksek dayanıklılık gösteren kompakt yapısı, parça karmaşasını ortadan kaldırarak implantımızın yerleştirilme sürecini başından sonuna kadar kusursuz bir akıcılıkla destekler.         

           </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src="/urunsayfasi/57..png" sx={{ width: "100%", borderRadius: "24px", boxShadow: 4 }} />
          </Grid>
        </Grid>
      </Container>

      {/* 4. ÇAP VE UZUNLUK (Teknik Tablo Görseli) */}
      {/* 4. ÇAP VE UZUNLUK SEÇENEKLERİ */}
<Container maxWidth="lg" sx={{ pb: 15, textAlign: 'center' }}>
  
  {/* Çap Başlığı */}
  <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af", mb: 6 }}>
    ÇAP SINIFLANDIRMASI
  </Typography>
  
  {/* Çap Tablosu - mb: 12 ekleyerek bir sonraki başlıkla arasını açtık */}
  <Box 
    component="img" 
    src="/urunsayfasi/5.png" 
    alt="Çap Seçenekleri Tablosu" 
    sx={{ width: "100%", borderRadius: "24px", boxShadow: 2, mb: 12 }} 
  />

  {/* Uzunluk Başlığı - mt: 10 ekleyerek yukarıdaki tablodan iyice uzaklaştırdık */}
  <Typography variant="h4" sx={{ fontWeight: 800, color: "#1e40af", mb: 6, mt: 10 }}>
    UZUNLUK SINIFLANDIRMASI
  </Typography>
  
  {/* Uzunluk Tablosu */}
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