"use client";

import Link from "next/link";
import styles from "./designs-prototype-grid.module.css";
import { useTranslations, useLocale } from 'next-intl';

const CATEGORIES = [
  { id: "pokemon", name: "Pokémon" },
  { id: "peliculas", name: "Películas Infantiles" },
  { id: "animales", name: "Animales" }
];

// Generar 16 diseños placeholder
const MOCK_DESIGNS = Array.from({ length: 16 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Diseño ${i + 1}`,
  category: ['pokemon', 'peliculas', 'animales'][i % 3],
  price: `${(25 + (i % 3) * 10)}€`,
  description: `Descripción placeholder para el diseño ${i + 1}. Este es un texto de ejemplo para probar el diseño de la página.`,
  placeholderColor: i % 2 === 0 ? '#efebe9' : '#d7ccc8'
}));

export default function DesignsPrototypeGridPage() {
  const t = useTranslations('Designs');
  const locale = useLocale();

  return (
    <div className={`container section`}>
      <h1 className="text-center mb-4">Prototipo: Grid Responsive</h1>
      <p className="text-center mb-4" style={{ color: 'var(--color-text-light)' }}>
        Este prototipo muestra un grid responsive que ajusta automáticamente las columnas según el tamaño de pantalla.
      </p>
      
      {CATEGORIES.map(category => (
        <div key={category.id} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.name}</h2>
          <div className={styles.grid}>
            {MOCK_DESIGNS.filter(d => d.category === category.id).map(design => (
              <Link href={`/${locale}/designs/${design.id}`} key={design.id} className={styles.card}>
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
        </div>
      ))}
      
      <div className={styles.customOrder}>
        <h2>{t('cta')}</h2>
        <p>{t('cta_desc')}</p>
        <Link href={`/${locale}/contact`} className="btn mt-2">{t('cta_btn')}</Link>
      </div>
    </div>
  );
}
