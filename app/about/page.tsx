import Image from "next/image";
import { ShieldCheck, Recycle, PenTool } from "lucide-react";
import imgAboutHero from "@/app/images/wall-framing/Wall-Framing-2.png";
import imgAbout from "@/app/images/Ambar_about-us.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto py-12 flex items-center justify-center overflow-hidden  border-b border-white/10">
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="font-serif text-3xl md:text-7xl font-bold tracking-tight mb-6">
            Our Story
          </h1>
          <p className="text-sm md:text-lg max-w-2xl mx-auto text-white/90">
            A legacy of craftsmanship, dedication, and an uncompromising
            commitment to quality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The Heritage of <br /> Ambar Furniture
              </h2>
              <div className="text-muted text-base md:text-lg space-y-6 leading-relaxed">
                <p>
                  Founded over a decade ago, Ambar Furniture started in a small
                  local workshop with a simple mission: to build furniture that
                  lasts generations.
                </p>
                <p>
                  Our founders believed that mass-produced furniture lacked the
                  soul and durability of true craftsmanship. Thus, Ambar was
                  born from a passion for metal sheet and a dedication to the
                  age-old techniques of joinery and finishing.
                </p>
                <p>
                  Today, we continue to honor that legacy. Every piece in our
                  collection, from the majestic Sultan Cup Board to our
                  intricate wall framings, is conceptualized, designed, and
                  built by skilled artisans who treat wood like canvas.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imgAbout}
                alt="Workshop Details"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background border-t border-white/10 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-6xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-16 text-white">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <PenTool className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4">
                Master Craftsmanship
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                We combine traditional techniques with modern
                precision to create pieces that are structurally sound and
                visually stunning.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4">
                Uncompromising Quality
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                From selecting the finest solid woods to sourcing premium
                fabrics and sturdy hardwares, quality is our foremost priority.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Recycle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold mb-4">
                Sustainable Practices
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                We respect nature by ethically sourcing our materials and
                minimizing waste throughout our entire production process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
