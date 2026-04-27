"use client";

import Link from "next/link";
import styles from "./designs-prototype-carousel.module.css";
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

const CATEGORIES = [
  { id: "pokemon", name: "Pokémon" },
  { id: "peliculas", name: "Películas Infantiles" },
  { id: "animales", name: "Animales" }
];

// Generar 12 diseños placeholder por categoría
const MOCK_DESIGNS = Array.from({ length: 36 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Diseño ${i + 1}`,
  category: ['pokemon', 'peliculas', 'animales'][i % 3],
  price: `${(25 + (i % 3) * 10)}€`,
  description: `Descripción placeholder para el diseño ${i + 1}. Este es un texto de ejemplo para probar el diseño de la página.`,
  placeholderColor: i % 2 === 0 ? '#efebe9' : '#d7ccc8'
}));

const ITEMS_PER_CATEGORY = 12;

export default function DesignsPrototypeCarouselPage() {
  const t = useTranslations('Designs');
  const locale = useLocale();
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});

  const scrollCarousel = (categoryId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(`carousel-${categoryId}`);
    if (container) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? (scrollPositions[categoryId] || 0) - scrollAmount
        : (scrollPositions[categoryId] || 0) + scrollAmount;
      
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPositions(prev => ({ ...prev, [categoryId]: newPosition }));
    }
  };

  return (
    <div className={`container section`}>
      <h1 className="text-center mb-4">Prototipo: Carrusel por Categorías</h1>
      <p className="text-center mb-4" style={{ color: 'var(--color-text-light)' }}>
        Este prototipo muestra carruseles horizontales agrupados por categoría. Usa las flechas para navegar.
      </p>
      
      {CATEGORIES.map(category => {
        const categoryDesigns = MOCK_DESIGNS.filter(d => d.category === category.id);
        return (
          <div key={category.id} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.carouselContainer}>
              <button 
                className={styles.carouselButton}
                onClick={() => scrollCarousel(category.id, 'left')}
                aria-label="Anterior"
              >
                ←
              </button>
              <div 
                id={`carousel-${category.id}`}
                className={styles.carousel}
              >
                {categoryDesigns.map(design => (
                  <Link 
                    href={`/${locale}/designs/${design.id}`} 
                    key={design.id} 
                    className={styles.card}
                  >
                    <div 
                      className={styles.cardImage} 
                      style={{ backgroundColor: design.placeholderColor }}
                    >
                      <div className={styles.placeholderText}>{design.title}</div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3>{design.title}</h3>
                      <p className={styles.price}>{design.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <button 
                className={styles.carouselButton}
                onClick={() => scrollCarousel(category.id, 'right')}
                aria-label="Siguiente"
              >
                →
              </button>
            </div>
          </div>
        );
      })}
      
      <div className={styles.customOrder}>
        <h2>{t('cta')}</h2>
        <p>{t('cta_desc')}</p>
        <Link href={`/${locale}/contact`} className="btn mt-2">{t('cta_btn')}</Link>
      </div>
    </div>
  );
}
