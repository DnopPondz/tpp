"use client";

import Link from "next/link";
import { menuItems } from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageProvider";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { translations } = useLanguage();
  const { brand, nav, footer } = translations;

  return (
    <footer className="border-t border-border-subtle bg-background text-foreground/80 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-surface-muted text-lg font-bold text-blue-600 shadow-inner">
                TP
              </div>
              <div>
                <p className="text-xl font-semibold tracking-wide text-foreground">{brand.name}</p>
                <p className="text-sm text-foreground/70">{brand.tagline}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-full px-3 py-1 text-foreground/80 transition hover:bg-surface-muted hover:text-blue-700"
                  >
                    {nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {footer.contactTitle}
              </h3>
              <div className="mt-4 space-y-2 text-sm">
                {footer.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="space-y-1 text-sm">
              {footer.contactNumbers.map((number) => (
                <p key={number}>{number}</p>
              ))}
              <p>
                <span className="font-semibold text-foreground">{footer.emailLabel}:</span>{" "}
                <a
                  href={`mailto:${footer.email}`}
                  className="text-blue-600 transition hover:text-blue-500"
                >
                  {footer.email}
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {footer.hoursTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {footer.hours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                {footer.socialsTitle}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {footer.socials.map((social) => (
                  <li key={social.href}>
                    <Link
                      href={social.href}
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-foreground/80 transition hover:bg-surface-muted hover:text-blue-700"
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

        <div className="flex flex-col gap-4 border-t border-border-subtle pt-6 text-xs text-foreground/60 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal.replace("{year}", currentYear)}</p>
          <p>{footer.certifications}</p>
        </div>
      </div>
    </footer>
  );
}
