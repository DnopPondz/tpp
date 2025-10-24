"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

export const menuItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "capabilities", href: "/capabilities" },
  { key: "products", href: "/products" },
  { key: "news", href: "/blog" },
  { key: "contact", href: "/contact" },
];

const defaultContactNumbers = [
  "+66(0)2735-9109-10",
  "+66(0)2182-3306",
  "+66(0)2182-3301",
  "Fax +66(0)2735-8941",
];

function LanguageToggleButton({ language, onToggle }) {
  const isThai = language === "th";
  const nextLanguageLabel = isThai ? "English" : "Thai";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition-colors hover:border-amber-300 hover:text-amber-600"
      aria-label={`Switch language to ${nextLanguageLabel}`}
    >
      {isThai ? "TH" : "EN"}
    </button>
  );
}

export default function Navbar() {
  const { language, translations, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const activeKey = useMemo(() => {
    const matched = menuItems.find((item) => {
      if (item.href === "/blog") {
        return pathname.startsWith("/blog");
      }
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.href);
    });
    return matched?.key ?? menuItems[0].key;
  }, [pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const contactNumbers = (
    translations.footer?.contactNumbers ?? defaultContactNumbers
  ).slice(0, 2);
  const languageLabel = language === "th" ? "เลือกภาษา" : "Language";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-slate-200 bg-slate-50/80 text-xs text-slate-500 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 lg:px-8">
          <span className="font-medium text-slate-600">
            {translations.brand.slogan}
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {contactNumbers.map((contact) => (
              <span key={contact} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {contact}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="ThaiPaipan Textile Printing home">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500 bg-amber-50 text-lg font-bold text-amber-600 shadow-inner">
              TP
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-semibold tracking-wide text-slate-900">
                {translations.brand.name}
              </span>
              <span className="text-sm text-slate-500">
                {translations.brand.tagline}
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 lg:flex">
            {menuItems.map((item) => {
              const isActive = activeKey === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 transition-all ${
                    isActive
                      ? "bg-amber-50 text-amber-600 shadow"
                      : "hover:bg-slate-100 hover:text-amber-600"
                  }`}
                >
                  {translations.nav[item.key]}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden items-center lg:flex">
              <LanguageToggleButton
                language={language}
                onToggle={toggleLanguage}
              />
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-amber-300 hover:text-amber-600 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <div
            id="mobile-menu"
            className={`grid origin-top gap-2 rounded-2xl border border-slate-200 bg-white/90 text-sm font-medium text-slate-700 shadow-lg transition-all ${
              isMenuOpen
                ? "mt-2 max-h-[80vh] scale-y-100 opacity-100 p-4"
                : "mt-0 pointer-events-none max-h-0 scale-y-95 overflow-hidden p-0 opacity-0"
            }`}
            aria-hidden={!isMenuOpen}
          >
            {menuItems.map((item) => {
              const isActive = activeKey === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-amber-50 text-amber-600 shadow"
                      : "hover:bg-slate-100 hover:text-amber-600"
                  }`}
                >
                  {translations.nav[item.key]}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {languageLabel}
              </span>
              <LanguageToggleButton
                language={language}
                onToggle={toggleLanguage}
              />
            </div>
            <div className="flex flex-col gap-1 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-500">
              <span className="font-semibold uppercase tracking-wide text-slate-600">
                {translations.footer?.contactTitle}
              </span>
              {contactNumbers.map((contact) => (
                <span key={contact}>{contact}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
