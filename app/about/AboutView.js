"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutView() {
  const { translations } = useLanguage();
  const { brand, sections } = translations;

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/50 to-white">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-20 lg:px-8">
        <header className="grid gap-12 rounded-[3rem] border border-amber-100 bg-white p-12 shadow-xl lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{brand.tagline}</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {brand.slogan}
            </h1>
            <p className="text-lg leading-8 text-slate-600">{sections.about.description}</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {sections.about.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-amber-100 bg-amber-50/60 p-6 text-sm text-amber-900 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">{pillar.title}</p>
                  <p className="mt-2 text-slate-700">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[20rem] overflow-hidden rounded-[2.5rem] border border-amber-100 bg-amber-50 shadow-lg">
            <Image
              src="/hero-textile.svg"
              alt="ThaiPaipan factory team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </header>

        <section className="grid gap-10 rounded-[3rem] border border-slate-200 bg-white/90 p-12 shadow-xl lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">วิสัยทัศน์และพันธกิจ</h2>
            <p className="text-base leading-7 text-slate-600">
              เราเชื่อว่างานพิมพ์ผ้าชั้นเยี่ยมเกิดจากการผสมผสานระหว่างเทคโนโลยีที่ล้ำหน้าและความใส่ใจในรายละเอียดของทีมงาน
              ทุกโปรเจกต์จึงถูกดูแลอย่างเป็นระบบตั้งแต่การให้คำปรึกษา การทดลองสี ไปจนถึงกระบวนการผลิตและตรวจสอบคุณภาพขั้นสุดท้าย
            </p>
            <p className="text-base leading-7 text-slate-600">
              ความยั่งยืนคือหัวใจสำคัญของโรงงาน เราลงทุนในเครื่องจักรรุ่นใหม่ที่ใช้พลังงานต่ำและเลือกใช้วัตถุดิบที่มีใบรับรองเพื่อรับผิดชอบต่อสังคมและสิ่งแวดล้อม
            </p>
          </div>
          <div className="grid gap-6 text-sm text-slate-700">
            <div className="rounded-3xl border border-amber-100 bg-amber-50/50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">Timeline</p>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="font-semibold text-slate-900">2535 – เริ่มต้นโรงงาน</p>
                  <p>เปิดไลน์พิมพ์โรตารี่ชุดแรก พร้อมทีมผู้เชี่ยวชาญด้านสีและเคมีสิ่งทอ</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">2548 – ขยายบริการ</p>
                  <p>เพิ่มบริการฟินิชชิ่งครบวงจรเพื่อรองรับสินค้าแฟชั่นและตกแต่งบ้าน</p>
                </li>
                <li>
                  <p className="font-semibold text-slate-900">2563 – พลิกสู่ดิจิทัล</p>
                  <p>ติดตั้งเครื่องพิมพ์ดิจิทัลความละเอียดสูงและระบบบริหารข้อมูลการผลิต</p>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Certifications</p>
              <ul className="mt-4 space-y-3">
                <li>ISO 9001: ระบบบริหารคุณภาพ</li>
                <li>OEKO-TEX® Standard 100 สำหรับหมึกและเคมีที่ใช้</li>
                <li>Green Industry Level 3 จากกระทรวงอุตสาหกรรม</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-[3rem] border border-amber-100 bg-amber-50/60 p-12 shadow-inner">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-amber-900">ทำงานร่วมกันแบบพาร์ทเนอร์</h2>
              <p className="text-base text-amber-900/80">
                เราเปิดโครงการ co-development กับนักออกแบบและแบรนด์ใหม่ ๆ อย่างต่อเนื่อง เพื่อทดลองวัสดุ เทคนิค และบริการที่แตกต่าง
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-amber-700 shadow-lg transition hover:text-amber-900"
            >
              นัดหมายเยี่ยมชมโรงงาน
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
