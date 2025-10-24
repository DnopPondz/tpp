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
    },
  ],
};

export default function Home() {
  const { language, translations } = useLanguage();
  const { brand, hero, sections } = translations;
  const slides = useMemo(() => heroSlides[language], [language]);
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

  return (
    <div className="mx-auto max-w-6xl space-y-24 px-6 pt-24 lg:px-8">
      <section id="hero" className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
            {brand.tagline}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="text-lg leading-8 text-slate-600">{brand.slogan}</p>
          <p className="text-base leading-7 text-slate-600">{hero.subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-amber-600">
              {hero.primaryCta}
            </button>
            <button className="rounded-full border border-amber-400 px-6 py-3 text-base font-semibold text-amber-600 transition hover:border-amber-500 hover:text-amber-700">
              {hero.secondaryCta}
            </button>
          </div>
          <ul className="grid gap-3 pt-6 text-sm text-slate-600 sm:grid-cols-2">
            {hero.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">★</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[28rem] w-full overflow-hidden rounded-[2.5rem] border border-amber-100 bg-amber-50 shadow-xl">
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={index !== currentSlide}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
                className={`h-2.5 w-8 rounded-full transition ${
                  index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`${index + 1} / ${slides.length}`}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-200">
              {slides[currentSlide]?.label}
            </p>
            <div className="mt-2 space-y-1 text-sm sm:text-base">
              <p className="text-lg font-semibold sm:text-xl">{slides[currentSlide]?.title}</p>
              <p>{slides[currentSlide]?.material}</p>
              <p>{slides[currentSlide]?.width}</p>
              <p>{slides[currentSlide]?.usage}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">{sections.about.title}</h2>
          <p className="text-base leading-7 text-slate-600">{sections.about.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.about.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                {pillar.title}
              </span>
              <p className="text-sm text-slate-600">{pillar.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="space-y-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-slate-900">{sections.capabilities.title}</h2>
          <p className="text-base text-slate-600">
            {hero.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.capabilities.items.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </div>
              <span className="text-sm font-medium text-amber-500">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="space-y-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-slate-900">{sections.products.title}</h2>
          <p className="text-base text-slate-600">{sections.products.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {sections.products.categories.map((category) => (
            <div
              key={category.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="text-sm text-slate-600">{category.detail}</p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-amber-500">
                <span>→</span>
                <span>{hero.primaryCta}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="news" className="space-y-8">
        <h2 className="text-3xl font-semibold text-slate-900">{sections.news.title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.news.articles.map((article) => (
            <article
              key={article.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{article.title}</h3>
              <p className="text-sm text-slate-600">{article.summary}</p>
              <button className="mt-auto w-fit rounded-full border border-amber-400 px-4 py-2 text-sm font-medium text-amber-600 transition hover:border-amber-500 hover:text-amber-700">
                {hero.secondaryCta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="grid items-center gap-8 rounded-[2.5rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-amber-100 p-10 shadow-xl lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-900">{sections.contact.title}</h2>
          <p className="text-base text-slate-700">{sections.contact.description}</p>
          <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-amber-600">{sections.contact.phoneLabel}</p>
              <p>+66 (0)2735 9109-10</p>
              <p>+66 (0)2182 3306</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-amber-600">{sections.contact.emailLabel}</p>
              <p>sales@thaipaipan.com</p>
              <p>service@thaipaipan.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-slate-900">{brand.tagline}</h3>
          <p className="text-sm text-slate-600">
            {brand.slogan}
          </p>
          <button className="rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-amber-600">
            {hero.primaryCta}
          </button>
        </div>
      </section>
    </div>
  );
}
