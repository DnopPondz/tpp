"use client";

import Link from "next/link";
import { menuItems } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { translations } = useLanguage();
  const { brand, nav, footer } = translations;

  return (
    <footer className="relative overflow-hidden border-t border-border-subtle/60 bg-background/90 text-foreground/80 backdrop-blur-xl transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/25" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:px-8">
        <div className="panel-aura rounded-[3rem] border border-border-subtle/70 bg-background/70 p-10 shadow-2xl dark:bg-slate-950/60">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="card-elevated theme-card space-y-4 rounded-3xl border border-border-subtle/70 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 text-lg font-bold text-white shadow-lg ring-1 ring-white/30 dark:ring-blue-500/40">
                  TP
                </div>
                <div>
                  <p className="text-xl font-semibold tracking-wide text-foreground">{brand.name}</p>
                  <p className="text-sm text-foreground/70">{brand.tagline}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">{footer.tagline}</p>
            </div>

            <div className="card-elevated theme-card rounded-3xl border border-border-subtle/70 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                {footer.quickLinksTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center rounded-full px-3 py-1 text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-blue-700 dark:hover:bg-slate-900/60"
                    >
                      {nav[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated theme-card space-y-5 rounded-3xl border border-border-subtle/70 p-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  {footer.contactTitle}
                </h3>
                <div className="mt-4 space-y-2 text-sm text-foreground/80">
                  {footer.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-2 text-sm text-foreground/80">
                {footer.contactNumbers.map((number) => (
                  <p key={number}>{number}</p>
                ))}
                <p>
                  <span className="font-semibold text-foreground">{footer.emailLabel}:</span>{" "}
                  <a
                    href={`mailto:${footer.email}`}
                    className="font-semibold text-blue-600 transition hover:text-blue-500"
                  >
                    {footer.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="card-elevated theme-card space-y-5 rounded-3xl border border-border-subtle/70 p-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  {footer.hoursTitle}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {footer.hours.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  {footer.socialsTitle}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {footer.socials.map((social) => (
                    <li key={social.href}>
                      <Link
                        href={social.href}
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:text-blue-700 dark:hover:bg-slate-900/60"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow" aria-hidden />
                        {social.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-border-subtle/60 bg-white/50 px-6 py-4 text-xs text-foreground/60 shadow-sm transition-colors duration-300 dark:bg-slate-950/40 sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.legal.replace("{year}", currentYear)}</p>
            <p>{footer.certifications}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
