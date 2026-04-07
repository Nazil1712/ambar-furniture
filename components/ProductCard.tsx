'use client';

import { Product } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-surface dark:bg-stone-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-muted/10 dark:border-white/5 transition-all"
    >
      <Link href={`/products/${product.id}`} className="block relative aspect-square overflow-hidden bg-muted/10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>
      
      <div className="p-6">
        <div className="text-xs font-bold tracking-wider text-primary dark:text-primary-light uppercase mb-2">
          {product.category}
        </div>
        <h3 className="font-serif text-xl font-bold mb-2 text-foreground dark:text-white group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted dark:text-stone-400 text-sm line-clamp-2 mb-4 font-medium">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          {product.price && (
            <span className="font-bold text-lg text-foreground dark:text-white">
              ${product.price}
            </span>
          )}
          <Link
            href={`/products/${product.id}`}
            className="text-sm font-bold text-primary dark:text-primary-light hover:text-primary-light hover:underline underline-offset-4 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
