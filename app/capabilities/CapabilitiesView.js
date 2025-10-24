"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "เทคโนโลยีที่สร้างมาตรฐานงานพิมพ์ระดับสากล",
    heroDescription:
      "เราลงทุนอย่างต่อเนื่องในเครื่องจักรรุ่นใหม่ ระบบบริหารการผลิต และทีมผู้เชี่ยวชาญ เพื่อให้ลูกค้าได้รับผลงานที่สม่ำเสมอในทุกล็อต พร้อมตอบโจทย์งานเร่งด่วนและดีไซน์ที่ซับซ้อน",
    workflowTitle: "เวิร์กโฟลว์แบบครบวงจร",
    workflowDescription:
      "กระบวนการของเราถูกออกแบบให้เชื่อมต่อทุกทีมด้วยข้อมูลเดียวกัน ช่วยลดการแก้ไขซ้ำและเพิ่มความเร็วในการตัดสินใจ",
    processSteps: [
      {
        title: "ปรึกษา",
        description:
          "เริ่มต้นด้วยการทำความเข้าใจความต้องการของลูกค้า วิเคราะห์ผ้า เทคนิคการใช้งาน และให้คำแนะนำเรื่องการเตรียมไฟล์",
      },
      {
        title: "ทดลองต้นแบบ",
        description:
          "ทดลองพิมพ์และปรับสูตรสีร่วมกับห้องปฏิบัติการเพื่อให้สีและผิวสัมผัสตรงตามที่แบรนด์ต้องการ",
      },
      {
        title: "ผลิตจริง",
        description:
          "วางแผนการผลิตแบบเรียลไทม์ ตรวจสอบคุณภาพทุกล็อต พร้อมบริการฟินิชชิ่งครบวงจร",
      },
    ],
    equipment: [
      {
        title: "Rotary Printing",
        metrics: "ความเร็วสูงสุด 80 เมตร/นาที",
        description:
          "รองรับงานปริมาณมากพร้อมระบบควบคุมแรงกดและการไล่สีอัตโนมัติ ทำให้ได้ลายคมชัดสม่ำเสมอ",
      },
      {
        title: "Digital Printing",
        metrics: "ความละเอียด 1200 DPI",
        description:
          "ใช้หัวพิมพ์รุ่นล่าสุดพร้อมหมึกสูตรน้ำที่เป็นมิตรต่อสิ่งแวดล้อม ให้สีสดและไล่เฉดได้ละเอียด",
      },
      {
        title: "Finishing Lab",
        metrics: "12 บริการฟินิชชิ่ง",
        description:
          "ครบทั้งซอฟต์ทัช กันน้ำ ป้องกัน UV และการเคลือบพิเศษสำหรับงานอุตสาหกรรม",
      },
    ],
    equipmentFooter: "พร้อมทีมช่างผู้เชี่ยวชาญดูแลทุกเครื่อง",
    qualityTitle: "มาตรการควบคุมคุณภาพ",
    qualityItems: [
      {
        title: "Digital Color Lab",
        description:
          "ใช้สเปกโตรโฟโตมิเตอร์ตรวจวัดค่าสีทุกล็อต และเก็บบันทึกค่าการตั้งเครื่องเพื่อเทียบกับมาตรฐานของลูกค้า",
      },
      {
        title: "Inline Inspection",
        description:
          "กล้องตรวจสอบความบกพร่องแบบเรียลไทม์พร้อมระบบแจ้งเตือนเมื่อพบข้อผิดพลาด ช่วยลดการสูญเสียผ้า",
      },
      {
        title: "Process Analytics",
        description:
          "แดชบอร์ดติดตามประสิทธิภาพเครื่องจักร OEE และอัตราการใช้หมึก เพื่อให้ทีมบริหารสามารถตัดสินใจได้อย่างรวดเร็ว",
      },
      {
        title: "Training Hub",
        description:
          "ศูนย์ฝึกอบรมภายในสำหรับเทคโนโลยีใหม่ พร้อมโปรแกรมพัฒนาทักษะที่ปรับตามบทบาทของพนักงาน",
      },
    ],
  },
  en: {
    heroHeading: "Technology powering world-class textile printing",
    heroDescription:
      "We continually invest in advanced machinery, production management systems, and specialist teams so every client receives consistent results across urgent runs and intricate designs.",
    workflowTitle: "An end-to-end workflow",
    workflowDescription:
      "Our process connects every team on a single data flow, reducing rework and accelerating decision-making.",
    processSteps: [
      {
        title: "Consult",
        description:
          "We begin by understanding your requirements, analysing fabrics, end-use techniques, and advising on file preparation.",
      },
      {
        title: "Prototype",
        description:
          "Lab strike-offs and colour formula tuning ensure the exact shades and handfeel your brand expects.",
      },
      {
        title: "Produce",
        description:
          "Live production planning, batch-by-batch QC, and comprehensive finishing keep every order on spec.",
      },
    ],
    equipment: [
      {
        title: "Rotary printing",
        metrics: "Up to 80 metres/min",
        description:
          "Handles large volumes with automated pressure and colour flow control for sharp, repeatable results.",
      },
      {
        title: "Digital printing",
        metrics: "1200 DPI resolution",
        description:
          "Latest printheads with eco-conscious water-based inks deliver vivid gradients and fine detail.",
      },
      {
        title: "Finishing lab",
        metrics: "12 finishing services",
        description:
          "Soft-touch, water repellency, UV protection, and industrial coatings all under one roof.",
      },
    ],
    equipmentFooter: "Expert technicians maintain every line",
    qualityTitle: "Quality control measures",
    qualityItems: [
      {
        title: "Digital colour lab",
        description:
          "Spectrophotometer checks on every batch with machine settings logged against each customer benchmark.",
      },
      {
        title: "Inline inspection",
        description:
          "Real-time defect cameras and alerts reduce fabric loss across long runs.",
      },
      {
        title: "Process analytics",
        description:
          "Dashboards track OEE and ink consumption so leadership can react fast.",
      },
      {
        title: "Training hub",
        description:
          "On-site training for new technology with role-specific skill development programmes.",
      },
    ],
  },
};

export default function CapabilitiesView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 shadow">
            {sections.capabilities.title}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {copy.heroHeading}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">{copy.heroDescription}</p>
        </header>

        <section className="grid gap-6 rounded-[3rem] border border-slate-200 bg-white/95 p-12 shadow-xl lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">{copy.workflowTitle}</h2>
            <p className="text-base leading-7 text-slate-600">{copy.workflowDescription}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.processSteps.map((step) => (
                <div key={step.title} className="rounded-3xl border border-amber-100 bg-amber-50/60 p-6 text-sm text-amber-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">{step.title}</p>
                  <p className="mt-2 text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[2.5rem] border border-amber-100 bg-amber-50 shadow-lg">
            <Image
              src="/window.svg"
              alt="Production workflow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {copy.equipment.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">{item.metrics}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
              <div className="mt-auto text-sm font-medium text-amber-500">{copy.equipmentFooter}</div>
            </div>
          ))}
        </section>

        <section className="rounded-[3rem] border border-slate-200 bg-white/90 p-12 shadow-xl">
          <h2 className="text-3xl font-semibold text-slate-900">{copy.qualityTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {copy.qualityItems.map((item) => (
              <div key={item.title} className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
                <h3 className="text-lg font-semibold text-amber-800">{item.title}</h3>
                <p className="text-sm text-amber-900/80">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
