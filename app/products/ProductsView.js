"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const productPackages = [
  {
    name: "Fashion Capsule",
    target: "แบรนด์แฟชั่น",
    features: [
      "พิมพ์ดิจิทัลความละเอียดสูงสำหรับล็อตเล็ก-กลาง",
      "บริการจัดการสีและปรับสูตรเฉพาะคอลเลกชัน",
      "ฟินิชชิ่งซอฟต์ทัชและกันยับ",
    ],
  },
  {
    name: "Home Décor Master",
    target: "ของตกแต่งบ้าน",
    features: [
      "พิมพ์โรตารี่หรือดิจิทัลตามปริมาณ",
      "เคลือบกัน UV และการทนการซัก",
      "บริการตัดเย็บและแพ็กกิ้งตามแบบ",
    ],
  },
  {
    name: "Industrial Shield",
    target: "งานอุตสาหกรรม",
    features: [
      "ผสมสูตรหมึกทนสารเคมีและอุณหภูมิ",
      "ทดสอบคุณสมบัติเฉพาะตามมาตรฐาน",
      "บริการ QA รายงานและติดตามล็อต",
    ],
  },
];

const serviceAddOns = [
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
];

export default function ProductsView() {
  const { translations } = useLanguage();
  const { sections, hero } = translations;

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-amber-50/40">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            {sections.products.title}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            โซลูชันที่ออกแบบรอบธุรกิจของคุณ
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            {sections.products.description}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {productPackages.map((pack) => (
            <div
              key={pack.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">{pack.target}</p>
                <h2 className="text-2xl font-semibold text-slate-900">{pack.name}</h2>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-600">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 text-sm font-semibold text-amber-500">{hero.primaryCta}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-8 rounded-[3rem] border border-amber-100 bg-amber-50/70 p-12 shadow-inner lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-amber-900">บริการเสริมยอดนิยม</h2>
            <p className="text-base text-amber-900/80">
              ปรับแต่งแพ็กเกจให้ตรงกับการดำเนินงานของคุณ ตั้งแต่การสนับสนุนด้านดีไซน์จนถึงการจัดการซัพพลายเชนหลังการผลิต
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {serviceAddOns.map((service) => (
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
              เริ่มต้นคุยรายละเอียดโปรเจกต์
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400 px-6 py-3 text-sm font-semibold text-amber-600 transition hover:border-amber-500 hover:text-amber-700"
            >
              อ่านอินไซต์จากทีมผู้เชี่ยวชาญ
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
