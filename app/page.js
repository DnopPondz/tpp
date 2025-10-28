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
    <div className="theme-surface relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/30" />
        <div className="absolute right-[-18rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-[140px] dark:bg-indigo-500/30" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-300/15 blur-3xl dark:bg-blue-700/20" />
      </div>
      <div className="relative mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-32 lg:px-8">
        <section className="theme-panel panel-aura relative overflow-hidden rounded-[3rem] border border-border-subtle p-10 shadow-2xl transition-colors duration-300 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8 text-foreground/80">
              <div className="space-y-4">
                <span className="floating-badge">
                  {brand.tagline}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {hero.headline}
                </h1>
                <p className="text-lg leading-8">{hero.subtitle}</p>
                <p className="text-base leading-7">{hero.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="cta-primary">
                  {hero.primaryCta}
                </button>
                <button className="cta-secondary">
                  {hero.secondaryCta}
                </button>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                {hero.highlights.map((highlight) => (
                  <li key={highlight} className="card-elevated theme-card flex items-start gap-3 rounded-2xl border p-4 shadow-sm">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted text-sm font-semibold text-blue-600">
                      ★
                    </span>
                    <span className="text-sm leading-6">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated theme-card relative h-[26rem] overflow-hidden rounded-[2.5rem] border shadow-2xl transition-colors duration-300">
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
                    className={`h-2.5 w-8 rounded-full transition ${index === currentSlide ? "bg-blue-500" : "bg-blue-500/30 hover:bg-blue-500/60"}`}
                    aria-label={`${index + 1} / ${slides.length}`}
                  />
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent p-6 text-foreground/80" aria-live="polite">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600/80">{activeSlide?.label}</p>
                <div className="mt-3 space-y-1 text-sm sm:text-base">
                  <p className="text-lg font-semibold text-foreground sm:text-xl">{activeSlide?.title}</p>
                  <p>{activeSlide?.material}</p>
                  <p>{activeSlide?.width}</p>
                  <p>{activeSlide?.usage}</p>
                  <p className="pt-1 text-xs font-medium sm:text-sm">{activeSlide?.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {hero.metrics?.map((metric) => (
              <div key={metric.label} className="card-elevated theme-card rounded-2xl border p-6 text-center shadow-sm">
                <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                <p className="text-sm font-medium text-foreground/80">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="theme-panel panel-aura grid gap-12 rounded-[3rem] border border-border-subtle p-10 shadow-xl transition-colors duration-300 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">{sections.about.title}</p>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{sections.about.description}</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-foreground/80">
              {sections.about.story?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {sections.about.pillars.map((pillar) => (
                <div key={pillar.title} className="card-elevated theme-card flex h-full flex-col gap-2 rounded-2xl border p-5 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    {pillar.title}
                  </span>
                  <p className="text-sm text-foreground/80">{pillar.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex h-full flex-col justify-center">
            <div className="card-elevated theme-card relative overflow-hidden rounded-[2.5rem] border p-8 shadow-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">{brand.slogan}</h3>
                <p className="text-sm leading-7 text-foreground/80">{sections.capabilities.summary}</p>
                {activeSlide ? (
                  <div className="card-elevated theme-card relative h-52 overflow-hidden rounded-3xl border">
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

        <section className="theme-panel panel-aura space-y-10 rounded-[2.5rem] border border-border-subtle p-10 shadow-xl transition-colors duration-300 lg:p-14">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.capabilities.title}</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{sections.capabilities.summary}</h2>
            <p className="text-base text-foreground/80">{hero.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.capabilities.items.map((item, index) => (
              <div key={item.title} className="card-elevated theme-card flex h-full flex-col gap-4 rounded-3xl border p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-base font-semibold text-blue-600">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-foreground/80">{item.detail}</p>
                </div>
                <span className="mt-auto text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="theme-panel panel-aura space-y-8 rounded-[3rem] border border-border-subtle p-10 shadow-xl transition-colors duration-300 lg:p-14">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.process.title}</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{sections.process.subtitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sections.process.steps.map((step, index) => (
              <div key={step.title} className="card-elevated theme-card flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-base font-semibold text-blue-600">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-6 text-foreground/80">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="theme-panel panel-aura space-y-10 rounded-[3rem] border border-border-subtle p-10 shadow-xl transition-colors duration-300 lg:p-14">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.products.title}</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{sections.products.description}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.products.categories.map((category) => (
              <article
                key={category.title}
                className="card-elevated theme-card group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1"
              >
                <div className="relative flex h-full flex-col gap-4">
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  <p className="text-sm leading-6 text-foreground/80">{category.detail}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:text-blue-500">
                    <span className="transition group-hover:translate-x-1">→</span>
                    <span>{hero.primaryCta}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="theme-panel panel-aura space-y-10 rounded-[3rem] border border-border-subtle p-10 shadow-xl transition-colors duration-300 lg:p-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.news.title}</p>
              <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">{brand.slogan}</h2>
            </div>
            <button className="cta-secondary hidden px-5 py-2 text-sm sm:inline-flex">
              {hero.secondaryCta}
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {sections.news.articles.map((article) => (
              <article
                key={article.title}
                className="card-elevated theme-card flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                <p className="text-sm leading-6 text-foreground/80">{article.summary}</p>
                <button className="cta-secondary mt-auto px-4 py-2 text-sm">
                  {hero.secondaryCta}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="theme-panel panel-aura grid gap-10 rounded-[3rem] border border-border-subtle p-10 shadow-xl transition-colors duration-300 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">{sections.contact.title}</p>
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{sections.contact.description}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-elevated theme-card rounded-2xl border p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{sections.contact.phoneLabel}</p>
                <p className="text-base text-foreground/80">+66 (0)2735 9109-10</p>
                <p className="text-base text-foreground/80">+66 (0)2182 3306</p>
              </div>
              <div className="card-elevated theme-card rounded-2xl border p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{sections.contact.emailLabel}</p>
                <p className="text-base text-foreground/80">sales@thaipaipan.com</p>
                <p className="text-base text-foreground/80">service@thaipaipan.com</p>
              </div>
            </div>
          </div>
          <div className="card-elevated theme-card flex flex-col gap-5 rounded-3xl border p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground">{sections.cta.title}</h3>
            <p className="text-sm leading-6 text-foreground/80">{sections.cta.description}</p>
            <div className="space-y-3 text-sm text-foreground/70">
              {footer.hours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <button className="cta-primary w-full">
              {sections.cta.button}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

