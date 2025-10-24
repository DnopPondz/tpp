"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(undefined);

const translations = {
  th: {
    brand: {
      name: "THAIPAIPAN",
      tagline: "บริษัทไทยพีพาน การพิมพ์ผ้า",
      slogan: "ผู้เชี่ยวชาญด้านการพิมพ์ผ้าคุณภาพสูงของประเทศไทย",
    },
    nav: {
      home: "หน้าแรก",
      about: "แนะนำ",
      capabilities: "ความสามารถ",
      products: "สินค้า",
      news: "บทความ",
      contact: "ติดต่อ",
    },
    hero: {
      headline: "บริการพิมพ์ผ้าแบบครบวงจร",
      subtitle:
        "เราผลิตงานพิมพ์ผ้าให้กับอุตสาหกรรมสิ่งทอทั่วประเทศด้วยเทคโนโลยีที่แม่นยำและมาตรฐานระดับสากล",
      primaryCta: "ปรึกษาผู้เชี่ยวชาญ",
      secondaryCta: "ดาวน์โหลดแคตตาล็อก",
      highlights: [
        "โรงงานพิมพ์ผ้าแบบโรตารี่และดิจิทัล",
        "ทีมงานมืออาชีพมากกว่า 30 ปี",
        "ควบคุมคุณภาพทุกขั้นตอน",
      ],
    },
    sections: {
      about: {
        title: "ทำไมต้องไทยพีพาน",
        description:
          "เราคัดสรรวัตถุดิบและสีพิมพ์ที่ดีที่สุด เพื่อให้ผืนผ้าของคุณโดดเด่น สวยงาม และทนทานในทุกการใช้งาน",
        pillars: [
          {
            title: "นวัตกรรม",
            detail: "เครื่องจักรรุ่นใหม่ รองรับงานที่ซับซ้อนและหลากหลาย",
          },
          {
            title: "บริการ",
            detail: "ดูแลทุกขั้นตอนตั้งแต่ต้นแบบจนถึงจัดส่ง",
          },
          {
            title: "ความเชื่อมั่น",
            detail: "ได้รับความไว้วางใจจากแบรนด์ชั้นนำในอุตสาหกรรมสิ่งทอ",
          },
        ],
      },
      products: {
        title: "โซลูชันการพิมพ์สำหรับทุกอุตสาหกรรม",
        description:
          "รองรับงานสิ่งทอหลากหลายประเภท ตั้งแต่เสื้อผ้าแฟชั่น ผ้าตกแต่งบ้าน ไปจนถึงผ้าอุตสาหกรรม",
        categories: [
          {
            title: "แฟชั่น",
            detail: "ลายพิมพ์เฉพาะตัวสำหรับเสื้อผ้าและเครื่องแต่งกาย",
          },
          {
            title: "ของตกแต่งบ้าน",
            detail: "ผ้าม่าน ผ้าปูโต๊ะ และของตกแต่งที่ต้องการความปราณีต",
          },
          {
            title: "งานอุตสาหกรรม",
            detail: "ผ้าที่เน้นความทนทานและคุณสมบัติพิเศษ",
          },
        ],
      },
      capabilities: {
        title: "ศักยภาพของเรา",
        items: [
          {
            title: "การพิมพ์โรตารี่",
            detail: "เหมาะสำหรับการผลิตจำนวนมากด้วยความเร็วสูง",
          },
          {
            title: "การพิมพ์ดิจิทัล",
            detail: "รายละเอียดคมชัด รองรับงานต้นแบบและงานพิเศษ",
          },
          {
            title: "การฟินิชชิ่งครบวงจร",
            detail: "บริการตกแต่งผ้าหลังการพิมพ์ตามความต้องการ",
          },
        ],
      },
      news: {
        title: "อัปเดตล่าสุด",
        articles: [
          {
            title: "เปิดไลน์การผลิตดิจิทัลรุ่นใหม่",
            summary:
              "เพิ่มศักยภาพในการพิมพ์ลายความละเอียดสูง พร้อมสีที่สดและใช้หมึกเป็นมิตรต่อสิ่งแวดล้อม",
          },
          {
            title: "เวิร์กช็อปออกแบบลายผ้า",
            summary:
              "เชิญนักออกแบบร่วมเรียนรู้เทคนิคการเตรียมไฟล์และเลือกวัสดุที่เหมาะสม",
          },
        ],
      },
      contact: {
        title: "เริ่มต้นโปรเจกต์กับเรา",
        description:
          "ติดต่อทีมงานเพื่อรับคำปรึกษาและใบเสนอราคา เราพร้อมตอบกลับภายใน 1 วันทำการ",
        phoneLabel: "โทร",
        emailLabel: "อีเมล",
      },
    },
    footer: {
      tagline:
        "เราพัฒนาความเชี่ยวชาญการพิมพ์ผ้าเพื่อยกระดับผลิตภัณฑ์ของลูกค้า พร้อมสนับสนุนธุรกิจไทยให้เติบโตอย่างยั่งยืน",
      quickLinksTitle: "เมนูลัด",
      contactTitle: "ติดต่อโรงงาน",
      addressLines: [
        "บริษัท ไทยพีพาน เท็กซ์ไทล์ พริ้นติ้ง จำกัด",
        "70 หมู่ 5 ถนนสุวินทวงศ์",
        "แขวงโคกแฝด เขตหนองจอก กรุงเทพมหานคร 10530",
      ],
      contactNumbers: [
        "โทร. +66(0)2735-9109-10",
        "โทร. +66(0)2182-3306",
        "โทร. +66(0)2182-3301",
        "แฟกซ์ +66(0)2735-8941",
      ],
      emailLabel: "อีเมล",
      email: "sales@thaipaipan.co.th",
      hoursTitle: "เวลาทำการ",
      hours: [
        "จันทร์-เสาร์ 08:30-17:30 น.",
        "หยุดวันอาทิตย์และวันหยุดนักขัตฤกษ์",
      ],
      socialsTitle: "ติดตามเรา",
      socials: [
        { label: "Facebook", href: "https://www.facebook.com/Thaipaipan" },
        { label: "LINE", href: "https://line.me/R/ti/p/@thaipaipan" },
        { label: "Instagram", href: "https://www.instagram.com/thaipaipan" },
      ],
      legal: "© {year} ThaiPaipan Textile Printing Co., Ltd. สงวนลิขสิทธิ์",
      certifications: "มาตรฐาน ISO 9001 และการใช้หมึกพิมพ์ที่เป็นมิตรต่อสิ่งแวดล้อม",
    },
  },
  en: {
    brand: {
      name: "THAIPAIPAN",
      tagline: "Thai Textile Printing Company",
      slogan: "Thailand's trusted experts in premium textile printing",
    },
    nav: {
      home: "Home",
      about: "About",
      capabilities: "Capabilities",
      products: "Products",
      news: "News",
      contact: "Contact",
    },
    hero: {
      headline: "Complete Textile Printing Solutions",
      subtitle:
        "We produce precision printed fabrics for industries across Thailand with international quality standards.",
      primaryCta: "Talk to a specialist",
      secondaryCta: "Download catalogue",
      highlights: [
        "Rotary and digital printing facilities",
        "More than 30 years of craft expertise",
        "Quality assurance at every stage",
      ],
    },
    sections: {
      about: {
        title: "Why choose ThaiPaipan",
        description:
          "We select the finest fabrics and colorants so that your textiles stand out with beauty, durability, and vibrant detail.",
        pillars: [
          {
            title: "Innovation",
            detail: "Modern machinery ready for intricate, high-volume work.",
          },
          {
            title: "Service",
            detail: "Guidance from prototyping to final delivery.",
          },
          {
            title: "Trust",
            detail: "Preferred partner of leading textile brands.",
          },
        ],
      },
      products: {
        title: "Printing solutions for every industry",
        description:
          "Supporting fashion, home décor, and industrial textiles with tailored finishing options.",
        categories: [
          {
            title: "Fashion",
            detail: "Signature prints for apparel and accessories.",
          },
          {
            title: "Home décor",
            detail: "Curtains, table linens, and accents that demand precision.",
          },
          {
            title: "Industrial",
            detail: "Technical textiles engineered for performance.",
          },
        ],
      },
      capabilities: {
        title: "Our capabilities",
        items: [
          {
            title: "Rotary printing",
            detail: "High-speed production perfect for large orders.",
          },
          {
            title: "Digital printing",
            detail: "Sharp detail ideal for samples and specialty runs.",
          },
          {
            title: "Complete finishing",
            detail: "Post-print services tailored to your specifications.",
          },
        ],
      },
      news: {
        title: "Latest updates",
        articles: [
          {
            title: "New digital line launched",
            summary:
              "Enhanced capacity for vivid, eco-friendly prints with ultra-fine detail.",
          },
          {
            title: "Textile design workshop",
            summary:
              "Join designers to learn file preparation and material selection best practices.",
          },
        ],
      },
      contact: {
        title: "Kick-start your next project",
        description:
          "Reach out for consultation and a quotation. We respond within one business day.",
        phoneLabel: "Tel",
        emailLabel: "Email",
      },
    },
    footer: {
      tagline:
        "We combine craftsmanship and modern technology to elevate your textiles with consistent colour and reliable turnaround times.",
      quickLinksTitle: "Quick links",
      contactTitle: "Contact the mill",
      addressLines: [
        "ThaiPaipan Textile Printing Co., Ltd.",
        "70 Moo 5, Suwinthawong Road",
        "Khok Faet, Nong Chok, Bangkok 10530",
        "Thailand",
      ],
      contactNumbers: [
        "Tel +66(0)2735-9109-10",
        "Tel +66(0)2182-3306",
        "Tel +66(0)2182-3301",
        "Fax +66(0)2735-8941",
      ],
      emailLabel: "Email",
      email: "sales@thaipaipan.co.th",
      hoursTitle: "Operating hours",
      hours: [
        "Monday – Saturday 08:30-17:30",
        "Closed on Sundays and public holidays",
      ],
      socialsTitle: "Connect with us",
      socials: [
        { label: "Facebook", href: "https://www.facebook.com/Thaipaipan" },
        { label: "LINE", href: "https://line.me/R/ti/p/@thaipaipan" },
        { label: "Instagram", href: "https://www.instagram.com/thaipaipan" },
      ],
      legal: "© {year} ThaiPaipan Textile Printing Co., Ltd. All rights reserved.",
      certifications: "ISO 9001 certified · Eco-conscious dye systems",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("th");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "th" ? "en" : "th")),
      translations: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const availableLanguages = Object.keys(translations);
