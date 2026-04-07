"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-white/10",
        isScrolled
          ? "bg-white/10 dark:bg-slate-900/10 backdrop-blur-[5px] shadow-lg"
          : "bg-transparent backdrop-blur-[5px]",
      )}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground group-hover:scale-105 transition-transform">
            Ambar.
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-medium tracking-wide transition-all duration-200 hover:text-primary dark:hover:text-primary-light uppercase",
                pathname === link.href
                  ? "text-primary dark:text-primary-light"
                  : "text-slate-600 dark:text-slate-400",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-bold hover:opacity-90 transition-all hover:scale-105 group"
          >
            Let&apos;s Collab
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background dark:bg-surface flex flex-col pt-20 px-6 h-screen"
          >
            <button
              className="absolute top-6 right-6 p-2 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-2xl font-serif font-bold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                    pathname === link.href
                      ? "text-indigo-700 dark:text-indigo-300"
                      : "text-slate-800 dark:text-slate-200",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "text-2xl font-serif font-bold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400",
                  pathname === "/contact"
                    ? "text-indigo-700 dark:text-indigo-300"
                    : "text-slate-800 dark:text-slate-200",
                )}
              >
                Let&apos;s Collab
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
