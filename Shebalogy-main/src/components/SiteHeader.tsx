"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useAuth } from "@/lib/auth";

import logo from "@/assets/logo.png";

import { Globe, LogOut, User, Menu, X } from "lucide-react";

export function SiteHeader() {
  const { lang, setLang, t } = useI18n();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { href: "/", label: t("nav_home") },
    { href: "/cancer", label: t("nav_cancer") },
    { href: "/blood", label: t("nav_blood") },
    { href: "/mental", label: t("nav_mental") },
    { href: "/medicine", label: t("nav_medicine") },
    { href: "/doctors", label: t("nav_doctors") },
  ];

  const linkClass = (href: string) => {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return `px-3 py-1.5 rounded-lg text-sm font-bold text-black hover:bg-white/40 transition-colors font-bangla ${
      active ? "text-black bg-white/50" : ""
    }`;
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
      <div className="glass mx-auto max-w-7xl rounded-2xl px-3 sm:px-5 py-2.5 flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg lg:hidden hover:bg-white/40 transition text-black"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo.src}
              alt="Shebalogy"
              width={36}
              height={36}
              className="size-9 object-contain"
            />
            <span className="font-display font-bold text-base sm:text-lg text-foreground hidden sm:inline">
              Shebalogy
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={linkClass(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="glass rounded-full p-0.5 flex items-center text-xs font-medium">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/70"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("bn")}
              className={`px-2.5 py-1 rounded-full transition-all font-bangla ${
                lang === "bn" ? "bg-primary text-primary-foreground" : "text-foreground/70"
              }`}
            >
              বাং
            </button>
            <Globe className="size-3.5 mx-1.5 text-muted-foreground" />
          </div>

          {user ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:flex items-center gap-1.5 text-sm text-foreground/80 font-bangla">
                <User className="size-4" />
                {user.name}
              </span>
              <button
                onClick={logout}
                className="glass rounded-full p-2 hover:bg-white/50 transition"
                aria-label="Logout"
              >
                <LogOut className="size-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <Link
                href="/login"
                className="px-3 py-1.5 rounded-full text-sm font-bold text-black hover:bg-white/40 transition font-bangla"
              >
                {t("login")}
              </Link>
              <Link
                href="/signup"
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition shadow-soft font-bangla"
              >
                {t("signup")}
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-7xl glass rounded-2xl p-4 animate-fade-up">
          <nav className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-bold text-black hover:bg-white/40 transition-colors font-bangla ${
                  (n.href === "/" ? pathname === "/" : pathname.startsWith(n.href))
                    ? "text-black bg-white/50"
                    : ""
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
