"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getLocalizedCollections, getLocalizedPosts } from "./blog";

const copy = {
  th: {
    eyebrow: "Knowledge Hub",
    heroTitle: "บทความและอินไซต์เพื่อธุรกิจสิ่งทอของคุณ",
    heroDescription:
      "ติดตามบทความเชิงลึก เทคนิคการผลิต และไอเดียใหม่ ๆ ที่คัดสรรโดยทีมผู้เชี่ยวชาญของไทยพีพาน เพื่อยกระดับงานพิมพ์ผ้าของคุณให้โดดเด่น",
    summaryLabel: "เรื่องเด่นประจำเดือน",
    highlightListTitle: "สรุปประเด็นเด่น",
    newsletterTitle: "รับอัปเดตทุกเดือน",
    newsletterDescription:
      "ฝากอีเมลเพื่อรับบทความใหม่ก่อนใคร พร้อมแนวทางพัฒนากระบวนการผลิตจากทีมเรา",
    newsletterCta: "สมัครรับจดหมายข่าว",
    allArticlesTitle: "บทความทั้งหมด",
    allArticlesDescription: "เรียนรู้ทุกมุมมอง ตั้งแต่การออกแบบจนถึงการผลิตจริงในโรงงาน",
    backToHome: "กลับหน้าแรก",
    readFullCta: "อ่านบทความฉบับเต็ม",
  },
  en: {
    eyebrow: "Knowledge Hub",
    heroTitle: "Articles and insights for your textile business",
    heroDescription:
      "Stay close to deep-dive features, production techniques, and fresh ideas curated by ThaiPaipan experts to elevate every print run.",
    summaryLabel: "Feature of the month",
    highlightListTitle: "Key talking points",
    newsletterTitle: "Monthly insights",
    newsletterDescription:
      "Leave your email to receive new articles first, complete with practical process improvements from our team.",
    newsletterCta: "Subscribe to the newsletter",
    allArticlesTitle: "All articles",
    allArticlesDescription: "Explore every perspective—from design prep to full-scale manufacturing.",
    backToHome: "Back to homepage",
    readFullCta: "Read the full story",
  },
};

const formatDate = (value, language) => {
  const locale = language === "th" ? "th-TH" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
};

export default function BlogView() {
  const { language } = useLanguage();
  const posts = useMemo(() => getLocalizedPosts(language), [language]);
  const collections = useMemo(
    () => getLocalizedCollections(language),
    [language]
  );
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const regularPosts = posts.filter((post) => post.slug !== featuredPost.slug);
  const uniqueTags = useMemo(
    () => Array.from(new Set(posts.flatMap((post) => post.tags))),
    [posts]
  );
  const t = copy[language];

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-28 lg:px-8">
        <header className="grid gap-10 rounded-[3rem] border border-amber-100 bg-white/80 p-10 shadow-xl backdrop-blur">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              {t.eyebrow}
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {t.heroTitle}
              </h1>
              <p className="text-lg leading-8 text-slate-600">{t.heroDescription}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-amber-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className={`rounded-3xl border border-transparent bg-gradient-to-br ${collection.accent} p-[1px] shadow-lg`}
              >
                <div className="h-full rounded-[calc(1.5rem-1px)] bg-white/95 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {collection.title}
                  </p>
                  <p className="mt-2 text-base text-slate-700">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-2xl">
            <div className="relative h-[22rem] w-full overflow-hidden">
              <Image
                src={featuredPost.cover}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 px-8 pb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-semibold text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-white/80">{featuredPost.excerpt}</p>
              </div>
            </div>
            <div className="space-y-6 px-8 py-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <time dateTime={featuredPost.date}>
                  {formatDate(featuredPost.date, language)}
                </time>
                <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
                <span>{featuredPost.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden />
                <span className="font-medium text-amber-600">{t.summaryLabel}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-amber-50 px-4 py-1 text-xs font-medium text-amber-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-600"
              >
                {t.readFullCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          <aside className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-amber-100 bg-amber-50/60 p-8 shadow-inner">
            <h3 className="text-lg font-semibold text-amber-900">{t.highlightListTitle}</h3>
            <ul className="space-y-5 text-sm text-amber-900/80">
              {regularPosts.slice(0, 3).map((post) => (
                <li key={post.slug} className="space-y-2 border-b border-amber-200/60 pb-4 last:border-none last:pb-0">
                  <Link href={`/blog/${post.slug}`} className="group block space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                      {post.category}
                    </p>
                    <p className="font-medium text-slate-900 transition group-hover:text-amber-600">{post.title}</p>
                    <p className="text-xs text-amber-800/80">
                      {formatDate(post.date, language)} • {post.readingTime}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto rounded-2xl border border-dashed border-amber-300 bg-white/60 p-5 text-sm text-slate-600">
              <p className="font-semibold text-amber-700">{t.newsletterTitle}</p>
              <p className="mt-2">{t.newsletterDescription}</p>
              <button className="mt-4 w-full rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-amber-600">
                {t.newsletterCta}
              </button>
            </div>
          </aside>
        </section>

        <section id="articles" className="space-y-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">{t.allArticlesTitle}</h2>
              <p className="text-base text-slate-600">{t.allArticlesDescription}</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
            >
              {t.backToHome}
              <span aria-hidden>↗</span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-amber-200" aria-hidden />
                  <time dateTime={post.date} className="text-slate-400">
                    {formatDate(post.date, language)}
                  </time>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-amber-600">
                  {post.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-amber-500">{post.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
