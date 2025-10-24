"use client";

import { useLanguage } from "@/components/LanguageProvider";

const pageCopy = {
  th: {
    introHeading: "ไทยไทพ์แพส เป็นบริษัทสิ่งพิมพ์ทางอุตสาหกรรม",
    introParagraphs: [
      "ทางบริษัทก่อตั้งที่จังหวัดสมุทรปราการตั้งแต่ปี พ.ศ. 2527 และเติบโตมาพร้อมกับความมุ่งมั่นในการให้บริการงานพิมพ์คุณภาพสำหรับลูกค้าทั่วประเทศและต่างประเทศ ด้วยเทคโนโลยีการผลิตที่ทันสมัยและทีมงานมืออาชีพที่ใส่ใจในทุกขั้นตอน",
      "จากประสบการณ์ในวงการสิ่งทออุตสาหกรรมพิมพ์ที่ยาวนาน เราขยายฐานลูกค้าให้ครอบคลุมตั้งแต่งานแฟชั่น งานตกแต่งบ้าน งานอุตสาหกรรม ไปจนถึงโซลูชันเฉพาะทางอื่น ๆ เพื่อรองรับความต้องการที่หลากหลายของแต่ละธุรกิจ",
    ],
    galleryPlaceholders: [
      "พื้นที่สำหรับภาพโรงงาน",
      "พื้นที่สำหรับภาพสายการผลิต",
      "พื้นที่สำหรับภาพทีมงาน",
      "พื้นที่สำหรับภาพผลิตภัณฑ์",
    ],
    philosophyTitle: "ปรัชญาสูงสุดของเรา",
    philosophyStatement: "คุณภาพยอดเยี่ยม ส่งมอบรวดเร็ว ราคาคุ้มค่า",
    serviceTitle: "ประเภทงานบริการ",
    serviceItems: [
      "ผลิตตามความต้องการของลูกค้า (Made to order)",
      "ให้คำปรึกษาและร่วมออกแบบผลิตภัณฑ์",
    ],
    environmentTitle: "การควบคุมสิ่งแวดล้อม",
    environmentParagraphs: [
      "เราคำนึงถึงความรับผิดชอบต่อสังคมและสิ่งแวดล้อมอยู่เสมอ จึงควบคุมการใช้และการกำจัดของเสียทางเคมีอย่างเข้มงวด พร้อมตรวจสอบคุณภาพน้ำเสียก่อนปล่อยสู่สิ่งแวดล้อม",
      "ระบบบำบัดน้ำเสียได้รับการพัฒนาอย่างต่อเนื่อง เพื่อให้การควบคุมมลภาวะมีประสิทธิภาพสูงสุด",
    ],
    safetyTitle: "การจัดการสุขภาพและความปลอดภัย",
    safetyParagraphs: [
      "นอกจากการดูแลสิ่งแวดล้อม เรายังให้ความสำคัญกับสุขภาพและความปลอดภัยของพนักงานทุกคน",
      "เราจัดอบรมทั้งหลักสูตรทั่วไปและหลักสูตรความปลอดภัยเฉพาะทาง เพื่อให้ทีมงานทำงานได้อย่างมั่นใจและปลอดภัยในทุกวัน",
    ],
    learningTitle: "การเรียนรู้",
    learningQuote: "ไม่มีใครแก่เกินเรียน",
    learningParagraphs: [
      "บริษัทฯ สนับสนุนให้บุคลากรพัฒนาความรู้และทักษะอย่างต่อเนื่อง ทั้งด้านภาษา เทคโนโลยี และการจัดการ เพื่อเตรียมพร้อมรับความเปลี่ยนแปลงของอุตสาหกรรม",
      "เราส่งเสริมให้พนักงานเข้าร่วมการอบรม สัมมนา และเวิร์กช็อปทั้งในและต่างประเทศ เพื่อนำความรู้ใหม่กลับมาพัฒนางานให้มีประสิทธิภาพอยู่เสมอ",
    ],
    exhibitionsTitle: "นิทรรศการ",
    exhibitions: [
      {
        name: "งาน BIFF & BIL 2004",
        dateRange: "วันที่ 19/10/2547 - 21/10/2547",
        location: "ไบเทค บางนา ประเทศไทย",
      },
      {
        name: "งาน Thailand Exhibition 2003",
        dateRange: "วันที่ 10/06/2546 - 14/06/2546",
        location: "Sandton Convention Center, Johannesburg, South Africa",
      },
    ],
  },
  en: {
    introHeading: "Thaipaipan Co., Ltd is the textile printing & finishing company in Thailand",
    introParagraphs: [
      "Founded in Samutprakarn province in 1984, we have remained committed to delivering outstanding textile printing services for customers across Thailand and overseas. Our modern production technology and dedicated professionals take care of every detail from start to finish.",
      "With decades of industrial textile experience, we now serve a wide spectrum of clients spanning fashion labels, home décor brands, industrial applications, and tailored solutions for specialised needs.",
    ],
    galleryPlaceholders: [
      "Add factory photo",
      "Add production line photo",
      "Add team photo",
      "Add product showcase photo",
    ],
    philosophyTitle: "Our ultimate philosophy",
    philosophyStatement: "Best quality, Fast delivery, Competitive price",
    serviceTitle: "Type of provided service",
    serviceItems: ["Make to order", "Product design focus"],
    environmentTitle: "Environmental control",
    environmentParagraphs: [
      "Social and environmental responsibilities are always at the forefront. We control the usage and disposal of chemical waste and continuously monitor wastewater quality before releasing it back into the environment.",
      "Our wastewater treatment system is regularly upgraded to keep pollution under control and ensure long-term sustainability.",
    ],
    safetyTitle: "Health & Safety management",
    safetyParagraphs: [
      "Beyond environmental stewardship, the health and safety of our staff remain a top priority.",
      "We provide both general and specialised safety training so every member of the team can work with confidence in a secure environment.",
    ],
    learningTitle: "Learning",
    learningQuote: "No one is too old to learn something new",
    learningParagraphs: [
      "The company encourages continuous learning in language, technology, and management so our people are ready for whatever comes next.",
      "Throughout the year, our staff can join local and overseas training programmes, seminars, and workshops, bringing back new knowledge to elevate their work.",
    ],
    exhibitionsTitle: "Exhibitions",
    exhibitions: [
      {
        name: "BIFF & BIL 2004",
        dateRange: "Time: 19/10/2004 - 21/10/2004",
        location: "Venue: Bangkok, Thailand",
      },
      {
        name: "Thailand Exhibition 2003",
        dateRange: "Time: 10/06/2003 - 14/06/2003",
        location: "Venue: Sandton Convention Center, Johannesburg, South Africa",
      },
    ],
  },
};

