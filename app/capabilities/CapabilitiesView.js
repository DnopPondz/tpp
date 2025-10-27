"use client";

import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "ขีดความสามารถด้านงานพิมพ์ผ้า",
    heroDescription:
      "เรารองรับงานพิมพ์ผ้าทั้งแบบ Reactive, Disperse และ Pigment พร้อมควบคุมคุณภาพตั้งแต่การป้อนผ้าไปจนถึงฟินิชชิ่ง เพื่อให้งานทุกชิ้นตอบโจทย์การใช้งานของลูกค้า",
    clothWidth: {
      title: "ความกว้างของผ้า (Cloth width)",
      description:
        "ผ้ากว้างพิเศษสำหรับงานพิมพ์ Reactive, Disperse และ Pigment ผลิตได้สูงสุด 60″",
    },
    fabricTypes: {
      title: "ชนิดผ้า (Fabric type)",
      items: [
        "ผ้าอะคริลิค (Acrylic)",
        "ผ้าคอตตอน (Cotton)",
        "ผ้าคอตตอนผสม (Cotton blend)",
        "ผ้าคอตตอนอินเตอร์ล็อก (Cotton interlock)",
        "ผ้าคอตตอนทวิลล์ (Cotton twill)",
        "ผ้าไนลอน (Nylon)",
        "ผ้าไนลอนผสม (Nylon blend)",
        "ผ้าโพลีเอสเตอร์ (Polyester)",
        "ผ้าโพลีเอสเตอร์ผสม (Polyester blend)",
        "ผ้าโพลีเอสเตอร์อินเตอร์ล็อก (Polyester blend interlock)",
        "ผ้าโพลีเอสเตอร์พีพี (Polyester blend PP)",
        "ผ้าโพรพิลีน (PP)",
        "ผ้าเรยอน (Rayon)",
        "ผ้าเรยอนผสม (Rayon blend)",
        "ผ้าไลครา (Spandex)",
        "ผ้า TC (TC)",
        "ผ้า TR (TR)",
        "ผ้าขนแกะ (Fleece)",
        "ผ้าคอมบ์คอตตอน (Combed cotton)",
        "ผ้าซาติน (Satin)",
        "ผ้าชีฟอง (Chiffon)",
        "ผ้าไผ่ (Bamboo)",
        "ผ้า PVC 600D (PVC 600D)",
        "ผ้าสปันบอนด์ (Spunbond Non-Woven)",
      ],
    },
    specialFeatures: {
      title: "คุณสมบัติพิเศษ (Special features)",
      items: [
        "ระบบป้อนผ้าแบบต่อเนื่อง (Continuous fabric feeding)",
        "เครื่องปรับผ้าให้เรียบและตึงก่อนพิมพ์ (Wet-straightener)",
        "การเสริมความยืดหยุ่นและป้องกันการหดตัวด้วยเครื่อง Comfit",
      ],
    },
    designTypes: {
      title: "ประเภทลายพิมพ์ (Design types)",
      items: [
        "ลายพราง (Camouflage)",
        "ลายชาติพันธุ์ (Ethnic)",
        "ลายดอกไม้ (Floral)",
        "ลายทั่วไป (General)",
        "ลายเรขาคณิต (Geometric)",
        "ลายศิลป์ (Abstract)",
      ],
    },
    finishes: {
      title: "ลักษณะฟินิชชิ่ง (Kind of finish)",
      items: [
        "แบบ Calendering",
        "แบบกันไฟ (Flame-proof)",
        "แบบ Shrink-proof",
        "แบบ Soil release",
        "แบบ Water repellent",
      ],
    },
  },
  en: {
    heroHeading: "Comprehensive textile printing capabilities",
    heroDescription:
      "We support reactive, disperse, and pigment production with tightly managed workflows from fabric feeding to finishing so every order performs exactly as required.",
    clothWidth: {
      title: "Cloth width",
      description:
        "Max. 60″ for reactive, disperse, and pigment print runs",
    },
    fabricTypes: {
      title: "Fabric type",
      items: [
        "Acrylic",
        "Cotton",
        "Cotton blend",
        "Cotton interlock",
        "Cotton twill",
        "Nylon",
        "Nylon blend",
        "Polyester",
        "Polyester blend",
        "Polyester blend interlock",
        "Polyester blend PP",
        "Polypropylene (PP)",
        "Rayon",
        "Rayon blend",
        "Spandex",
        "TC",
        "TR",
        "Fleece",
        "Combed cotton",
        "Satin",
        "Chiffon",
        "Bamboo",
        "PVC 600D",
        "Spunbond non-woven",
      ],
    },
    specialFeatures: {
      title: "Special features",
      items: [
        "Continuous fabric feeding",
        "Wet-straightener",
        "Elastic improvement and shrink-proof processing by Comfit machine",
      ],
    },
    designTypes: {
      title: "Design types",
      items: [
        "Camouflage",
        "Ethnic",
        "Floral",
        "General",
        "Geometric",
        "Abstract",
      ],
    },
    finishes: {
      title: "Kind of finish",
      items: [
        "Calendering",
        "Flame-proof",
        "Shrink-proof",
        "Soil release",
        "Water repellant",
      ],
    },
  },
};

function ListCard({ title, items, columnsClass = "" }) {
  return (
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
      <ul className={`grid gap-2 text-sm text-slate-700 dark:text-slate-300 ${columnsClass}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailCard({ title, description }) {
  return (
    <div className="space-y-3 rounded-3xl border border-blue-100 bg-blue-50/60 p-8 text-sm text-slate-800 shadow-sm transition-colors duration-300 dark:border-blue-900 dark:bg-blue-950/40 dark:text-slate-200">
      <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function CapabilitiesView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];

  return (
    <div className="theme-surface">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-6 rounded-[3rem] border border-slate-200 bg-white p-10 text-center shadow-2xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow dark:bg-blue-950/50 dark:text-blue-200">
            {sections.capabilities.title}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {copy.heroHeading}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{copy.heroDescription}</p>
        </header>

        <section className="grid gap-8 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div className="space-y-8">
            <DetailCard {...copy.clothWidth} />
            <ListCard {...copy.fabricTypes} columnsClass="sm:grid-cols-2" />
          </div>
          <div className="space-y-8">
            <ListCard {...copy.specialFeatures} />
            <ListCard {...copy.designTypes} columnsClass="sm:grid-cols-2" />
            <ListCard {...copy.finishes} />
          </div>
        </section>
      </div>
    </div>
  );
}
