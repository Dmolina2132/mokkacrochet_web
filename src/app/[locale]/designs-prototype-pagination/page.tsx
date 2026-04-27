"use client";

import Link from "next/link";
import styles from "./designs-prototype-pagination.module.css";
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';

const CATEGORIES = [
  { id: "pokemon", name: "Pokémon" },
  { id: "peliculas", name: "Películas Infantiles" },
  { id: "animales", name: "Animales" }
];

// Generar 24 diseños placeholder
const MOCK_DESIGNS = Array.from({ length: 24 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Diseño ${i + 1}`,
  category: ['pokemon', 'peliculas', 'animales'][i % 3],
  price: `${(25 + (i % 3) * 10)}€`,
  description: `Descripción placeholder para el diseño ${i + 1}. Este es un texto de ejemplo para probar el diseño de la página.`,
  placeholderColor: i % 2 === 0 ? '#efebe9' : '#d7ccc8'
}));

const ITEMS_PER_PAGE = 6;

export default function DesignsPrototypePaginationPage() {
  const t = useTranslations('Designs');
  const locale = useLocale();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MOCK_DESIGNS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentDesigns = MOCK_DESIGNS.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`container section`}>
      <h1 className="text-center mb-4">Prototipo: Grid con Paginación</h1>
      <p className="text-center mb-4" style={{ color: 'var(--color-text-light)' }}>
        Este prototipo muestra un grid responsive con paginación. Muestra 6 diseños por página.
      </p>
      
      <div className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>Todos los Diseños</h2>
        <div className={styles.grid}>
          {currentDesigns.map(design => (
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

      <div className={styles.pagination}>
        <button 
          className={styles.paginationButton}
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Anterior
        </button>
        <div className={styles.paginationInfo}>
          Página {currentPage} de {totalPages}
        </div>
        <button 
          className={styles.paginationButton}
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente →
        </button>
      </div>
      
      <div className={styles.customOrder}>
        <h2>{t('cta')}</h2>
        <p>{t('cta_desc')}</p>
        <Link href={`/${locale}/contact`} className="btn mt-2">{t('cta_btn')}</Link>
      </div>
    </div>
  );
}
