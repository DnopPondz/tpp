"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const productBackgrounds = {
  "eco-digital": "/products/eco-digital.svg",
  "decor-flex": "/products/decor-flex.svg",
  "industrial-guard": "/products/industrial-guard.svg",
  "merch-lab": "/products/merch-lab.svg",
};

const pageCopy = {
  th: {
    heroHeading: "โซลูชันที่ออกแบบรอบธุรกิจของคุณ",
    detailCta: "ดูรายละเอียด",
    modal: {
      closeAria: "ปิดหน้าต่างรายละเอียดสินค้า",
      highlightsTitle: "จุดเด่นหลัก",
      applicationsTitle: "เหมาะกับงานใดบ้าง",
    },
    catalog: [
      {
        id: "eco-digital",
        name: "Eco Digital Textile",
        target: "งานแฟชั่นความละเอียดสูง",
        summary:
          "ผ้าพิมพ์ดิจิทัลใช้หมึกน้ำที่ให้สีสดคม เนื้อสัมผัสนุ่ม พร้อมรองรับล็อตขนาดเล็ก-กลาง",
        details: {
          description:
            "ไลน์ผลิตที่ตอบโจทย์แบรนด์แฟชั่นยุคใหม่ ให้คุณทดลองคอลเลกชันได้รวดเร็วและควบคุมคุณภาพทุกสีสันได้ง่าย",
          highlights: [
            "พิมพ์ได้ทั้งเส้นใยธรรมชาติและสังเคราะห์",
            "เครื่องพิมพ์ความละเอียด 1200 DPI พร้อมระบบปรับโปรไฟล์สี",
            "ผ่านการรับรองมาตรฐาน OEKO-TEX® สำหรับเสื้อผ้า",
          ],
          applications: [
            "เสื้อผ้าแฟชั่น",
            "ผ้าพันคอและแอ็กเซสซอรี",
            "แคปซูลคอลเลกชันตามฤดูกาล",
          ],
        },
      },
      {
        id: "decor-flex",
        name: "Decor Flex Print",
        target: "ของตกแต่งบ้าน",
        summary:
          "ระบบพิมพ์โรตารี่และดิจิทัลผสมผสาน พร้อมเคลือบกัน UV และทนการซักเหมาะกับงานตกแต่ง",
        details: {
          description:
            "บริการครบวงจรตั้งแต่การไล่เฉดสีให้เข้ากับ moodboard ไปจนถึงการเคลือบผิวและตัดเย็บเพื่อส่งออก",
          highlights: [
            "ผ้า base หลากหลายทั้งโพลีเอสเตอร์ คอตตอน และผ้าผสม",
            "ฟินิชชิ่งให้เลือกทั้งกันฝุ่น กันน้ำ และกันรังสี UV",
            "ทีม QC ตรวจสอบทุกม้วนก่อนส่ง",
          ],
          applications: [
            "ผ้าม่านและผ้าบุเฟอร์นิเจอร์",
            "ผ้าปูโต๊ะและชุดเครื่องนอน",
            "ของขวัญพรีเมียมตกแต่งบ้าน",
          ],
        },
      },
      {
        id: "industrial-guard",
        name: "Industrial Guard",
        target: "งานอุตสาหกรรม",
        summary:
          "โซลูชันสำหรับงานสมรรถนะสูง เช่น ผ้าเทคนิคอล และงานพิมพ์ที่ต้องทนสารเคมีหรืออุณหภูมิ",
        details: {
          description:
            "พัฒนาและผสมสูตรหมึกพิเศษให้เข้ากับการใช้งานเฉพาะอุตสาหกรรม พร้อมบริการทดสอบมาตรฐาน",
          highlights: [
            "รองรับมาตรฐาน ISO และ ASTM ที่ลูกค้าต้องการ",
            "ทีมวิศวกรควบคุมขั้นตอนการผลิตและบันทึก QC",
            "บริการรายงานลอตและการติดตามสินค้าแบบเรียลไทม์",
          ],
          applications: [
            "ผ้าในอุตสาหกรรมยานยนต์",
            "อุปกรณ์เซฟตี้และ PPE",
            "วัสดุป้องกันความร้อน",
          ],
        },
      },
      {
        id: "merch-lab",
        name: "Merch Lab",
        target: "ของที่ระลึกและเมอร์ช",
        summary:
          "ผลิตเมอร์ชพรีเมียมครบวงจร ตั้งแต่งานออกแบบ mockup จนถึงแพ็กกิ้งพร้อมส่ง",
        details: {
          description:
            "แยกไลน์ผลิตเฉพาะสำหรับแบรนด์ที่ต้องการสร้างประสบการณ์ของขวัญและเมอร์ชคุณภาพสูง",
          highlights: [
            "บริการออกแบบกราฟิกและขึ้นตัวอย่างด่วนภายใน 48 ชั่วโมง",
            "เลือกวัสดุได้ทั้งผ้าไมโครไฟเบอร์และผ้ารีไซเคิล",
            "ระบบแพ็กกิ้งตามธีมพร้อมจัดส่งหลายที่อยู่",
          ],
          applications: [
            "ของที่ระลึกองค์กร",
            "ชุดโปรโมชันเปิดตัวสินค้า",
            "ของสะสมจำนวนจำกัด",
          ],
        },
      },
    ],
    serviceIntro: {
      title: "บริการเสริมยอดนิยม",
      description:
        "ปรับแต่งแพ็กเกจให้ตรงกับการดำเนินงานของคุณ ตั้งแต่การสนับสนุนด้านดีไซน์จนถึงการจัดการซัพพลายเชนหลังการผลิต",
    },
    serviceAddOns: [
      {
        title: "Design Support",
        description: "ที่ปรึกษาด้านการจัดเตรียมไฟล์ ทดลองลาย และ mockup 3D สำหรับการพรีเซนต์",
      },
      {
        title: "Logistics",
        description: "จัดการจัดส่งทั้งในประเทศและต่างประเทศ พร้อมติดตามสถานะครบทุกขั้นตอน",
      },
      {
        title: "Inventory Management",
        description: "บริการจัดเก็บผ้าสำเร็จรูปและวัตถุดิบ พร้อมรายงานสต็อกแบบเรียลไทม์",
      },
    ],
    contactCta: "เริ่มต้นคุยรายละเอียดโปรเจกต์",
    insightsCta: "อ่านอินไซต์จากทีมผู้เชี่ยวชาญ",
  },
  en: {
    heroHeading: "Solutions tailored around your business",
    detailCta: "View details",
    modal: {
      closeAria: "Close product detail window",
      highlightsTitle: "Key highlights",
      applicationsTitle: "Ideal applications",
    },
    catalog: [
      {
        id: "eco-digital",
        name: "Eco Digital Textile",
        target: "High-detail fashion runs",
        summary:
          "Water-based digital prints with vibrant colour, soft handfeel, and flexibility for small-to-mid batches.",
        details: {
          description:
            "Purpose-built for modern fashion labels so you can trial collections quickly while keeping every shade on target.",
          highlights: [
            "Compatible with natural and synthetic fibres",
            "1200 DPI printers with intelligent colour profiling",
            "OEKO-TEX® certified outputs for apparel",
          ],
          applications: [
            "Fashion garments",
            "Scarves and accessories",
            "Seasonal capsule collections",
          ],
        },
      },
      {
        id: "decor-flex",
        name: "Decor Flex Print",
        target: "Home décor brands",
        summary:
          "Hybrid rotary and digital lines with UV and wash-resistant finishes made for interior textiles.",
        details: {
          description:
            "An end-to-end service from colour matching moodboards to surface coating and export-ready sewing.",
          highlights: [
            "Broad fabric bases across polyester, cotton, and blends",
            "Finishing options spanning dust, water, and UV protection",
            "Dedicated QC inspection before every shipment",
          ],
          applications: [
            "Curtains and upholstery",
            "Table linens and bedding",
            "Premium home gift sets",
          ],
        },
      },
      {
        id: "industrial-guard",
        name: "Industrial Guard",
        target: "Technical and industrial",
        summary:
          "High-performance solutions for technical textiles exposed to chemicals, heat, or heavy wear.",
        details: {
          description:
            "Custom ink chemistries and compliance testing tailored to each industry application.",
          highlights: [
            "Meets ISO and ASTM standards requested by clients",
            "Engineers oversee production steps with detailed QC logs",
            "Real-time lot reporting and product traceability",
          ],
          applications: [
            "Automotive interiors",
            "Safety gear and PPE",
            "Heat shielding materials",
          ],
        },
      },
      {
        id: "merch-lab",
        name: "Merch Lab",
        target: "Merchandise and gifting",
        summary:
          "Premium merch production from concept mockups to packed-and-ready fulfilment.",
        details: {
          description:
            "A dedicated line for brands delivering memorable gifting and limited-edition merchandise experiences.",
          highlights: [
            "Graphic design support with 48-hour sample turnaround",
            "Material options across microfibre and recycled fabrics",
            "Themed packing workflows with multi-destination delivery",
          ],
          applications: [
            "Corporate gifting",
            "Product launch bundles",
            "Limited-run collectibles",
          ],
        },
      },
    ],
    serviceIntro: {
      title: "Popular add-on services",
      description:
        "Shape the right package for your operations—from creative support through to post-production supply chain care.",
    },
    serviceAddOns: [
      {
        title: "Design support",
        description:
          "Consultants ready to prepare print files, run pattern trials, and craft 3D mockups for presentations.",
      },
      {
        title: "Logistics",
        description:
          "Domestic and international fulfilment with status tracking at every milestone.",
      },
      {
        title: "Inventory management",
        description:
          "Warehousing for finished goods and raw fabric with real-time stock reporting.",
      },
    ],
    contactCta: "Start a project conversation",
    insightsCta: "Read insights from our experts",
  },
};

