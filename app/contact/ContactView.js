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
    <div className="theme-surface relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-16 top-16 h-[18rem] w-[18rem] rounded-full bg-blue-400/18 blur-3xl dark:bg-blue-600/25" />
        <div className="absolute right-[-18rem] top-[24rem] h-[20rem] w-[20rem] rounded-full bg-indigo-400/15 blur-3xl dark:bg-indigo-600/25" />
      </div>
      <div className="relative mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="theme-panel panel-aura space-y-4 rounded-[3rem] border border-border-subtle p-10 text-center shadow-xl transition-colors duration-300">
          <span className="floating-badge">{sections.contact.title}</span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{copy.heroHeading}</h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-foreground/80">{sections.contact.description}</p>
        </header>

        <section className="theme-panel panel-aura grid gap-6 rounded-[3rem] border border-border-subtle p-12 shadow-2xl transition-colors duration-300 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">{copy.contactSectionTitle}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.contactChannels.map((channel) => (
                <div key={channel.label} className="card-elevated theme-card rounded-3xl border border-border-subtle/70 p-6 text-sm text-foreground transition duration-300 hover:-translate-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">{channel.label}</p>
                  <ul className="mt-3 space-y-2">
                    {channel.phones.map((phone) => (
                      <li key={phone}>{phone}</li>
                    ))}
                  </ul>
                  <p className="mt-3 font-medium text-foreground">{channel.email}</p>
                </div>
              ))}
            </div>
            <div className="card-elevated theme-card rounded-3xl border border-dashed border-blue-200/80 p-6 text-sm text-foreground/80 transition-colors duration-300">
              <p className="font-semibold text-blue-700">{copy.projectPrepTitle}</p>
              <p className="mt-2">{copy.projectPrepDescription}</p>
            </div>
          </div>
          <div className="card-elevated theme-card space-y-5 rounded-3xl border border-border-subtle/70 p-8 text-sm text-foreground/80 transition-colors duration-300">
            <h2 className="text-lg font-semibold text-foreground">ข้อมูลการเยี่ยมชมโรงงาน</h2>
            <ul className="space-y-4">
              {copy.visitInfo.map((item) => (
                <li key={item.title} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70">{item.title}</p>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
            <Link
              href="https://maps.app.goo.gl/"
              target="_blank"
              rel="noreferrer"
              className="cta-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
            >
              {copy.mapCta}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section className="theme-panel panel-aura grid gap-6 rounded-[3rem] border border-border-subtle p-12 shadow-xl transition-colors duration-300 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">{copy.resourcesTitle}</h2>
            <p className="text-base text-foreground/80">{copy.resourcesDescription}</p>
            <Link
              href="/blog/color-management-workflow"
              className="cta-secondary inline-flex items-center gap-2 px-5 py-2 text-sm"
            >
              {copy.resourcesLink}
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="card-elevated theme-card rounded-3xl border border-border-subtle/70 p-8 transition-colors duration-300">
            <h3 className="text-lg font-semibold text-foreground">{copy.formTitle}</h3>
            <p className="mt-3 text-sm text-foreground/80">{copy.formDescription}</p>
            <form className="mt-6 space-y-3">
              <label className="block text-sm font-medium text-foreground/80" htmlFor="contact-email">
                {copy.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder={copy.emailPlaceholder}
                className="w-full rounded-full border border-transparent bg-white/80 px-4 py-3 text-sm text-foreground shadow-sm outline-none transition focus:border-blue-400 focus:bg-white dark:bg-slate-900/70"
              />
              <button
                type="button"
                className="cta-primary w-full justify-center px-4 py-3 text-sm"
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