export default function AboutView() {
  const { language, translations } = useLanguage();
  const { brand } = translations;
  const copy = pageCopy[language];

  return (
    <div className="bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-20 px-6 pb-24 pt-16 lg:px-8">
        <header className="grid gap-12 rounded-[3rem] border border-slate-200 bg-white/80 p-10 shadow-xl backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{brand.tagline}</p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">{copy.introHeading}</h1>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-700">
              {copy.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.galleryPlaceholders.map((label) => (
              <div
                key={label}
                className="relative flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-100 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
                aria-hidden="true"
              >
                {label}
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-12 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-lg lg:grid-cols-[1fr_0.8fr] lg:p-16">
          <div className="space-y-10 text-slate-700">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
              <h2 className="text-2xl font-semibold text-slate-900">{copy.philosophyTitle}</h2>
              <p className="text-lg font-medium text-slate-800">“{copy.philosophyStatement}”</p>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.serviceTitle}</h3>
              <ul className="space-y-3 text-base leading-7">
                {copy.serviceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.environmentTitle}</h3>
              <div className="space-y-4 text-base leading-7">
                {copy.environmentParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.safetyTitle}</h3>
              <div className="space-y-4 text-base leading-7">
                {copy.safetyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-10 text-slate-700">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50/70 p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">{copy.learningTitle}</p>
                <p className="mt-4 text-2xl font-semibold text-slate-900">“{copy.learningQuote}”</p>
              </div>
              <div className="space-y-4 text-base leading-7">
                {copy.learningParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-inner">
              <h3 className="text-xl font-semibold text-slate-900">{copy.exhibitionsTitle}</h3>
              <ul className="space-y-6 text-base leading-7">
                {copy.exhibitions.map((item) => (
                  <li key={item.name} className="space-y-2">
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p>{item.dateRange}</p>
                    <p className="text-slate-600">{item.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
