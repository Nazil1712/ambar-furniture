import { mockProducts } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Use a dummy WhatsApp number for inquiry
  const whatsappNumber = "+91 8469026605";
  const whatsappMessage = `Hi, I'm interested in the ${product.name} from Ambar Furniture.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const otherProducts = mockProducts.filter((p) => p.id !== id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <Link
          href="/products"
          className="inline-flex text-sm md:text-base items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="relative aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden bg-neutral-900 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="inline-block text-primary font-bold tracking-widest text-sm uppercase mb-4">
              {product.category}
            </div>

            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {product.name}
            </h1>

            {product.price && (
              <div className="text-2xl font-semibold mb-8 text-primary">
                ₹ {product.price}
              </div>
            )}

            <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="mb-12">
              <h3 className="font-serif text-xl font-bold mb-6">
                Key Features
              </h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm gap-4">
                    <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                      <Check className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Inquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-3 bg-background border border-white/10 hover:border-primary/50 text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Contact via Form
              </Link>
            </div>
          </div>
        </div>

        {/* Other Products Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                View related products
              </h2>
              <p className="text-muted text-sm md:text-base max-w-xl">
                Discover more premium handcrafted pieces from our collection that
                perfectly complement your home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {otherProducts.map((otherProduct) => (
              <ProductCard key={otherProduct.id} product={otherProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
