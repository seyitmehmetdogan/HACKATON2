"use client";
import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";
import { useCart } from "@/context/CartContext";

const products = [
{
  id: "samsung-galaxy-watch-8",
  name: "Samsung Galaxy Watch 8",
  tagline: "Akıllı Saat",
  price: 8999,
  originalPrice: 10999,
  rating: 4.9,
  reviews: 3120,
  badge: "En Çok Satan",
  image: "/assets/images/shopping__1_-1777058806780.webp",
  imageAlt: "Samsung Galaxy Watch 8 akıllı saat, modern tasarım ve gelişmiş sağlık özellikleri",
  features: ["Kalp Atışı Takibi", "GPS", "Su Geçirmez"],
  accentColor: "#5aacf0",
  accentBg: "rgba(90,172,240,0.08)",
  category: "akilli-saatler"
},
{
  id: "comax-watch-x5",
  name: "Comax Watch X5",
  tagline: "Akıllı Saat",
  price: 2499,
  originalPrice: 3299,
  rating: 4.6,
  reviews: 874,
  badge: "Yeni",
  image: "/assets/images/shopping__2_-1777058806305.webp",
  imageAlt: "Comax Watch X5 akıllı saat, şık tasarım ve uzun pil ömrü",
  features: ["Bildirim Desteği", "Spor Modları", "7 Gün Pil"],
  accentColor: "#2ec4a0",
  accentBg: "rgba(46,196,160,0.08)",
  category: "akilli-saatler"
},
{
  id: "cocuk-bilekligi",
  name: "Çocuk Bilekliği",
  tagline: "Çocuklar İçin Akıllı Bileklik",
  price: 799,
  originalPrice: 1099,
  rating: 4.7,
  reviews: 512,
  badge: "Popüler",
  image: "/assets/images/shopping__3_-1777058806333.webp",
  imageAlt: "Çocuklar için renkli ve dayanıklı akıllı bileklik, adım sayar ve uyku takibi",
  features: ["Adım Sayar", "Uyku Takibi", "Renkli Ekran"],
  accentColor: "#f97316",
  accentBg: "rgba(249,115,22,0.08)",
  category: "akilli-saatler"
},
{
  id: "powerway-wrx01",
  name: "Powerway Wrx01",
  tagline: "90 dB Ses Bombası FM Radyo",
  price: 799,
  originalPrice: 1199,
  rating: 4.6,
  reviews: 1243,
  badge: "Ses Bombası",
  image: "/assets/images/shopping__1_-1777059836320.webp",
  imageAlt: "Powerway Wrx01 kırmızı kablosuz bluetooth hoparlör ses bombası SD kart AUX USB girişli FM radyo",
  features: ["SD Kart", "AUX/USB Giriş", "FM Radyo"],
  accentColor: "#ef4444",
  accentBg: "rgba(239,68,68,0.08)",
  category: "hoparlor"
},
{
  id: "jbl-go-essential",
  name: "JBL Go Essential",
  tagline: "Bluetooth Hoparlör",
  price: 649,
  originalPrice: 899,
  rating: 4.7,
  reviews: 3210,
  badge: "Çok Satılan",
  image: "/assets/images/shopping__2_-1777059835290.webp",
  imageAlt: "JBL Go Essential kompakt bluetooth hoparlör taşınabilir ses cihazı",
  features: ["5h Pil", "IPX5 Su Geçirmez", "Kompakt Tasarım"],
  accentColor: "#2ec4a0",
  accentBg: "rgba(46,196,160,0.08)",
  category: "hoparlor"
},
{
  id: "samsung-galaxy-s23-ultra-watch",
  name: "Samsung Galaxy S23 Ultra Uyumlu Akıllı Saat Konuşma Özellikli Watch 45mm Amoled Ekran",
  tagline: "Akıllı Saat",
  price: 1999,
  originalPrice: 2799,
  rating: 4.8,
  reviews: 2105,
  badge: "Trend",
  image: "/assets/images/shopping__8_-1777063662879.webp",
  imageAlt: "Samsung Galaxy S23 Ultra Uyumlu Akıllı Saat Konuşma Özellikli Watch 45mm Amoled Ekran",
  features: ["Konuşma Özellikli", "45mm AMOLED Ekran", "Samsung Uyumlu"],
  accentColor: "#a78bfa",
  accentBg: "rgba(167,139,250,0.08)",
  category: "akilli-saatler"
},
{
  id: "onvo-ov012-x-plus",
  name: "Onvo OV-012 X Plus",
  tagline: "Güçlü Şehir Scooter\'ı",
  price: 12999,
  originalPrice: 15999,
  rating: 4.9,
  reviews: 312,
  badge: "Yeni",
  image: "/assets/images/shopping__1_-1777059056888.webp",
  imageAlt: "Onvo OV-012 X Plus elektrikli scooter, güçlü motor ve uzun menzil",
  features: ["60km Menzil", "30km/h Hız", "Katlanabilir"],
  accentColor: "#10b981",
  accentBg: "rgba(16,185,129,0.08)",
  category: "scooter"
},
{
  id: "dualtron-man",
  name: "Dualtron Man",
  tagline: "Yüksek Performans",
  price: 24999,
  originalPrice: 29999,
  rating: 4.8,
  reviews: 198,
  badge: "Premium",
  image: "/assets/images/shopping__3_-1777059057601.webp",
  imageAlt: "Dualtron Man elektrikli scooter, çift motorlu yüksek performanslı model",
  features: ["100km Menzil", "50km/h Hız", "Çift Motor"],
  accentColor: "#10b981",
  accentBg: "rgba(16,185,129,0.08)",
  category: "scooter"
},
{
  id: "xiaomi-mi-pro-2",
  name: "Xiaomi Mi Pro 2",
  tagline: "Akıllı Sürüş Deneyimi",
  price: 9499,
  originalPrice: 11999,
  rating: 4.7,
  reviews: 1024,
  badge: "Trend",
  image: "/assets/images/shopping-1777059056912.webp",
  imageAlt: "Xiaomi Mi Pro 2 elektrikli scooter, şık tasarım ve akıllı özellikler",
  features: ["45km Menzil", "25km/h Hız", "App Kontrol"],
  accentColor: "#10b981",
  accentBg: "rgba(16,185,129,0.08)",
  category: "scooter"
},
{
  id: "bood-kickscooter-q500",
  name: "Bood Kickscooter Q500",
  tagline: "Konforlu Şehir Ulaşımı",
  price: 7999,
  originalPrice: 9999,
  rating: 4.6,
  reviews: 456,
  badge: "Popüler",
  image: "/assets/images/shopping__5_-1777059208057.webp",
  imageAlt: "Bood Kickscooter Q500 elektrikli scooter, konforlu ve dayanıklı yapı",
  features: ["50km Menzil", "28km/h Hız", "Geniş Teker"],
  accentColor: "#10b981",
  accentBg: "rgba(16,185,129,0.08)",
  category: "scooter"
},
{
  id: "citymate-65-hoverboard",
  name: "Citymate Bluetooth Hoparlörlü 6.5 Akıllı Dengeli Elektrikli Hoverboard",
  tagline: "Akıllı Dengeli Hoverboard",
  price: 3499,
  originalPrice: 4999,
  rating: 4.7,
  reviews: 812,
  badge: "Yeni",
  image: "/assets/images/shopping__3_-1777059417135.webp",
  imageAlt: "Citymate Bluetooth Hoparlörlü 6.5 inç tekerlekli akıllı dengeli elektrikli hoverboard",
  features: ["Bluetooth Hoparlör", "LED Işıklar", "6.5\" Teker"],
  accentColor: "#ec4899",
  accentBg: "rgba(236,72,153,0.08)",
  category: "hoverboard"
},
{
  id: "bluetooth-hoverboard-kids",
  name: "Bluetooth Hoverboard for Children - Kids Balance Wheel with Lights",
  tagline: "Çocuklar İçin Işıklı Hoverboard",
  price: 3799,
  originalPrice: 4999,
  rating: 4.7,
  reviews: 521,
  badge: "Popüler",
  image: "/assets/images/shopping__9_-1777063862754.webp",
  imageAlt: "Çocuklar için Bluetooth hoparlörlü LED ışıklı denge tekeri hoverboard, renkli tasarım",
  features: ["Bluetooth Hoparlör", "LED Işıklar", "Çocuk Dostu"],
  accentColor: "#ec4899",
  accentBg: "rgba(236,72,153,0.08)",
  category: "hoverboard"
},
{
  id: "zinc-megastar-hoverboard-blue",
  name: "Hoverboard with Bluetooth Speaker Zinc Megastar LED Lights",
  tagline: "Mavi LED Işıklı Hoverboard",
  price: 4299,
  originalPrice: 5799,
  rating: 4.6,
  reviews: 589,
  badge: "Trend",
  image: "/assets/images/shopping__5_-1777059412222.webp",
  imageAlt: "Zinc Megastar mavi LED ışıklı Bluetooth hoparlörlü hoverboard, şık mavi renk seçeneği",
  features: ["Bluetooth Hoparlör", "Mavi LED", "Dengeli Sürüş"],
  accentColor: "#ec4899",
  accentBg: "rgba(236,72,153,0.08)",
  category: "hoverboard"
},
{
  id: "citymate-hoverboard",
  name: "Citymate Bluetooth Hoparlörlü Akıllı Dengeli Hoverboard",
  tagline: "Akıllı Dengeli Hoverboard",
  price: 2999,
  originalPrice: 4299,
  rating: 4.5,
  reviews: 743,
  badge: "Eğlenceli",
  image: "/assets/images/shopping-1777059418700.webp",
  imageAlt: "Citymate Bluetooth hoparlörlü akıllı dengeli hoverboard, kompakt ve kullanışlı tasarım",
  features: ["Bluetooth Hoparlör", "Akıllı Denge", "15km Menzil"],
  accentColor: "#ec4899",
  accentBg: "rgba(236,72,153,0.08)",
  category: "hoverboard"
},
{
  id: "valve-index-vr-kit-1",
  name: "Valve Index VR KIT",
  tagline: "VR Gözlük",
  price: 24999,
  originalPrice: 27999,
  rating: 4.9,
  reviews: 876,
  badge: "Premium",
  image: "/assets/images/2_org_zoom-1777059596757.webp",
  imageAlt: "Valve Index VR KIT sanal gerçeklik gözlüğü ve kontrolcüleri",
  features: ["144Hz Ekran", "Finger Tracking", "SteamVR Uyumlu"],
  accentColor: "#6366f1",
  accentBg: "rgba(99,102,241,0.08)",
  category: "vr"
},
{
  id: "valve-index-vr-kit-2",
  name: "Valve Index VR KIT",
  tagline: "VR Gözlük",
  price: 24999,
  originalPrice: 27999,
  rating: 4.9,
  reviews: 812,
  badge: "Premium",
  image: "/assets/images/shopping__1_-1777059597581.webp",
  imageAlt: "Valve Index VR KIT sanal gerçeklik seti kutu içeriği",
  features: ["144Hz Ekran", "Finger Tracking", "SteamVR Uyumlu"],
  accentColor: "#6366f1",
  accentBg: "rgba(99,102,241,0.08)",
  category: "vr"
},
{
  id: "sony-ps-vr2-1",
  name: "Sony Playstation Vr2 Sanal Gerçeklik Gözlüğü",
  tagline: "VR Gözlük",
  price: 18999,
  originalPrice: 21999,
  rating: 4.8,
  reviews: 1045,
  badge: "Yeni",
  image: "/assets/images/shopping__3_-1777059594964.webp",
  imageAlt: "Sony PlayStation VR2 sanal gerçeklik gözlüğü beyaz renk",
  features: ["4K OLED", "Eye Tracking", "PS5 Uyumlu"],
  accentColor: "#003087",
  accentBg: "rgba(0,48,135,0.08)",
  category: "vr"
},
{
  id: "sony-ps-vr2-2",
  name: "Sony Playstation Vr2 Sanal Gerçeklik Gözlüğü",
  tagline: "VR Gözlük",
  price: 18999,
  originalPrice: 21999,
  rating: 4.8,
  reviews: 998,
  badge: "Yeni",
  image: "/assets/images/shopping-1777059595471.webp",
  imageAlt: "Sony PlayStation VR2 sanal gerçeklik gözlüğü ve Sense kontrolcüleri",
  features: ["4K OLED", "Eye Tracking", "PS5 Uyumlu"],
  accentColor: "#003087",
  accentBg: "rgba(0,48,135,0.08)",
  category: "vr"
},
{
  id: "boombox-3",
  name: "Boombox 3 Hoparlör",
  tagline: "Güçlü Taşınabilir Ses",
  price: 8999,
  originalPrice: 11999,
  rating: 4.8,
  reviews: 876,
  badge: "Yeni",
  image: "/assets/images/shopping__3_-1777059836205.webp",
  imageAlt: "Boombox 3 büyük taşınabilir bluetooth hoparlör güçlü ses sistemi",
  features: ["24h Pil", "IPX7 Su Geçirmez", "PartyBoost"],
  accentColor: "#a78bfa",
  accentBg: "rgba(167,139,250,0.08)",
  category: "hoparlor"
},
{
  id: "jbl-boombox-3",
  name: "JBL Boombox 3 Hoparlör",
  tagline: "JBL Pro Ses Deneyimi",
  price: 9999,
  originalPrice: 12999,
  rating: 4.9,
  reviews: 1542,
  badge: "Premium",
  image: "/assets/images/shopping-1777059836243.webp",
  imageAlt: "JBL Boombox 3 premium taşınabilir bluetooth hoparlör yüksek güçlü ses sistemi",
  features: ["24h Pil", "IPX7 Su Geçirmez", "Çift Ses Kanalı"],
  accentColor: "#ef4444",
  accentBg: "rgba(239,68,68,0.08)",
  category: "hoparlor"
},
{
  id: "everest-parley",
  name: "Everest Parley Siyah/Beyaz Rainbow Aydınlatmalı Türkçe Q Red Switch Mekanik Gaming Oyuncu Klavyesi",
  tagline: "Mekanik Gaming Klavye",
  price: 1299,
  originalPrice: 1799,
  rating: 4.7,
  reviews: 1243,
  badge: "Oyuncu Tercihi",
  image: "/assets/images/shopping__1_-1777060190642.webp",
  imageAlt: "Everest Parley Siyah/Beyaz Rainbow Aydınlatmalı Türkçe Q Red Switch Mekanik Gaming Oyuncu Klavyesi",
  features: ["Red Switch", "Rainbow RGB", "Türkçe Q"],
  accentColor: "#8b5cf6",
  accentBg: "rgba(139,92,246,0.08)",
  category: "klavye"
},
{
  id: "razer-ornata-v3",
  name: "Razer Ornata V3 Klavye",
  tagline: "Gaming Klavye",
  price: 1899,
  originalPrice: 2499,
  rating: 4.8,
  reviews: 2104,
  badge: "Razer",
  image: "/assets/images/shopping__2_-1777060190645.webp",
  imageAlt: "Razer Ornata V3 Gaming Klavye RGB aydınlatmalı",
  features: ["Mecha-Membrane", "RGB Chroma", "Ergonomik"],
  accentColor: "#22c55e",
  accentBg: "rgba(34,197,94,0.08)",
  category: "klavye"
},
{
  id: "rampage-kb-gx65",
  name: "Rampage Kb-Gx65 SIMULA Siyah USB RGB Aydınlatmalı 4 Makro Tuşlu Bilek Destekli Oyuncu Klavyesi",
  tagline: "RGB Oyuncu Klavyesi",
  price: 899,
  originalPrice: 1299,
  rating: 4.5,
  reviews: 876,
  badge: "Makro Tuşlu",
  image: "/assets/images/shopping__4_-1777060190581.webp",
  imageAlt: "Rampage Kb-Gx65 SIMULA Siyah USB RGB Aydınlatmalı 4 Makro Tuşlu Bilek Destekli Oyuncu Klavyesi",
  features: ["4 Makro Tuş", "RGB Aydınlatma", "Bilek Desteği"],
  accentColor: "#ef4444",
  accentBg: "rgba(239,68,68,0.08)",
  category: "klavye"
},
{
  id: "membran-rainbow-beyaz",
  name: "Membran Switch Rainbow Led Işıklı Türkçe Q Gaming Oyuncu Klavyesi Beyaz Renk",
  tagline: "Rainbow LED Klavye",
  price: 599,
  originalPrice: 899,
  rating: 4.4,
  reviews: 654,
  badge: "Rainbow LED",
  image: "/assets/images/shopping-1777060190684.webp",
  imageAlt: "Membran Switch Rainbow Led Işıklı Türkçe Q Gaming Oyuncu Klavyesi Beyaz Renk",
  features: ["Rainbow LED", "Türkçe Q", "Membran Switch"],
  accentColor: "#f59e0b",
  accentBg: "rgba(245,158,11,0.08)",
  category: "klavye"
},
{
  id: "hawk-hm420",
  name: "Hawk Gaming HM420",
  tagline: "4K Hz 26000 DPI Tri-Mode Kablosuz/Bluetooth Şarj Standlı Gaming Mouse",
  price: 1499,
  originalPrice: 1999,
  rating: 4.8,
  reviews: 312,
  badge: "Tri-Mode",
  image: "/assets/images/41fdGX8I5QL._AC_SX679_-1777060572109.jpg",
  imageAlt: "Hawk Gaming HM420 4K Hz 26000 DPI Tri-Mode kablosuz bluetooth şarj standlı gaming mouse",
  features: ["26K DPI", "4K Hz", "Tri-Mode"],
  accentColor: "#0ea5e9",
  accentBg: "rgba(14,165,233,0.08)",
  category: "fare"
},
{
  id: "hp-fm530a",
  name: "HP FM530A",
  tagline: "Bluetooth Wireless Kablosuz Sessiz Mouse Dual Mode 1600dpi",
  price: 649,
  originalPrice: 899,
  rating: 4.5,
  reviews: 876,
  badge: "Sessiz",
  image: "/assets/images/shopping__1_-1777060572782.webp",
  imageAlt: "HP FM530A Bluetooth Wireless kablosuz sessiz mouse dual mode 1600dpi",
  features: ["1600 DPI", "Dual Mode", "Sessiz"],
  accentColor: "#0ea5e9",
  accentBg: "rgba(14,165,233,0.08)",
  category: "fare"
},
{
  id: "rush-rm02",
  name: "Rush RM02",
  tagline: "RGB Aydınlatmalı 1600 DPI Gaming Oyuncu Mouse",
  price: 399,
  originalPrice: 549,
  rating: 4.4,
  reviews: 654,
  badge: "RGB",
  image: "/assets/images/shopping__4_-1777060572779.webp",
  imageAlt: "Rush RM02 RGB aydınlatmalı 1600 DPI gaming oyuncu mouse",
  features: ["1600 DPI", "RGB", "Gaming"],
  accentColor: "#0ea5e9",
  accentBg: "rgba(14,165,233,0.08)",
  category: "fare"
},
{
  id: "rampage-smx-r44",
  name: "Rampage SMX-R44",
  tagline: "Makrolu Gaming Mouse",
  price: 549,
  originalPrice: 749,
  rating: 4.6,
  reviews: 423,
  badge: "Makrolu",
  image: "/assets/images/shopping-1777060572784.webp",
  imageAlt: "Rampage SMX-R44 makrolu gaming oyuncu mouse",
  features: ["Makro", "RGB", "Gaming"],
  accentColor: "#0ea5e9",
  accentBg: "rgba(14,165,233,0.08)",
  category: "fare"
}];


