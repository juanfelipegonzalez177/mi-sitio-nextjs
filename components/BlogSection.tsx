import { blogPosts } from '../lib/data';
import BlogCard from './BlogCard';

export default function BlogSection() {
  return (
    <section style={{ padding: '48px 16px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px' }}>Blog</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '1152px', margin: '0 auto' }}>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}