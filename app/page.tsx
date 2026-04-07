"use client";

import Link from "next/link";
// import Image from 'next/image';
import { featuredProductsArr, mockProducts } from "../lib/mockData";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import imgHero from "@/app/images/sultan/Sultan-3.png";
import { motion } from "framer-motion";
import sultan_toy from "../app/images/toys/Sultan_toy.png";
import bed_toy from "../app/images/toys/Bed_toy.png";
import kitchen_cab_toy from "../app/images/toys/Kitchen_cabinet_toy.png";

import Typewriter from "@/components/Typewriter";

export default function Home() {
  const featuredProducts = featuredProductsArr;
  const heroWords = [
    "Sultan",
    "Folding Bed",
    "Wall Frames",
    "Kitchen Cabinets",
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-primary/40"
            style={{
              backgroundImage:
                "radial-gradient(circle at bottom, rgba(3, 252, 173, 0.4) 0%, transparent 70%)",
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/20 backdrop-blur-sm" />

          {/* Decorative Background Text */}
          <div className="hidden md:absolute md:flex -bottom-10 left-0 right-0 justify-center px-4 opacity-[0.03] select-none pointer-events-none">
            <span className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap leading-none">
              AMBAR
            </span>
          </div>
        </div>

        {/* Floating 3D Asset */}
        {/* <motion.div
          initial={{ opacity: 0, y: 100, rotate: -5 }}
          animate={{
            opacity: 1,
            y: [50, 30, 50],
            rotate: [-5, -3, -5],
          }}
          transition={{
            opacity: { duration: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-6xl px-6"
        >
          <div className="relative w-40 md:w-56 lg:w-72 aspect-square drop-shadow-[0_20px_50px_rgba(3,252,173,0.3)]">
            <Image
              src={sultan_toy}
              alt="3D Furniture Asset"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-40 md:w-56 lg:w-72 aspect-square drop-shadow-[0_20px_50px_rgba(3,252,173,0.3)]">
            <Image
              src={bed_toy}
              alt="3D Furniture Asset"
              fill
              className="object-contain"
            />
          </div>
        </motion.div> */}

        <div className="container relative z-20 mx-auto px-6 md:px-12 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-in slide-in-from-bottom duration-1000 fade-in">
            We Manufacture <br className="md:hidden" />
            <Typewriter words={heroWords} />
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 text-white/80 leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-200 fade-in fill-mode-both">
            We believe in combining innovative design, sustainable practices,
            and exceptional craftsmanship to bring your vision to life.
          </p>
          <div className="animate-in slide-in-from-bottom duration-1000 delay-400 fade-in fill-mode-both">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-light text-black px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
            >
              EXPLORE Products
              <div className="bg-background/10 p-1 rounded-full">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl border-x border-muted/10 p-8 md:p-16 rounded-3xl bg-card-bg">
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
                Featured Products
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
      <section className="py-24 bg-background dark:bg-[#1A1210] border-y border-muted/10">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-16">
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
                className="bg-card-dark-bg  dark:from-stone-900 dark:to-stone-950 dark:border-primary/20 shadow-md p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1"
              >
                <div className="flex text-amber-500 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 dark:text-neutral-300 font-medium italic mb-8 grow">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-white dark:text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-semibold text-primary dark:text-primary-light mt-1">
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
