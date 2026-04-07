import Link from "next/link";
// import Image from 'next/image';
import { mockProducts } from "../lib/mockData";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import imgHero from "@/app/images/sultan/Sultan-3.png";

import Typewriter from "@/components/Typewriter";

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 4);
  const heroWords = [
    "Sultan",
    "Folding Bed",
    "Wall Frames",
    "Kitchen Cabinets",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={imgHero}
            alt="Premium Furniture Showroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-in slide-in-from-bottom duration-700 fade-in">
            We build <br className="md:hidden" />
            <Typewriter words={heroWords} />
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/95 animate-in slide-in-from-bottom duration-700 delay-150 fade-in fill-mode-both">
            Elevate your living space with our premium, handcrafted furniture.
            Blending timeless elegance with modern functionality.
          </p>
          <div className="animate-in slide-in-from-bottom duration-700 delay-300 fade-in fill-mode-both">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-surface text-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl border-x border-muted/10 p-8 md:p-16 rounded-3xl bg-background/50">
          <div className="inline-block text-primary font-bold tracking-widest text-sm uppercase mb-4">
            Welcome to Ambar
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
            A Legacy of Exceptional Design and Trust
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            At Ambar Furniture, we believe that every home deserves exceptional
            design. For over a decade, our local craftsmen have been building
            furniture that is not only beautiful to look at, but built to
            withstand the test of time. From premium sofas to elegant wall
            framing, quality remains at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Featured Collections
              </h2>
              <p className="text-muted text-lg">
                Discover our handpicked selections designed to bring comfort and
                sophistication to your home.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary dark:text-secondary-light font-semibold hover:underline underline-offset-4 mb-2"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface dark:bg-[#1A1210] border-y border-muted/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-16">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Chudgar Amaan",
                role: "Interior Designer",
                content:
                  "The Sultan Sofa exceeded all my expectations. The craftsmanship is pristine and it instantly became the centerpiece of my client's living room.",
              },
              {
                name: "Lokhandwala Nadeem",
                role: "Homeowner",
                content:
                  "We installed the Ambar Kitchen Cupboards last month. The soft-close features and minimalist design completely transformed our kitchen.",
              },
              {
                name: "Mansuri Sameer",
                role: "Architect",
                content:
                  "When I need high-quality, reliable wood furniture for a project, Ambar is my first stop. Their attention to detail on the Oak Dining Table is remarkable.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-indigo-100 dark:border-slate-700 shadow-md p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="flex text-amber-500 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium italic mb-8 grow">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
