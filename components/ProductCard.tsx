"use client";

import { Product } from "@/lib/mockData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card-bg dark:bg-neutral-900 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-white/10 hover:border-primary/50 transition-all duration-300 text-white"
    >
      <Link href={`/products/${product.id}`} className="block p-1 md:p-6 h-full">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 rounded-xl" />
        </div>

        <div className="pt-2 md:pt-6">
          <div className="text-[10px] md:text-xs font-bold tracking-wider text-primary dark:text-primary-light uppercase mb-2">
            {product.category}
          </div>
          <h3 className="font-serif md:text-xl font-bold mb-2 text-foreground dark:text-white group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted dark:text-stone-400 text-[11px] md:text-sm line-clamp-2 mb-4 font-medium">
            {product.shortDescription}
          </p>

          <div className="flex items-center justify-between mt-auto">
            {product.price && (
              <span className="font-bold text-sm md:text-lg text-foreground dark:text-white">
                ₹ {product.price}
              </span>
            )}
            <span className="text-[10px] md:text-sm font-bold text-primary dark:text-primary-light group-hover:underline underline-offset-4 transition-colors">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
