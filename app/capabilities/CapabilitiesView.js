"use client";

import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    heroHeading: "ความสามารถด้านงานพิมพ์ผ้า",
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
    <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <ul className={`grid gap-2 text-sm text-slate-700 ${columnsClass}`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500"
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
    <div className="space-y-3 rounded-3xl border border-amber-200 bg-amber-50 p-8 text-sm text-amber-900 shadow-sm">
      <h2 className="text-xl font-semibold text-amber-800">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function CapabilitiesView() {
  const { language, translations } = useLanguage();
  const { sections } = translations;
  const copy = pageCopy[language];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-20 lg:px-8">
        <header className="space-y-6">
        
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {copy.heroHeading}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">{copy.heroDescription}</p>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
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
