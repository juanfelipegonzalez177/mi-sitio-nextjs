import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import { heroImage } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />
      <Gallery />
    </>
  );
}