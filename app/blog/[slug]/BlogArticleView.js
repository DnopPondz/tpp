"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  blogArticleCopy,
  getLocalizedPost,
  getLocalizedPosts,
} from "../blog";

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
  const sections = post?.content ?? [];
  const sectionAnchors = useMemo(() => {
    return sections.map((section, index) => {
      const base = section.heading
        ? section.heading
            .toLowerCase()
            .normalize("NFD")
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
        : "section";
      return {
        ...section,
        id: `${base || "section"}-${index + 1}`,
      };
    });
  }, [sections]);

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
    <div className="theme-surface relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-24 h-[20rem] w-[20rem] rounded-full bg-blue-400/18 blur-3xl dark:bg-blue-600/25" />
        <div className="absolute right-[-18rem] top-[26rem] h-[22rem] w-[22rem] rounded-full bg-indigo-400/18 blur-3xl dark:bg-indigo-600/25" />
      </div>
      <div className="relative mx-auto max-w-6xl space-y-12 px-6 pb-24 pt-10 lg:px-8">
        <div className="flex items-center gap-3 text-sm text-blue-600">
          <Link
            href="/blog"
            className="cta-secondary inline-flex items-center gap-2 px-4 py-2 text-sm"
          >
            <span aria-hidden>←</span>
            {t.backLabel}
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <article className="theme-panel panel-aura space-y-10 rounded-[3rem] border border-border-subtle p-10 shadow-2xl transition-colors duration-300">
            <header className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/70">
                <span className="rounded-full border border-blue-200/70 bg-white/70 px-3 py-1 font-semibold text-blue-600 shadow-sm dark:border-blue-500/40 dark:bg-slate-900/60">
                  {post.category}
                </span>
                <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                <span className="h-1 w-1 rounded-full bg-slate-200" aria-hidden />
                <span>{post.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-slate-200" aria-hidden />
                <span className="font-medium text-blue-600">{t.summaryLabel}</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                {post.title}
              </h1>
              <p className="text-lg leading-8 text-foreground/80">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/70">
                <div className="flex items-center gap-2 font-medium text-blue-700">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-blue-600">
                    {post.author?.charAt(0)}
                  </span>
                  <div className="flex flex-col">
                    <span>{post.author}</span>
                    <span className="text-xs text-foreground/60">{post.authorRole}</span>
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

            {sectionAnchors.length > 1 && (
              <nav
                aria-label="table of contents"
                className="card-elevated theme-card rounded-3xl border border-border-subtle/70 p-6 transition-colors duration-300"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {t.tableOfContentsTitle}
                </p>
                <ol className="mt-4 space-y-2 text-sm text-foreground/80">
                  {sectionAnchors.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 transition hover:text-blue-600"
                      >
                        <span className="text-xs font-semibold text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{section.heading}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="space-y-12 text-base leading-7 text-foreground/80">
                {sectionAnchors.map((section) => (
                  <section key={section.id} id={section.id} className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-semibold text-foreground">
                        {section.heading}
                      </h2>
                      {section.paragraphs?.map((paragraph, index) => (
                        <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="card-elevated theme-card list-disc space-y-2 rounded-2xl border border-border-subtle/70 p-6 text-sm leading-6 text-foreground/80 marker:text-blue-500">
                        {section.bullets.map((item, index) => (
                          <li key={`${section.id}-bullet-${index}`}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
            </div>

            <div className="card-elevated theme-card rounded-3xl border border-border-subtle/70 p-8 text-sm text-foreground transition-colors duration-300">
              <p className="text-base font-semibold text-blue-700">{t.takeawaysTitle}</p>
              <ul className="mt-4 space-y-3">
                {post.keyTakeaways?.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-semibold text-blue-600">
                      ★
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-blue-600">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-blue-200/70 bg-white/70 px-4 py-1 font-medium shadow-sm dark:border-blue-500/40 dark:bg-slate-900/60">
                  #{tag}
                </span>
              ))}
            </div>
          </article>

          <aside className="card-elevated theme-card space-y-8 rounded-[2.5rem] border border-border-subtle/70 p-8 shadow-xl transition-colors duration-300">
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">{t.relatedTitle}</h2>
              <p className="text-sm text-foreground/70">{t.relatedDescription}</p>
              <div className="space-y-4">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="card-elevated theme-card block rounded-2xl border border-border-subtle/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-700"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                      {item.category}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs text-foreground/70">
                      {formatDate(item.date, language)} • {item.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="card-elevated theme-card space-y-3 rounded-2xl border border-border-subtle/70 p-6 text-sm text-foreground transition-colors duration-300">
              <h2 className="text-lg font-semibold text-blue-700">{t.advisoryTitle}</h2>
              <p>{t.advisoryDescription}</p>
              <Link
                href="/contact"
                className="cta-primary inline-flex items-center gap-2 px-4 py-2 text-sm"
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
