"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { blogViewCopy, getLocalizedPosts } from "./blog";

const POSTS_PER_PAGE = 9;

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
  const posts = useMemo(() => {
    const localized = getLocalizedPosts(language);
    return [...localized].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [language]);
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const t = blogViewCopy[language];

  if (!featuredPost) {
    return (
      <div className="bg-gradient-to-b from-slate-100 via-white to-slate-100 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-4xl space-y-10 px-6 pb-24 pt-28 text-center lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
            {t.eyebrow}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            {t.heroTitle}
          </h1>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{t.heroDescription}</p>
          <p className="text-base text-slate-500 dark:text-slate-400">{t.emptyState}</p>
        </div>
      </div>
    );
  }

  const regularPosts = posts.filter((post) => post.slug !== featuredPost.slug);
  const highlightPosts = regularPosts.slice(0, 4);
  const totalPages = Math.max(
    1,
    Math.ceil(regularPosts.length / POSTS_PER_PAGE)
  );
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const rawPage = Number.parseInt(searchParams.get("page") ?? "1", 10);
  const safePage = Number.isNaN(rawPage) ? 1 : rawPage;
  const currentPage = Math.min(Math.max(safePage, 1), totalPages);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = regularPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );
  const createPageHref = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 via-white to-slate-100 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24 pt-28 text-center sm:text-left lg:px-8">
        <header className="space-y-6 rounded-[3rem] border border-slate-200 bg-white p-10 text-center shadow-2xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
            {t.eyebrow}
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{t.heroDescription}</p>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-2xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
            <div className="relative h-[22rem] w-full overflow-hidden">
              <Image
                src={featuredPost.cover}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 px-8 pb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white">
                  {t.featureBadge}
                </span>
                <h2 className="text-3xl font-semibold text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-white/80">{featuredPost.excerpt}</p>
              </div>
            </div>
            <div className="space-y-6 px-8 py-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-medium text-blue-600 dark:text-blue-300">{featuredPost.category}</span>
                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
                <time dateTime={featuredPost.date}>
                  {formatDate(featuredPost.date, language)}
                </time>
                <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" aria-hidden />
                <span>{featuredPost.readingTime}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
              >
                {t.readFullCta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          <aside className="flex h-full flex-col gap-6 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{t.highlightListTitle}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{t.highlightDescription}</p>
            </div>
            <ul className="space-y-5 text-sm text-slate-700 dark:text-slate-300">
              {highlightPosts.map((post) => (
                <li key={post.slug} className="space-y-2 border-b border-slate-200 pb-4 last:border-none last:pb-0 dark:border-slate-700">
                  <Link href={`/blog/${post.slug}`} className="group block space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                      {post.category}
                    </p>
                    <p className="font-medium text-slate-900 transition group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-300">{post.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {formatDate(post.date, language)} • {post.readingTime}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section id="articles" className="space-y-10">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">{t.allArticlesTitle}</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">{t.allArticlesDescription}</p>
          </div>

          {paginatedPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                      <span>{post.category}</span>
                      <span className="h-1 w-1 rounded-full bg-blue-200 dark:bg-blue-900" aria-hidden />
                      <time dateTime={post.date} className="text-slate-400 dark:text-slate-500">
                        {formatDate(post.date, language)}
                      </time>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-300">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-blue-500 dark:text-blue-300">{post.readingTime}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-200"
                      >
                        {t.readFullCta}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/60 px-6 py-10 text-center text-base text-blue-900/70 transition-colors duration-300 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
              {t.emptyList}
            </p>
          )}

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {t.pageStatus(currentPage, totalPages, regularPosts.length)}
            </p>
            <nav aria-label="pagination">
              <ul className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <li>
                  {currentPage === 1 ? (
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-slate-400 dark:border-slate-700 dark:text-slate-500">
                      {t.previous}
                    </span>
                  ) : (
                    <Link
                      href={createPageHref(currentPage - 1)}
                      className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/40 dark:hover:text-blue-200"
                    >
                      {t.previous}
                    </Link>
                  )}
                </li>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                  (page) => (
                    <li key={page}>
                      <Link
                        href={createPageHref(page)}
                        aria-current={page === currentPage ? "page" : undefined}
                        className={`inline-flex min-w-[2.5rem] items-center justify-center rounded-full border px-3 py-2 transition ${
                          page === currentPage
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/40 dark:hover:text-blue-200"
                        }`}
                      >
                        {page}
                      </Link>
                    </li>
                  )
                )}
                <li>
                  {currentPage === totalPages ? (
                    <span className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-slate-400 dark:border-slate-700 dark:text-slate-500">
                      {t.next}
                    </span>
                  ) : (
                    <Link
                      href={createPageHref(currentPage + 1)}
                      className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-600 dark:hover:border-blue-500 dark:hover:bg-blue-900/40 dark:hover:text-blue-200"
                    >
                      {t.next}
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}
