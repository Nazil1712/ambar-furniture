import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-[#1A1210] border-t border-muted/20 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-primary dark:text-primary-light">
              Ambar.
            </span>
          </Link>
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
            Crafting comfort and style for modern homes. Premium quality
            furniture built to last generations.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 bg-background rounded-full text-foreground hover:text-primary transition-colors hover:bg-primary/20"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-background rounded-full text-foreground hover:text-primary transition-colors hover:bg-primary/20"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 bg-background rounded-full text-foreground hover:text-primary transition-colors hover:bg-primary/20"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm text-foreground/80">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-primary transition-colors"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Categories</h4>
          <ul className="flex flex-col gap-3 text-sm text-foreground/80">
            <li>
              <Link
                href="/products?category=Sofas"
                className="hover:text-primary transition-colors"
              >
                Sofas & Beds
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=Storage"
                className="hover:text-primary transition-colors"
              >
                Kitchen Cupboards
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=Decor"
                className="hover:text-primary transition-colors"
              >
                Wall Framing
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=Chairs"
                className="hover:text-primary transition-colors"
              >
                Chairs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-sm text-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>
                39-2/C, Dolphin Estate, Dabhoi Road, Beside Zenith School,
                Vadodara - 390004
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+91 9998180032</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>wasimbandwala@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 text-center text-sm border-t border-muted/20 pt-8 text-muted">
        <p>
          &copy; {new Date().getFullYear()} Ambar Furniture. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

const Facebook = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
