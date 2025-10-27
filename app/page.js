"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const heroSlides = {
  th: [
    {
      id: "rayon-batik",
      image: "/fabrics/rayon-batik.svg",
      alt: "ลายผ้าสีเหลืองชมพูแบบบาติก",
      label: "โชว์เคสผ้าพิมพ์พรีเมียม",
      title: "ลายผ้า: 1502",
      material: "ชนิดผ้า: เรยอน",
      width: "หน้ากว้าง: 44/45\"",
      usage: "การใช้งาน: ชุดลำลอง",
      description: "เรยอนสัมผัสนุ่ม พริ้วไหว พร้อมลายบาติกที่ให้มิติสีสันสดใส",
    },
    {
      id: "cotton-satin",
      image: "/fabrics/cotton-satin.svg",
      alt: "ผ้าคอตตอนซาตินสีเหลืองพาสเทลพร้อมลายกราฟิก",
      label: "โชว์เคสผ้าพิมพ์พรีเมียม",
      title: "ลายผ้า: 2210",
      material: "ชนิดผ้า: คอตตอนซาติน",
      width: "หน้ากว้าง: 58\"",
      usage: "การใช้งาน: ชุดเดรสและเชิ้ต",
      description: "ผิวสัมผัสนุ่มลื่น ให้สีพิมพ์อิ่มตัวเหมาะกับเสื้อผ้าแฟชั่น",
    },
    {
      id: "linen-texture",
      image: "/fabrics/linen-texture.svg",
      alt: "พื้นผ้าลินินสีฟ้าอมเขียวพร้อมลายทอ",
      label: "โชว์เคสผ้าพิมพ์พรีเมียม",
      title: "ลายผ้า: 3045",
      material: "ชนิดผ้า: ลินินผสม",
      width: "หน้ากว้าง: 57\"",
      usage: "การใช้งาน: ของตกแต่งบ้าน",
      description: "ลินินผสมโทนเย็น เพิ่มบรรยากาศสบายให้กับงานตกแต่งภายใน",
    },
    {
      id: "polyester-tech",
      image: "/fabrics/polyester-tech.svg",
      alt: "ผ้าโพลีเอสเตอร์ลายเรขาคณิตสีม่วงน้ำเงิน",
      label: "โชว์เคสผ้าพิมพ์พรีเมียม",
      title: "ลายผ้า: 4128",
      material: "ชนิดผ้า: โพลีเอสเตอร์",
      width: "หน้ากว้าง: 60\"",
      usage: "การใช้งาน: ชุดกีฬา",
      description: "โพลีเอสเตอร์น้ำหนักเบา แห้งไว พร้อมลายเทคนิคสีตัดกัน",
    },
  ],
  en: [
    {
      id: "rayon-batik",
      image: "/fabrics/rayon-batik.svg",
      alt: "Yellow and magenta batik fabric pattern",
      label: "Premium Textile Showcase",
      title: "Pattern ID: 1502",
      material: "Fabric: Rayon",
      width: "Width: 44/45\"",
      usage: "Application: Resort wear",
      description: "Fluid rayon with a vibrant batik palette for statement resort pieces.",
    },
    {
      id: "cotton-satin",
      image: "/fabrics/cotton-satin.svg",
      alt: "Pastel yellow cotton satin fabric with graphic motifs",
      label: "Premium Textile Showcase",
      title: "Pattern ID: 2210",
      material: "Fabric: Cotton satin",
      width: "Width: 58\"",
      usage: "Application: Dresses & shirts",
      description: "Luxurious cotton satin delivering rich colour for contemporary apparel.",
    },
    {
      id: "linen-texture",
      image: "/fabrics/linen-texture.svg",
      alt: "Teal linen blend fabric texture",
      label: "Premium Textile Showcase",
      title: "Pattern ID: 3045",
      material: "Fabric: Linen blend",
      width: "Width: 57\"",
      usage: "Application: Home décor",
      description: "Cooling linen blend that adds a tactile layer to interior accents.",
    },
    {
      id: "polyester-tech",
      image: "/fabrics/polyester-tech.svg",
      alt: "Purple and blue geometric technical knit fabric",
      label: "Premium Textile Showcase",
      title: "Pattern ID: 4128",
      material: "Fabric: Polyester",
      width: "Width: 60\"",
      usage: "Application: Activewear",
      description: "Lightweight polyester engineered for quick-dry performance gear.",
    },
  ],
};

