"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const processSteps = [
  {
    title: "Consult",
    description:
      "เริ่มต้นด้วยการทำความเข้าใจความต้องการของลูกค้า วิเคราะห์ผ้า เทคนิคการใช้งาน และให้คำแนะนำเรื่องการเตรียมไฟล์",
  },
  {
    title: "Prototype",
    description:
      "ทดลองพิมพ์และปรับสูตรสีร่วมกับห้องปฏิบัติการเพื่อให้สีและผิวสัมผัสตรงตามที่แบรนด์ต้องการ",
  },
  {
    title: "Produce",
    description:
      "วางแผนการผลิตแบบเรียลไทม์ ตรวจสอบคุณภาพทุกล็อต พร้อมบริการฟินิชชิ่งครบวงจร",
  },
];

const equipmentHighlights = [
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
];

export default function CapabilitiesView() {
  const { translations } = useLanguage();
  const { sections } = translations;

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600 shadow">
            {sections.capabilities.title}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            เทคโนโลยีที่สร้างมาตรฐานงานพิมพ์ระดับสากล
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            เราลงทุนอย่างต่อเนื่องในเครื่องจักรรุ่นใหม่ ระบบบริหารการผลิต และทีมผู้เชี่ยวชาญ เพื่อให้ลูกค้าได้รับผลงานที่สม่ำเสมอในทุกล็อต พร้อมตอบโจทย์งานเร่งด่วนและดีไซน์ที่ซับซ้อน
          </p>
        </header>

        <section className="grid gap-6 rounded-[3rem] border border-slate-200 bg-white/95 p-12 shadow-xl lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">เวิร์กโฟลว์แบบครบวงจร</h2>
            <p className="text-base leading-7 text-slate-600">
              กระบวนการของเราถูกออกแบบให้เชื่อมต่อทุกทีมด้วยข้อมูลเดียวกัน ช่วยลดการแก้ไขซ้ำและเพิ่มความเร็วในการตัดสินใจ
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {processSteps.map((step) => (
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
          {equipmentHighlights.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">{item.metrics}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
              <div className="mt-auto text-sm font-medium text-amber-500">พร้อมทีมช่างผู้เชี่ยวชาญดูแลทุกเครื่อง</div>
            </div>
          ))}
        </section>

        <section className="rounded-[3rem] border border-slate-200 bg-white/90 p-12 shadow-xl">
          <h2 className="text-3xl font-semibold text-slate-900">มาตรการควบคุมคุณภาพ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
              <h3 className="text-lg font-semibold text-amber-800">Digital Color Lab</h3>
              <p className="text-sm text-amber-900/80">
                ใช้สเปกโตรโฟโตมิเตอร์ตรวจวัดค่าสีทุกล็อต และเก็บบันทึกค่าการตั้งเครื่องเพื่อเทียบกับมาตรฐานของลูกค้า
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
              <h3 className="text-lg font-semibold text-amber-800">Inline Inspection</h3>
              <p className="text-sm text-amber-900/80">
                กล้องตรวจสอบความบกพร่องแบบเรียลไทม์พร้อมระบบแจ้งเตือนเมื่อพบข้อผิดพลาด ช่วยลดการสูญเสียผ้า
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
              <h3 className="text-lg font-semibold text-amber-800">Process Analytics</h3>
              <p className="text-sm text-amber-900/80">
                แดชบอร์ดติดตามประสิทธิภาพเครื่องจักร OEE และอัตราการใช้หมึก เพื่อให้ทีมบริหารสามารถตัดสินใจได้อย่างรวดเร็ว
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50/60 p-6">
              <h3 className="text-lg font-semibold text-amber-800">Training Hub</h3>
              <p className="text-sm text-amber-900/80">
                ศูนย์ฝึกอบรมภายในสำหรับเทคโนโลยีใหม่ พร้อมโปรแกรมพัฒนาทักษะที่ปรับตามบทบาทของพนักงาน
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
