import Image from 'next/image';
import { galleryImages } from '../lib/data';
import type { GalleryImageType } from '../types/index';

export default function Gallery() {
  return (
    <section style={{ padding: '48px 16px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px' }}>
        Nuestra Galería
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        maxWidth: '1152px',
        margin: '0 auto'
      }}>
        {galleryImages.map((image: GalleryImageType) => (
          <div key={image.id} style={{
            position: 'relative',
            width: '100%',
            height: '256px',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            <Image
              src={image.src}
              alt={image.alt || 'Imagen de la galería'}
              fill
              sizes="33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}