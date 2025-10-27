"use client";

import Link from "next/link";
import { menuItems } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { translations } = useLanguage();
  const { brand, nav, footer } = translations;

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-black dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-lg font-bold text-blue-600 shadow-inner dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-200">
                TP
              </div>
              <div>
                <p className="text-xl font-semibold tracking-wide text-slate-900 dark:text-slate-100">{brand.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{brand.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
              {footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-full px-3 py-1 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-900/40 dark:hover:text-blue-200"
                  >
                    {nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                {footer.contactTitle}
              </h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {footer.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {footer.contactNumbers.map((number) => (
                <p key={number}>{number}</p>
              ))}
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{footer.emailLabel}:</span>{" "}
                <a
                  href={`mailto:${footer.email}`}
                  className="text-blue-600 transition hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200"
                >
                  {footer.email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                {footer.hoursTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {footer.hours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                {footer.socialsTitle}
              </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.socials.map((social) => (
                <li key={social.href}>
                  <Link
                    href={social.href}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-blue-900/40 dark:hover:text-blue-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden />
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 transition-colors duration-300 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal.replace("{year}", currentYear)}</p>
          <p>{footer.certifications}</p>
        </div>
      </div>
    </footer>
  );
}
