// Server Component con next/image optimizado.
// priority: true → precarga (mejora LCP del Core Web Vitals)
// fill + object-cover → cubre sin distorsión

import Image from "next/image";

interface HeroSectionProps { imageSrc: string; imageAlt: string; }

export default function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-gray-800 overflow-hidden" style={{ height: '500px' }}>
      <Image src={imageSrc} alt={imageAlt} fill priority
             sizes="100vw" className="object-cover" />
    </section>
  );
}