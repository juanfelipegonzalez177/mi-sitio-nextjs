import { siteConfig } from '../lib/data';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #d1d5db', marginTop: '48px', padding: '24px 16px', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
      <p>© {siteConfig.year} {siteConfig.name} — {siteConfig.author}</p>
    </footer>
  );
}