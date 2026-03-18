# Mi Sitio Web — SENA CEET

Proyecto desarrollado en el marco de la actividad **GitFlow + Next.js + Vercel** como parte de la formación en Análisis y Desarrollo de Software (ADSO) en el SENA CEET.

##  Tecnologías

- Next.js 16 con TypeScript y Turbopack
- Tailwind CSS para estilos utilitarios
- Git y GitHub con metodología GitFlow
- Vercel como plataforma de despliegue

##  Equipo

| Rol | Nombre | GitHub |
 Dev-01 | Juan Felipe González | [@juanfelipegonzalez177](https://github.com/juanfelipegonzalez177) |
 Dev-02 | Cristian YAara | [@juanfelipegonzalez177](https://github.com/juanfelipegonzalez177) |

## 📁 Estructura del Proyecto
```
mi-sitio-nextjs/
├── app/
│   ├── actions/
│   │   └── contact.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   ├── HeroSection.tsx
│   ├── Gallery.tsx
│   ├── GalleryImage.tsx
│   ├── BlogCard.tsx
│   ├── BlogSection.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts
├── types/
│   └── index.ts
└── public/
    └── img/
```

## 🌿 Ramas GitFlow

- `main` — versión estable en producción
- `develop` — integración de features
- `feature/shared-types-data` — Dev-01
- `feature/layout-navbar-hero` — Dev-01
- `feature/blog-section` — Dev-01
- `feature/gallery` — Dev-02
- `feature/contact-form` — Dev-02
- `feature/responsive-polish` — Dev-02
- `release/1.0.0` — release inicial
- `hotfix/1.0.1` — corrección footer

##  Versiones

- `v1.0.0` — Release inicial con todas las features
- `v1.0.1` — Hotfix: corrección de margen y color del footer

##  Instalación
```bash
git clone https://github.com/juanfelipegonzalez177/mi-sitio-nextjs.git
cd mi-sitio-nextjs
npm install
npm run dev
```

##  Despliegue

URL producción: https://mi-sitio-nextjs.vercel.app

## 📄 Licencia

SENA CEET — Bogotá D.C., Colombia — 2026
