import { StaticImageData } from 'next/image';
import imgSultan1 from '@/app/images/sultan/Sultan-1.png';
import imgFoldingBed1 from '@/app/images/folding-bed/Folding-Bed-1.png';
import imgWallFraming1 from '@/app/images/wall-framing/Wall-Framing-1.png';
import imgKitchen1 from '@/app/images/Kitchen/Kitchen-1.png';
import imgSultan2 from '@/app/images/sultan/Sultan-2.png';
import imgWallFraming2 from '@/app/images/wall-framing/Wall-Framing-2.png';

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price?: number;
  image: string | StaticImageData;
  features: string[];
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: "sultan-premium-sofa",
    name: "Sultan",
    shortDescription: "Premium Sofa/Bed",
    description: "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan1,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame"
    ],
    category: "Sofas & Beds"
  },
  {
    id: "premium-folding-bed",
    name: "Folding Bed",
    shortDescription: "Space-saving elegant folding bed",
    description: "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed1,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient"
    ],
    category: "Beds"
  },
  {
    id: "decorative-wall-framing",
    name: "Wall Framing",
    shortDescription: "Artisan crafted wood wall panelling",
    description: "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming1,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic"
    ],
    category: "Decor"
  },
  {
    id: "modern-kitchen-cupboards",
    name: "Kitchen Cupboards",
    shortDescription: "Sleek and functional kitchen storage",
    description: "Organize your culinary space with our modern kitchen cupboards. Designed for maximum storage efficiency while maintaining a sleek, minimalist aesthetic that complements any modern home.",
    price: 1299,
    image: imgKitchen1,
    features: [
      "Soft-close hinges",
      "Water-resistant finish",
      "Adjustable shelving",
      "Minimalist handle-less design"
    ],
    category: "Storage"
  },
  {
    id: "classic-leather-armchair",
    name: "Classic Leather Armchair",
    shortDescription: "Vintage style premium comfort",
    description: "A statement piece for any living room or study. Crafted with premium top-grain leather that ages beautifully over time.",
    price: 599,
    image: imgSultan2,
    features: [
      "Top-grain leather",
      "Ergonomic back support",
      "Solid oak legs",
      "Vintage aesthetic"
    ],
    category: "Chairs"
  },
  {
    id: "solid-oak-dining-table",
    name: "Solid Oak Dining Table",
    shortDescription: "Gather around timeless quality",
    description: "Bring the family together with this handcrafted solid oak dining table. Built to last generations with a beautiful natural wood grain finish.",
    price: 1099,
    image: imgWallFraming2,
    features: [
      "100% Solid Oak",
      "Seats up to 8 people",
      "Stain-resistant sealant",
      "Sturdy robust construction"
    ],
    category: "Tables"
  }
];
