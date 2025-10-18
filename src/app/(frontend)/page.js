import { ProductCategory } from "@/components/ProductCategory";
import HeroSection from "@/components/HeroSection";
import { NewArrivals } from "@/components/NewArrivals";
import Newsletter from "@/components/Newsletter";
import Project from "@/components/Projects";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ProductCategory/>
    <NewArrivals/>
    <Project/>
    <Newsletter/>
    </>
  );
}
