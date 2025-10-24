"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { blogArticleCopy, getLocalizedPost, getLocalizedPosts } from "../blog";

const formatDate = (value, language) => {
  const locale = language === "th" ? "th-TH" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
};

export default function BlogArticleView({ slug }) {
  const { language } = useLanguage();
  const post = useMemo(() => getLocalizedPost(slug, language), [slug, language]);
  const posts = useMemo(() => getLocalizedPosts(language), [language]);
  const t = blogArticleCopy[language];

  if (!post) {
    return null;
  }

  const relatedPosts = useMemo(() => {
    const candidates = posts.filter((item) => item.slug !== slug);
    const prioritized = candidates.filter((item) =>
      item.topics.some((topic) => post.topics.includes(topic))
    );
    const merged = [...prioritized];
    for (const item of candidates) {
      if (!merged.some((existing) => existing.slug === item.slug)) {
        merged.push(item);
      }
    }
    return merged.slice(0, 3);
  }, [posts, post, slug]);

  return (
    <div className="bg-gradient-to-b from-amber-50 via-white to-slate-100">
      <div className="mx-auto max-w-6xl space-y-12 px-6 pb-24 pt-10 lg:px-8">
        <div className="flex items-center gap-3 text-sm text-amber-700">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 font-medium shadow-sm transition hover:border-amber-400 hover:text-amber-800"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-10 rounded-[3rem] border border-slate-200 bg-white p-10 shadow-2xl">
            <header className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-600">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                <span className="h-1 w-1 rounded-full bg-slate-200" aria-hidden />
                <span>{post.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-slate-200" aria-hidden />
                <span className="font-medium text-amber-600">{t.summaryLabel}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                {post.title}
              </h1>
              <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-2 font-medium text-amber-700">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    {post.author?.charAt(0)}
                  </span>
                  <div className="flex flex-col">
                    <span>{post.author}</span>
                    <span className="text-xs text-slate-400">{post.authorRole}</span>
                  </div>
                </div>
              </div>
            </header>

            <div className="relative h-[22rem] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            <div className="space-y-12 text-base leading-7 text-slate-700">
              {post.content?.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-slate-900">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc space-y-2 rounded-2xl bg-slate-50/80 p-6 text-sm leading-6 text-slate-600 marker:text-amber-500">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50/60 p-8 text-sm text-amber-900">
              <p className="text-base font-semibold text-amber-700">{t.takeawaysTitle}</p>
              <ul className="mt-4 space-y-3">
                {post.keyTakeaways?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-amber-600">
                      ★
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-amber-600">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-amber-100 px-4 py-1 font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          <aside className="space-y-8 rounded-[2.5rem] border border-slate-200 bg-white/90 p-8 shadow-xl">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-slate-900">{t.relatedTitle}</h2>
              <p className="text-sm text-slate-500">{t.relatedDescription}</p>
              <div className="space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="block rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition hover:border-amber-300 hover:text-amber-700"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                      {item.category}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {formatDate(item.date, language)} • {item.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 text-sm text-amber-900">
              <h2 className="text-lg font-semibold text-amber-700">{t.advisoryTitle}</h2>
              <p>{t.advisoryDescription}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
              >
                {t.advisoryCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
