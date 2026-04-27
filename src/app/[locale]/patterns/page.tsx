import styles from "./patterns.module.css";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Patrones de Crochet | Mokka Crochet",
  description: "Encuentra patrones de crochet gratuitos, patrones propios de Mokka y patrones testados por nosotros.",
};

export default function PatternsPage() {
  const locale = useLocale();
  const filePath = path.join(process.cwd(), 'src/data/patterns.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { patterns } = JSON.parse(fileContents);

  const renderPatternCard = (pattern: any) => (
    <Link href={`/${locale}/patterns/${pattern.id}`} key={pattern.id} className={styles.card}>
      <div className={`floral-frame ${styles.cardImageWrapper}`}>
        <Image src={pattern.image} alt={pattern.title} fill style={{ objectFit: 'cover', borderRadius: '12px' }} />
      </div>
      <div className={styles.cardContent}>
        <h3>{pattern.title}</h3>
        <p className={styles.difficulty}>{pattern.difficulty}</p>
        <p className={styles.price}>{pattern.price}</p>
      </div>
    </Link>
  );

  return (
    <div className="container section">
      <div className="text-center mb-4">
        <h1>Patrones de Crochet</h1>
        <p>Aprende a tejer tus propios amigurumis con nuestros patrones detallados paso a paso.</p>
      </div>

      <div className={styles.patternsGrid}>
        <div className={styles.patternCategory}>
          <h2>Patrones Propios</h2>
          <p>Diseñados desde cero por Mokka Crochet. Incluyen fotos del paso a paso.</p>
          <div className={styles.cardGrid}>
            {patterns.filter((p: any) => p.category === 'own').map(renderPatternCard)}
          </div>
        </div>

        <div className={styles.patternCategory}>
          <h2>Patrones Testados</h2>
          <p>Patrones de otros diseñadores que hemos tejido y verificado.</p>
          <div className={styles.cardGrid}>
            {patterns.filter((p: any) => p.category === 'tested').map(renderPatternCard)}
          </div>
        </div>
      </div>
    </div>
  );
}
