// components/Navbar.tsx
import Link from "next/link";
import SearchBar from "./SearchBar";
import { siteConfig } from "@/lib/data";

export default function Navbar() {
  return (
    <header style={{ backgroundColor: '#111827', color: 'white', padding: '12px 0', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ width: '90%', maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          {siteConfig.name}
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}