export default function Home() {
  const { language, translations } = useLanguage();
  const { brand, hero, sections, footer } = translations;
  const slides = useMemo(() => heroSlides[language] ?? [], [language]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [language]);

  useEffect(() => {
    if (!slides.length) {
      return undefined;
    }

    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [slides]);

  const activeSlide = slides[currentSlide] ?? slides[0] ?? null;

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-32 lg:px-8">
        <section className="relative overflow-hidden rounded-[3rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-10 shadow-2xl lg:p-14">
          <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8 text-slate-100">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-blue-400/40 bg-slate-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  {brand.tagline}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {hero.headline}
                </h1>
                <p className="text-lg leading-8 text-slate-300">{hero.subtitle}</p>
                <p className="text-base leading-7 text-slate-300">{hero.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-600">
                  {hero.primaryCta}
                </button>
                <button className="rounded-full border border-blue-400 bg-slate-900/70 px-6 py-3 text-base font-semibold text-blue-200 transition hover:border-blue-300 hover:text-white">
                  {hero.secondaryCta}
                </button>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {hero.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm"
                  >
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-200">
                      ★
                    </span>
                    <span className="text-sm leading-6 text-slate-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative h-[26rem] overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-slate-900/50 shadow-2xl">
                <div className="absolute inset-0">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                      aria-hidden={index !== currentSlide}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute right-6 top-6 flex gap-2">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 w-8 rounded-full transition ${index === currentSlide ? "bg-blue-400" : "bg-blue-400/40 hover:bg-blue-400/70"}`}
                      aria-label={`${index + 1} / ${slides.length}`}
                    />
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 text-white" aria-live="polite">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-200/90">{activeSlide?.label}</p>
                  <div className="mt-3 space-y-1 text-sm sm:text-base">
                    <p className="text-lg font-semibold sm:text-xl">{activeSlide?.title}</p>
                    <p>{activeSlide?.material}</p>
                    <p>{activeSlide?.width}</p>
                    <p>{activeSlide?.usage}</p>
                    <p className="pt-1 text-xs font-medium text-white/80 sm:text-sm">{activeSlide?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-3">
            {hero.metrics?.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-blue-500/20 bg-slate-900/60 p-4 text-center shadow-sm backdrop-blur"
              >
                <p className="text-3xl font-bold text-blue-200">{metric.value}</p>
                <p className="text-sm font-medium text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 rounded-[3rem] border border-slate-800 bg-white/95 p-10 shadow-xl lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{sections.about.title}</p>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{sections.about.description}</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-600">
              {sections.about.story?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {sections.about.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex h-full flex-col gap-2 rounded-2xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    {pillar.title}
                  </span>
                  <p className="text-sm text-slate-600">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-full flex-col justify-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-slate-100/40" />
              <div className="relative space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900">{brand.slogan}</h3>
                <p className="text-sm leading-7 text-slate-600">{sections.capabilities.summary}</p>
                {activeSlide ? (
                  <div className="relative h-52 overflow-hidden rounded-3xl border border-blue-100 bg-blue-50">
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10 rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-xl lg:p-14">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.capabilities.title}</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{sections.capabilities.summary}</h2>
            <p className="text-base text-slate-600">{hero.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.capabilities.items.map((item, index) => (
              <div
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 text-left shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-semibold text-blue-600">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
                <span className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-[3rem] border border-slate-800 bg-white/95 p-10 shadow-xl lg:p-14">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.process.title}</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{sections.process.subtitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sections.process.steps.map((step, index) => (
              <div
                key={step.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-base font-semibold text-blue-600">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[3rem] border border-slate-800 bg-white/95 p-10 shadow-xl lg:p-14">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.products.title}</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{sections.products.description}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.products.categories.map((category) => (
              <article
                key={category.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-slate-100/30" />
                <div className="relative flex h-full flex-col gap-4">
                  <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{category.detail}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <span>→</span>
                    <span>{hero.primaryCta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[3rem] border border-slate-800 bg-white/95 p-10 shadow-xl lg:p-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.news.title}</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">{brand.slogan}</h2>
            </div>
            <button className="hidden rounded-full border border-blue-400 px-5 py-2 text-sm font-medium text-blue-600 transition hover:border-blue-500 hover:text-blue-700 sm:block">
              {hero.secondaryCta}
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sections.news.articles.map((article) => (
              <article
                key={article.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{article.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{article.summary}</p>
                <button className="mt-auto w-fit rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-blue-600 transition hover:border-blue-500 hover:text-blue-700">
                  {hero.secondaryCta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-[3rem] border border-slate-800 bg-gradient-to-br from-white via-blue-50 to-slate-100 p-10 shadow-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.contact.title}</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{sections.contact.description}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{sections.contact.phoneLabel}</p>
                <p className="text-base text-slate-700">+66 (0)2735 9109-10</p>
                <p className="text-base text-slate-700">+66 (0)2182 3306</p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{sections.contact.emailLabel}</p>
                <p className="text-base text-slate-700">sales@thaipaipan.com</p>
                <p className="text-base text-slate-700">service@thaipaipan.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur">
            <h3 className="text-2xl font-semibold text-slate-900">{sections.cta.title}</h3>
            <p className="text-sm leading-6 text-slate-600">{sections.cta.description}</p>
            <div className="space-y-3 text-sm text-slate-500">
              {footer.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <button className="w-full rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-700">
              {sections.cta.button}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

