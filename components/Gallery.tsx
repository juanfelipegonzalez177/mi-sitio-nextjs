import Image from 'next/image';
import { galleryImages } from '../lib/data';
import type { GalleryImageType } from '../types/index';

export default function Gallery() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestra Galería</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image: GalleryImageType) => (
          <div key={image.id} className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={image.src}
              alt={image.alt || 'Imagen de la galería'}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
