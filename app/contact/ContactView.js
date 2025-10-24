"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const contactChannels = [
  {
    label: "ฝ่ายขาย",
    phones: ["+66 (0)2735 9109-10", "+66 (0)2182 3306"],
    email: "sales@thaipaipan.com",
  },
  {
    label: "บริการหลังการขาย",
    phones: ["+66 (0)2182 3301"],
    email: "service@thaipaipan.com",
  },
];

const visitInfo = [
  {
    title: "เวลาทำการ",
    detail: "จันทร์-เสาร์ 08:30-17:30 น. ปิดวันอาทิตย์และวันหยุดนักขัตฤกษ์",
  },
  {
    title: "ที่ตั้ง",
    detail: "41/3 หมู่ 2 ถนนสุขาภิบาล 1 แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240",
  },
  {
    title: "ช่องทางออนไลน์",
    detail: "Line Official: @thaipaipan | Facebook: ThaiPaipan Textile Printing",
  },
];

export default function ContactView() {
  const { translations } = useLanguage();
  const { sections } = translations;

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{sections.contact.title}</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">มาพูดคุยกับทีมของเรา</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">{sections.contact.description}</p>
        </header>

        <section className="grid gap-6 rounded-[3rem] border border-slate-200 bg-white/95 p-12 shadow-xl lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">ช่องทางการติดต่อหลัก</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="rounded-3xl border border-amber-100 bg-amber-50/70 p-6 text-sm text-amber-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">{channel.label}</p>
                  <ul className="mt-3 space-y-2">
                    {channel.phones.map((phone) => (
                      <li key={phone}>{phone}</li>
                    ))}
                  </ul>
                  <p className="mt-3 font-medium">{channel.email}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-dashed border-amber-300 p-6 text-sm text-slate-600">
              <p className="font-semibold text-amber-700">เตรียมข้อมูลโปรเจกต์</p>
              <p className="mt-2">
                แจ้งประเภทผ้า ปริมาณโดยประมาณ กำหนดส่ง และบริการฟินิชชิ่งที่ต้องการ เพื่อให้ทีมสามารถจัดทำใบเสนอราคาได้รวดเร็ว
              </p>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50/80 p-8 text-sm text-slate-700">
            <h2 className="text-lg font-semibold text-slate-900">ข้อมูลการเยี่ยมชมโรงงาน</h2>
            <ul className="space-y-4">
              {visitInfo.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{item.title}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
            <Link
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
            >
              เปิดแผนที่ Google Maps
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-[3rem] border border-amber-100 bg-amber-50/60 p-12 shadow-inner lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-900">เตรียมพร้อมก่อนเริ่มงานพิมพ์</h2>
            <p className="text-base text-amber-900/80">
              ดาวน์โหลดเทมเพลตเช็กลิสต์และตัวอย่างไฟล์เพื่อให้ทีมออกแบบและจัดซื้อของคุณทำงานได้คล่องตัว
            </p>
            <Link
              href="/blog/design-hand-off"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-amber-700 shadow transition hover:text-amber-900"
            >
              อ่านคู่มือการส่งมอบไฟล์
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/90 p-8">
            <h3 className="text-lg font-semibold text-slate-900">ขอรับเทมเพลตและตัวอย่างไฟล์</h3>
            <p className="mt-3 text-sm text-slate-600">
              ฝากอีเมลไว้กับเราเพื่อรับเทมเพลตล่าสุด รวมถึงข้อมูลการเตรียมไฟล์สำหรับแต่ละเทคนิคการพิมพ์
            </p>
            <form className="mt-6 space-y-3">
              <label className="block text-sm font-medium text-slate-700" htmlFor="contact-email">
                อีเมลติดต่อกลับ
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-full border border-amber-200 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-amber-400"
              />
              <button
                type="button"
                className="w-full rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
              >
                ขอรับข้อมูล
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
