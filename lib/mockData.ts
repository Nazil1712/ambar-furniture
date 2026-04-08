import { StaticImageData } from "next/image";
import imgSultan1 from "@/app/images/sultan/Sultan-1.png";
import imgSultan2 from "@/app/images/sultan/Sultan-2.png";
import imgSultan3 from "@/app/images/sultan/Sultan-3.png";
import imgSultan4 from "@/app/images/sultan/Sultan-4.png";
import imgSultan5 from "@/app/images/sultan/Sultan-5.png";
import imgSultan6 from "@/app/images/sultan/Sultan-6.png";
import imgSultan7 from "@/app/images/sultan/Sultan-7.png";
import imgFoldingBed1 from "@/app/images/folding-bed/Folding-Bed-1.png";
import imgFoldingBed2 from "@/app/images/folding-bed/Folding-Bed-2.png";
import imgFoldingBed3 from "@/app/images/folding-bed/Folding-Bed-3.png";
import imgFoldingBed4 from "@/app/images/folding-bed/Folding-Bed-4.png";
import imgFoldingBed5 from "@/app/images/folding-bed/Folding-Bed-5.png";
import imgFoldingBed6 from "@/app/images/folding-bed/Folding-Bed-6.png";
import imgWallFraming1 from "@/app/images/wall-framing/Wall-Framing-1.png";
import imgWallFraming2 from "@/app/images/wall-framing/Wall-Framing-2.png";
import imgWallFraming3 from "@/app/images/wall-framing/Wall-Framing-3.png";
import imgWallFraming4 from "@/app/images/wall-framing/Wall-Framing-4.png";
import imgWallFraming5 from "@/app/images/wall-framing/Wall-Framing-5.png";
import imgWallFraming6 from "@/app/images/wall-framing/Wall-Framing-6.png";
import imgWallFraming7 from "@/app/images/wall-framing/Wall-Framing-7.png";
import imgWallFraming8 from "@/app/images/wall-framing/Wall-Framing-8.png";
import imgWallFraming9 from "@/app/images/wall-framing/Wall-Framing-9.png";
import imgKitchen1 from "@/app/images/Kitchen/Kitchen-1.png";
import imgKitchen2 from "@/app/images/Kitchen/Kitchen-2.png";
import imgKitchen3 from "@/app/images/Kitchen/Kitchen-3.png";
import imgKitchen4 from "@/app/images/Kitchen/Kitchen-4.png";

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

export const featuredProductsArr: Product[] = [
  {
    id: "sultan-premium-cupboard-1",
    name: "Sultan",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan1,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "premium-folding-bed-1",
    name: "Folding Bed",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed1,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "decorative-wall-framing-1",
    name: "Wall Frames",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming1,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "modern-kitchen-cupboards-1",
    name: "Kitchen Cupboards",
    shortDescription: "Sleek and functional kitchen storage",
    description:
      "Organize your culinary space with our modern kitchen cupboards. Designed for maximum storage efficiency while maintaining a sleek, minimalist aesthetic that complements any modern home.",
    price: 1299,
    image: imgKitchen1,
    features: [
      "Soft-close hinges",
      "Water-resistant finish",
      "Adjustable shelving",
      "Minimalist handle-less design",
    ],
    category: "Storage",
  },
];

