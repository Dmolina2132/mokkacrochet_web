"use client";

import Link from "next/link";
import styles from "./patterns-prototype-pagination.module.css";
import { useLocale } from 'next-intl';
import { useState } from 'react';

// Generar 18 patrones placeholder
const MOCK_PATTERNS = Array.from({ length: 18 }, (_, i) => ({
  id: `pattern-${i + 1}`,
  title: `Patrón ${i + 1}`,
  category: ['own', 'tested'][i % 2],
  difficulty: ['Principiante', 'Intermedio', 'Avanzado'][i % 3],
  price: i % 3 === 0 ? 'Gratis' : `${(5 + (i % 3) * 3)}.00€`,
  description: `Descripción placeholder para el patrón ${i + 1}. Este es un texto de ejemplo para probar el diseño de la página.`,
  placeholderColor: i % 2 === 0 ? '#efebe9' : '#d7ccc8'
}));

const ITEMS_PER_PAGE = 6;

export default function PatternsPrototypePaginationPage() {
  const locale = useLocale();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(MOCK_PATTERNS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPatterns = MOCK_PATTERNS.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container section">
      <h1 className="text-center mb-4">Prototipo: Grid con Paginación (Patrones)</h1>
      <p className="text-center mb-4" style={{ color: 'var(--color-text-light)' }}>
        Este prototipo muestra un grid responsive con paginación para patrones. Muestra 6 patrones por página.
      </p>

      <div className={styles.patternsGrid}>
        <div className={styles.patternCategory}>
          <h2>Todos los Patrones</h2>
          <p>Patrones propios y testados organizados en una sola vista con paginación.</p>
          <div className={styles.cardGrid}>
            {currentPatterns.map(pattern => (
              <Link href={`/${locale}/patterns/${pattern.id}`} key={pattern.id} className={styles.card}>
                <div 
                  className={styles.cardImageWrapper}
                  style={{ backgroundColor: pattern.placeholderColor }}
                >
                  <div className={styles.placeholderText}>{pattern.title}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{pattern.title}</h3>
                  <p className={styles.difficulty}>{pattern.difficulty}</p>
                  <p className={styles.price}>{pattern.price}</p>
                </div>
              </Link>
            ))}
          </div>
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
    </div>
  );
}
