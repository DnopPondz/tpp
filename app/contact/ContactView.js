"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "มาพูดคุยกับทีมของเรา",
    contactSectionTitle: "ช่องทางการติดต่อหลัก",
    contactChannels: [
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
    ],
    projectPrepTitle: "เตรียมข้อมูลโปรเจกต์",
    projectPrepDescription:
      "แจ้งประเภทผ้า ปริมาณโดยประมาณ กำหนดส่ง และบริการฟินิชชิ่งที่ต้องการ เพื่อให้ทีมสามารถจัดทำใบเสนอราคาได้รวดเร็ว",
    visitInfo: [
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
    ],
    mapCta: "เปิดแผนที่ Google Maps",
    resourcesTitle: "เตรียมพร้อมก่อนเริ่มงานพิมพ์",
    resourcesDescription:
      "ดาวน์โหลดเทมเพลตเช็กลิสต์และตัวอย่างไฟล์เพื่อให้ทีมออกแบบและจัดซื้อของคุณทำงานได้คล่องตัว",
    resourcesLink: "อ่านคู่มือการส่งมอบไฟล์",
    formTitle: "ขอรับเทมเพลตและตัวอย่างไฟล์",
    formDescription:
      "ฝากอีเมลไว้กับเราเพื่อรับเทมเพลตล่าสุด รวมถึงข้อมูลการเตรียมไฟล์สำหรับแต่ละเทคนิคการพิมพ์",
    emailLabel: "อีเมลติดต่อกลับ",
    emailPlaceholder: "name@company.com",
    submitLabel: "ขอรับข้อมูล",
  },
  en: {
    heroHeading: "Connect with our team",
    contactSectionTitle: "Primary contact channels",
    contactChannels: [
      {
        label: "Sales team",
        phones: ["+66 (0)2735 9109-10", "+66 (0)2182 3306"],
        email: "sales@thaipaipan.com",
      },
      {
        label: "After-sales support",
        phones: ["+66 (0)2182 3301"],
        email: "service@thaipaipan.com",
      },
    ],
    projectPrepTitle: "Prepare your project brief",
    projectPrepDescription:
      "Share fabric types, estimated volume, delivery timeline, and finishing needs so we can prepare a tailored quotation quickly.",
    visitInfo: [
      {
        title: "Operating hours",
        detail: "Monday–Saturday 08:30-17:30. Closed on Sundays and public holidays.",
      },
      {
        title: "Address",
        detail: "41/3 Moo 2, Sukhaphiban 1 Road, Khlong Chan, Bang Kapi, Bangkok 10240",
      },
      {
        title: "Online channels",
        detail: "Line Official: @thaipaipan | Facebook: ThaiPaipan Textile Printing",
      },
    ],
    mapCta: "Open in Google Maps",
    resourcesTitle: "Get ready before production",
    resourcesDescription:
      "Download checklists and reference files so your design and procurement teams can work smoothly.",
    resourcesLink: "Read the hand-off guide",
    formTitle: "Request templates and sample files",
    formDescription:
      "Leave your email to receive the latest templates and file preparation notes for each printing process.",
    emailLabel: "Contact email",
    emailPlaceholder: "name@company.com",
    submitLabel: "Send me the files",
  },
};

export default function ContactView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{sections.contact.title}</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{copy.heroHeading}</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">{sections.contact.description}</p>
        </header>

        <section className="grid gap-6 rounded-[3rem] border border-slate-200 bg-white/95 p-12 shadow-xl lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">{copy.contactSectionTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.contactChannels.map((channel) => (
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
              <p className="font-semibold text-amber-700">{copy.projectPrepTitle}</p>
              <p className="mt-2">{copy.projectPrepDescription}</p>
            </div>
          </div>
          <div className="space-y-5 rounded-3xl border border-slate-200 bg-slate-50/80 p-8 text-sm text-slate-700">
            <h2 className="text-lg font-semibold text-slate-900">ข้อมูลการเยี่ยมชมโรงงาน</h2>
            <ul className="space-y-4">
              {copy.visitInfo.map((item) => (
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
              {copy.mapCta}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section className="grid gap-6 rounded-[3rem] border border-amber-100 bg-amber-50/60 p-12 shadow-inner lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-900">{copy.resourcesTitle}</h2>
            <p className="text-base text-amber-900/80">{copy.resourcesDescription}</p>
            <Link
              href="/blog/color-management-workflow"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-amber-700 shadow transition hover:text-amber-900"
            >
              {copy.resourcesLink}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/90 p-8">
            <h3 className="text-lg font-semibold text-slate-900">{copy.formTitle}</h3>
            <p className="mt-3 text-sm text-slate-600">{copy.formDescription}</p>
            <form className="mt-6 space-y-3">
              <label className="block text-sm font-medium text-slate-700" htmlFor="contact-email">
                {copy.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder={copy.emailPlaceholder}
                className="w-full rounded-full border border-amber-200 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-amber-400"
              />
              <button
                type="button"
                className="w-full rounded-full bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
              >
                {copy.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