export const mockProducts: Product[] = [
  {
    id: "sultan-premium-cupboard-1",
    name: "Sultan 1",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan1,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "sultan-premium-cupboard-2",
    name: "Sultan 2",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan2,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "sultan-premium-cupboard-3",
    name: "Sultan 3",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan3,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "sultan-premium-cupboard-4",
    name: "Sultan 4",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan4,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "sultan-premium-cupboard-5",
    name: "Sultan 5",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan5,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "sultan-premium-cupboard-6",
    name: "Sultan 6",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan6,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "sultan-premium-cupboard-7",
    name: "Sultan 7",
    shortDescription: "Elegant and spacious premium cupboard",
    description:
      "The Sultan is a masterpiece of modern craftsmanship, beautifully blending the comfort of a luxury sofa with the utility of a premium bed. Designed with high-density foam and rich upholstery to provide unmatched relaxation.",
    price: 899,
    image: imgSultan7,
    features: [
      "High-density memory foam",
      "Premium fabric upholstery",
      "Easy conversion mechanism",
      "Sturdy wooden frame",
    ],
    category: "Cup Boards",
  },
  {
    id: "premium-folding-bed-1",
    name: "Folding Bed 1",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed1,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "premium-folding-bed-2",
    name: "Folding Bed 2",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed2,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "premium-folding-bed-3",
    name: "Folding Bed 3",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed3,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "premium-folding-bed-4",
    name: "Folding Bed 4",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed4,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "premium-folding-bed-5",
    name: "Folding Bed 5",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed5,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "premium-folding-bed-6",
    name: "Folding Bed 6",
    shortDescription: "Space-saving elegant folding bed",
    description:
      "Maximize your living space with our elegant folding bed. Engineered for comfort and durability, it seamlessly folds away when not in use, making it perfect for guest rooms and studio apartments.",
    price: 349,
    image: imgFoldingBed6,
    features: [
      "Foldable modern design",
      "Heavy-duty metal/wood frame",
      "Breathable comfortable mattress included",
      "Space-efficient",
    ],
    category: "Beds",
  },
  {
    id: "decorative-wall-framing-1",
    name: "Wall Frame 1",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming1,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-2",
    name: "Wall Frame 2",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming2,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-3",
    name: "Wall Frame 3",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming3,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-4",
    name: "Wall Frame 4",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming4,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-6",
    name: "Wall Frame 6",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming6,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-7",
    name: "Wall Frame 7",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming7,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-8",
    name: "Wall Frame 8",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming8,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "decorative-wall-framing-9",
    name: "Wall Frame 9",
    shortDescription: "Artisan crafted wood wall panelling",
    description:
      "Transform your walls into pieces of art with our custom wall framing. Hand-crafted from premium wood, these frames add a touch of warmth and sophistication to any interior space.",
    price: 299,
    image: imgWallFraming9,
    features: [
      "Premium rich wood finish",
      "Customizable dimensions",
      "Easy installation",
      "Timeless aesthetic",
    ],
    category: "Decor",
  },
  {
    id: "modern-kitchen-cupboards-1",
    name: "Kitchen Cupboard 1",
    shortDescription: "Sleek and functional kitchen storage",
    description:
      "Organize your culinary space with our modern kitchen cupboards. Designed for maximum storage efficiency while maintaining a sleek, minimalist aesthetic that complements any modern home.",
    price: 1299,
    image: imgKitchen1,
    features: [
      "Soft-close hinges",
      "Water-resistant finish",
      "Adjustable shelving",
      "Minimalist handle-less design",
    ],
    category: "Storage",
  },
  {
    id: "modern-kitchen-cupboards-2",
    name: "Kitchen Cupboard 2",
    shortDescription: "Sleek and functional kitchen storage",
    description:
      "Organize your culinary space with our modern kitchen cupboards. Designed for maximum storage efficiency while maintaining a sleek, minimalist aesthetic that complements any modern home.",
    price: 1299,
    image: imgKitchen2,
    features: [
      "Soft-close hinges",
      "Water-resistant finish",
      "Adjustable shelving",
      "Minimalist handle-less design",
    ],
    category: "Storage",
  },
  {
    id: "modern-kitchen-cupboards-3",
    name: "Kitchen Cupboard 3",
    shortDescription: "Sleek and functional kitchen storage",
    description:
      "Organize your culinary space with our modern kitchen cupboards. Designed for maximum storage efficiency while maintaining a sleek, minimalist aesthetic that complements any modern home.",
    price: 1299,
    image: imgKitchen3,
    features: [
      "Soft-close hinges",
      "Water-resistant finish",
      "Adjustable shelving",
      "Minimalist handle-less design",
    ],
    category: "Storage",
  },
  {
    id: "modern-kitchen-cupboards-4",
    name: "Kitchen Cupboard 4",
    shortDescription: "Sleek and functional kitchen storage",
    description:
      "Organize your culinary space with our modern kitchen cupboards. Designed for maximum storage efficiency while maintaining a sleek, minimalist aesthetic that complements any modern home.",
    price: 1299,
    image: imgKitchen4,
    features: [
      "Soft-close hinges",
      "Water-resistant finish",
      "Adjustable shelving",
      "Minimalist handle-less design",
    ],
    category: "Storage",
  },
];
