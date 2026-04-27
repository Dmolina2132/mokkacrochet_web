import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import styles from "./patternDetail.module.css";
import { useLocale } from "next-intl";

export const metadata: Metadata = {
  title: "Detalle del Patrón | Mokka Crochet",
};

export default function PatternDetailPage({ params }: { params: { id: string } }) {
  const locale = useLocale();
  const filePath = path.join(process.cwd(), 'src/data/patterns.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { patterns } = JSON.parse(fileContents);
  
  const pattern = patterns.find((p: any) => p.id === params.id);

  if (!pattern) {
    return (
      <div className="container section text-center">
        <h1>Patrón no encontrado</h1>
        <Link href={`/${locale}/patterns`} className="btn mt-2">Volver a patrones</Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <Link href={`/${locale}/patterns`} className={styles.backLink}>&larr; Volver a patrones</Link>
      
      <div className={styles.layout}>
        <div className={styles.mediaColumn}>
          <div className={`floral-frame ${styles.imageWrapper}`}>
            <Image 
              src={pattern.image} 
              alt={pattern.title}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {pattern.youtubeId && (
            <div className={styles.videoWrapper}>
              <h3>Videotutorial Incluido</h3>
              <div className={styles.iframeContainer}>
                <iframe 
                  src={`https://www.youtube.com/embed/${pattern.youtubeId}`} 
                  title={`Tutorial ${pattern.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <div className={styles.infoColumn}>
          <h1>{pattern.title}</h1>
          <div className={styles.meta}>
            <span className={styles.difficulty}>Dificultad: {pattern.difficulty}</span>
            <span className={styles.price}>{pattern.price}</span>
          </div>
          
          <div className={styles.description}>
            <h3>Descripción</h3>
            <p>{pattern.description}</p>
          </div>

          <div className={styles.actions}>
            {pattern.price === "Gratis" ? (
              <a href={pattern.downloadUrl} className="btn" target="_blank" rel="noopener noreferrer">
                Descargar Patrón Gratis
              </a>
            ) : (
              <a href={pattern.etsyUrl || "#"} className="btn" target="_blank" rel="noopener noreferrer">
                Comprar Patrón en Etsy
              </a>
            )}
            <p className={styles.disclaimer}>
              * Los patrones son productos digitales (PDF). Según las leyes internacionales, no se aplican impuestos a compradores fuera de la UE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