const categories = [
{ id: "all", label: "Tümü", emoji: "🛍️" },
{ id: "akilli-saatler", label: "Akıllı Saatler", emoji: "⌚" },
{ id: "scooter", label: "Elektrikli Scooter", emoji: "🛴" },
{ id: "hoverboard", label: "Hoverboard", emoji: "🛹" },
{ id: "vr", label: "VR", emoji: "🥽" },
{ id: "hoparlor", label: "Hoparlör", emoji: "🔊" },
{ id: "klavye", label: "Klavye", emoji: "⌨️" },
{ id: "fare", label: "Fare", emoji: "🖱️" }];


function ProductCard({ product }: {product: (typeof products)[0];}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = Math.round(
    (product.originalPrice - product.price) / product.originalPrice * 100
  );

  return (
    <div
      className="group rounded-[24px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
      style={{
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 4px 24px rgba(26,26,46,0.06)"
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 16px 48px rgba(26,26,46,0.10), 0 0 0 1px rgba(255,255,255,0.9)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 4px 24px rgba(26,26,46,0.06)";
      }}>

      {/* Image */}
      <div
        className="relative overflow-hidden h-56 md:h-60"
        style={{ background: product.accentBg }}>

        <AppImage
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-semibold tracking-[0.04em] uppercase px-3 py-1 rounded-full text-white"
            style={{
              background: `linear-gradient(135deg, ${product.accentColor} 0%, ${product.accentColor}cc 100%)`,
              boxShadow: `0 4px 12px ${product.accentColor}40`
            }}>

            {product.badge}
          </span>
        </div>
        {/* Discount */}
        <div className="absolute top-4 right-4">
          <span
            className="text-[10px] font-semibold text-white px-2.5 py-1 rounded-full"
            style={{ background: "rgba(255,80,80,0.85)", backdropFilter: "blur(8px)" }}>

            -{discount}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p
          className="text-[11px] font-semibold tracking-[0.04em] uppercase mb-1"
          style={{ color: product.accentColor }}>

          {product.tagline}
        </p>
        <h3
          className="text-[18px] font-semibold mb-3 tracking-[-0.02em]"
          style={{ color: "#1a1a2e" }}>

          {product.name}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((f) =>
          <span
            key={f}
            className="text-[11px] px-2.5 py-1 rounded-full"
            style={{
              background: product.accentBg,
              color: product.accentColor,
              border: `1px solid ${product.accentColor}25`
            }}>

              {f}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((s) =>
            <span
              key={s}
              className="text-[12px]"
              style={{ color: s <= Math.round(product.rating) ? "#f59e0b" : "#e2e8f0" }}>

                ★
              </span>
            )}
          </div>
          <span className="text-[12px]" style={{ color: "#8a8aaa" }}>
            {product.rating} ({product.reviews.toLocaleString("tr-TR")})
          </span>
        </div>

        {/* Price + CTA */}
        <div
          className="flex items-center justify-between mt-auto pt-4"
          style={{ borderTop: "1px solid rgba(226,232,240,0.6)" }}>

          <div>
            <span
              className="text-[20px] font-bold tracking-[-0.03em]"
              style={{ color: "#1a1a2e" }}>

              ₺{product.price.toLocaleString("tr-TR")}
            </span>
            <span className="text-[12px] line-through ml-2" style={{ color: "#8a8aaa" }}>
              ₺{product.originalPrice.toLocaleString("tr-TR")}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium tracking-[-0.01em] transition-all duration-250 hover:scale-[1.03]"
            style={
            added ?
            { background: "rgba(46,196,160,0.15)", color: "#2ec4a0", border: "1px solid rgba(46,196,160,0.3)" } :
            {
              background: `linear-gradient(135deg, ${product.accentColor} 0%, ${product.accentColor}cc 100%)`,
              color: "white",
              boxShadow: `0 4px 14px ${product.accentColor}35`
            }
            }>

            {added ?
            "✓ Eklendi" :

            <>
                Sepete Ekle
                <Icon name="ShoppingBagIcon" size={13} />
              </>
            }
          </button>
        </div>
      </div>
    </div>);

}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProducts =
  activeCategory === "all" ?
  products :
  products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{ background: "#fdfcfb" }}>

      <div className="max-w-[1024px] mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="apple-label mb-3">Ürünler</p>
            <h2
              className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold leading-[1.08]"
              style={{ letterSpacing: "-0.04em", color: "#1a1a2e" }}>

              Koleksiyonu Keşfet
            </h2>
          </div>
          <p
            className="text-[15px] font-light max-w-xs md:text-right"
            style={{ letterSpacing: "-0.01em", color: "#8a8aaa" }}>

            Her bütçeye uygun, her yaşam tarzına göre tasarlanmış teknoloji.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 hover:scale-[1.03]"
                style={
                isActive ?
                {
                  background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d5e 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 14px rgba(26,26,46,0.25)",
                  border: "1px solid transparent"
                } :
                {
                  background: "rgba(255,255,255,0.9)",
                  color: "#1a1a2e",
                  border: "1px solid rgba(26,26,46,0.12)",
                  boxShadow: "0 2px 8px rgba(26,26,46,0.05)"
                }
                }>

                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>);

          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredProducts.map((product, i) =>
          <div
            key={product.id}
            className={`${visible ? `animate-fade-in-up` : "opacity-0"}`}
            style={{ animationFillMode: "forwards", animationDelay: `${(i + 1) * 80}ms` }}>

              <ProductCard product={product} />
            </div>
          )}
        </div>

        {filteredProducts.length === 0 &&
        <div className="text-center py-20" style={{ color: "#8a8aaa" }}>
            <p className="text-[18px]">Bu kategoride ürün bulunamadı.</p>
          </div>
        }
      </div>
    </section>);

}