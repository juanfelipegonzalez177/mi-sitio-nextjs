// lib/data.ts
// Fuente de datos centralizada. En producción, estos datos
// vendrían de un CMS (Strapi, Sanity) o base de datos.

import type { GalleryImageType, BlogPost, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Mi Sitio Web",
  description: "Galería, blog y contacto – Taller SENA CEET",
  url: "https://mi-sitio.azurestaticapps.net",
  author: "SENA CEET – ADSO",
  year: new Date().getFullYear(),
};

export const heroImage = {
  src: "/img/header.jpg",
  alt: "Imagen principal del sitio",
};

export const galleryImages: GalleryImageType[] = [
  { id:1, src:"/img/img1.jpg", alt:"Ciudad futurista con luces neón", width:1024, height:768 },
  { id:2, src:"/img/img2.jpg", alt:"Caballo en paisaje brumoso", width:1024, height:768 },
  { id:3, src:"/img/img3.jpg", alt:"Imagen 3", width:1024, height:768 },
  { id:4, src:"/img/img4.jpg", alt:"Imagen 4", width:1024, height:768 },
  { id:5, src:"/img/img5.jpg", alt:"Imagen 5", width:1024, height:768 },
  { id:6, src:"/img/img6.jpg", alt:"Imagen 6", width:1024, height:768 },
  { id:7, src:"/img/img7.jpg", alt:"Imagen 7", width:1024, height:768 },
  { id:8, src:"/img/img8.jpg", alt:"Imagen 8", width:1024, height:768 },
  { id:9, src:"/img/img9.jpg", alt:"Imagen 9", width:1024, height:768 },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "inteligencia-artificial-trabajo",
    title: "IA en el Trabajo",
    date: "15 de marzo de 2025",
    excerpt: "Cómo la IA transforma los espacios de trabajo...",
    image: { src: "/img/img7.jpg", alt: "Robot en escritorio" },
  },
];
