"use client";

import Link from "next/link";
import styles from "./patterns-prototype-grid.module.css";
import { useLocale } from 'next-intl';

// Generar 12 patrones placeholder
const MOCK_PATTERNS = Array.from({ length: 12 }, (_, i) => ({
  id: `pattern-${i + 1}`,
  title: `Patrón ${i + 1}`,
  category: ['own', 'tested'][i % 2],
  difficulty: ['Principiante', 'Intermedio', 'Avanzado'][i % 3],
  price: i % 3 === 0 ? 'Gratis' : `${(5 + (i % 3) * 3)}.00€`,
  description: `Descripción placeholder para el patrón ${i + 1}. Este es un texto de ejemplo para probar el diseño de la página.`,
  placeholderColor: i % 2 === 0 ? '#efebe9' : '#d7ccc8'
}));

export default function PatternsPrototypeGridPage() {
  const locale = useLocale();

  return (
    <div className="container section">
      <h1 className="text-center mb-4">Prototipo: Grid Responsive (Patrones)</h1>
      <p className="text-center mb-4" style={{ color: 'var(--color-text-light)' }}>
        Este prototipo muestra un grid responsive para patrones que ajusta automáticamente las columnas según el tamaño de pantalla.
      </p>

      <div className={styles.patternsGrid}>
        <div className={styles.patternCategory}>
          <h2>Patrones Propios</h2>
          <p>Diseñados desde cero por Mokka Crochet. Incluyen fotos del paso a paso.</p>
          <div className={styles.cardGrid}>
            {MOCK_PATTERNS.filter(p => p.category === 'own').map(pattern => (
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

        <div className={styles.patternCategory}>
          <h2>Patrones Testados</h2>
          <p>Patrones de otros diseñadores que hemos tejido y verificado.</p>
          <div className={styles.cardGrid}>
            {MOCK_PATTERNS.filter(p => p.category === 'tested').map(pattern => (
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
    </div>
  );
}
