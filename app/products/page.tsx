'use client';

import { useState } from 'react';
import { useAppSelector } from '@/lib/store/hooks';
import ProductCard from '@/components/ProductCard';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const { items } = useAppSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(items.map(item => item.category)));

  // Filter products
  const filteredProducts = items.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Header Section */}
      <div className="bg-surface border-b border-muted/10 py-12 mb-12">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Collection
          </h1>
          <p className="text-muted text-lg">
            Explore our complete range of premium handcrafted furniture. 
            Designed to bring elegance and functionality to every corner of your home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-32 space-y-8">
            {/* Search */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground font-serif">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-muted/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-sans"
                />
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground font-serif">Categories</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === null 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-muted/10 text-foreground'
                  }`}
                >
                  All Products
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'hover:bg-muted/10 text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <span className="text-muted font-medium">
              Showing {filteredProducts.length} results
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface rounded-2xl border border-muted/10">
              <h3 className="text-2xl font-serif font-bold mb-2">No products found</h3>
              <p className="text-muted">Try adjusting your search or category filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="mt-6 px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-light transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