function ProductModal({ product, onClose, labels }) {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        className="relative z-10 w-full max-w-3xl overflow-hidden rounded-4xl border border-white/40 bg-white/95 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-slate-700"
          aria-label={labels.closeAria}
        >
          ×
        </button>
        <div className="grid gap-8 p-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              {product.target}
            </p>
            <h3 id="product-title" className="text-3xl font-semibold text-slate-900">
              {product.name}
            </h3>
            <p className="text-base text-slate-600">{product.details.description}</p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/80">
                {labels.highlightsTitle}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {product.details.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-600">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/80">
                {labels.applicationsTitle}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-amber-600">
                {product.details.applications.map((useCase) => (
                  <li
                    key={useCase}
                    className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsView() {
  const { language, translations } = useLanguage();
  const { sections, hero } = translations;
  const copy = pageCopy[language];
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setSelectedProduct(null);
  }, [language]);

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-amber-50/40">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            {sections.products.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {copy.heroHeading}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            {sections.products.description}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {copy.catalog.map((product) => (
            <article
              key={product.id}
              className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-4xl border border-white/20 bg-slate-900/70 p-10 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundImage: `linear-gradient(140deg, rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.35)), url(${productBackgrounds[product.id] ?? ""})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                  {product.target}
                </p>
                <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
                <p className="text-sm leading-6 text-slate-100/90">{product.summary}</p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="text-sm font-semibold text-amber-200">{hero.primaryCta}</span>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-900 shadow transition hover:bg-amber-300"
                >
                  {copy.detailCta}
                  <span aria-hidden>→</span>
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 rounded-[3rem] border border-amber-100 bg-amber-50/70 p-12 shadow-inner lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-amber-900">{copy.serviceIntro.title}</h2>
            <p className="text-base text-amber-900/80">{copy.serviceIntro.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {copy.serviceAddOns.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/60 bg-white/90 p-6 text-sm text-slate-700">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">{service.title}</p>
                <p className="mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[3rem] border border-slate-200 bg-white/90 p-12 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.products.categories.map((category) => (
              <div key={category.title} className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                <p className="text-sm text-slate-600">{category.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
            >
              {copy.contactCta}
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-600 transition hover:border-amber-500 hover:text-amber-700"
            >
              {copy.insightsCta}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        labels={copy.modal}
      />
    </div>
  );
}
