import React from "react";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${'/hero.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">
            Transform Your Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Discover handcrafted rugs that elevate your home with timeless elegance
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-card text-card-foreground hover:bg-card/90">
              Shop Collection
            </Button>
            <Button size="lg" variant="outline" className="border-card text-card bg-transparent hover:bg-card/10 backdrop-blur-sm">
              Explore Styles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
