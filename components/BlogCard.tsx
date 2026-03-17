import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '../types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '192px' }}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{post.date}</p>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{post.title}</h3>
        <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} style={{ marginTop: '8px', color: '#3b82f6', fontWeight: '500', textDecoration: 'underline' }}>
          Leer más
        </Link>
      </div>
    </div>
  );
}