'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-sm bg-white/95 dark:bg-slate-900/95',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="sr-only">Ambar Furniture</div>
          <span className="font-serif text-2xl font-bold tracking-tight text-indigo-700 dark:text-indigo-400 group-hover:text-indigo-900 dark:group-hover:text-indigo-300 transition-colors">
            Ambar.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'text-sm font-bold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400',
                pathname === link.href
                  ? 'text-indigo-700 dark:text-indigo-300 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1'
                  : 'text-slate-700 dark:text-slate-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
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
                    'text-2xl font-serif font-bold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400',
                    pathname === link.href
                      ? 'text-indigo-700 dark:text-indigo-300'
                      : 'text-slate-800 dark:text-slate-200'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
