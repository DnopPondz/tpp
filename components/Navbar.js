"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const menuItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "capabilities", href: "#capabilities" },
  { key: "products", href: "#products" },
  { key: "news", href: "#news" },
  { key: "contact", href: "#contact" },
];

const languageOptions = [
  { code: "th", label: "TH" },
  { code: "en", label: "EN" },
];

const contactNumbers = [
  "+66(0)2735-9109-10",
  "+66(0)2182-3306",
  "+66(0)2182-3301",
  "Fax: +66(0)2735-8941",
];

export default function Navbar() {
  const { language, setLanguage, translations, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500 bg-amber-50 text-lg font-bold text-amber-600 shadow-inner">
              TP
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-wide text-slate-900">
                {translations.brand.name}
              </span>
              <span className="text-sm text-slate-500">
                {translations.brand.tagline}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 text-xs text-slate-500 md:flex-row md:items-center md:gap-4">
            {contactNumbers.map((contact) => (
              <span key={contact}>{contact}</span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {languageOptions.map((option) => {
              const isActive = option.code === language;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-amber-500 bg-amber-500 text-white shadow"
                      : "border-slate-200 bg-white text-slate-600 hover:border-amber-300 hover:text-amber-600"
                  }`}
                  aria-pressed={isActive}
                  aria-label={`Switch to ${option.label}`}
                >
                  {option.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden rounded-full border border-slate-200 px-4 py-1 text-sm font-medium text-slate-600 transition-colors hover:border-amber-300 hover:text-amber-600 lg:inline-flex"
            >
              {translations.languageSwitchLabel}
            </button>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-between gap-2 rounded-full bg-slate-100/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-inner">
          {menuItems.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              className={`rounded-full px-4 py-2 transition-colors ${
                index === 0
                  ? "bg-white text-amber-600 shadow"
                  : "hover:bg-white hover:text-amber-600"
              }`}
            >
              {translations.nav[item.key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
