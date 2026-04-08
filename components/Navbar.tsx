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
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-[5px]",
        isScrolled
          ? "dark:bg-background/5 shadow-lg border-b border-white/10"
          : "bg-transparent ",
      )}
    >
      <div className="mx-auto px-6 md:h-20 flex justify-between items-center pt-3 pb-3 pl-10 pr-10">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="font-serif text-2xl font-bold tracking-tight md:text-foreground group-hover:scale-105 
          group-hover:text-primary-light transition-transform text-primary"
          >
            Ambar.
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-background/90 dark:bg-background/80 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-[13px] font-medium tracking-wide transition-all duration-200 uppercase px-4 py-2 rounded-full",
                pathname === link.href
                  ? "bg-white/20 text-primary"
                  : "text-white/70 hover:text-white hover:bg-white/10",
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
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-transparent border border-primary text-primary rounded-full text-sm font-bold hover:opacity-90 transition-all hover:scale-105 group"
          >
            Let&apos;s Meet
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
            className="fixed inset-0 z-[60] bg-background dark:bg-background flex flex-col pt-20 px-6 h-screen"
          >
            <button
              className="absolute top-6 right-6 p-2 text-neutral-800 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-light"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6 text-primary" />
            </button>
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-2xl font-serif font-bold transition-colors hover:text-primary dark:hover:text-primary-light",
                    pathname === link.href
                      ? "text-primary dark:text-primary-light"
                      : "text-white md:text-neutral-800 dark:text-neutral-200",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              {/* <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "text-2xl font-serif font-bold transition-colors hover:text-primary dark:hover:text-primary-light",
                  pathname === "/contact"
                    ? "text-primary dark:text-primary-light"
                    : "text-neutral-800 dark:text-neutral-200",
                )}
              >
                Let&apos;s Collab
              </Link> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
