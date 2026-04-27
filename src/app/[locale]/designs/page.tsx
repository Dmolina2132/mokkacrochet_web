import Image from "next/image";
import Link from "next/link";
import styles from "./designs.module.css";
import { Metadata } from "next";
import { useTranslations, useLocale } from 'next-intl';

export const metadata: Metadata = {
  title: "Diseños Mokka Crochet | Peluches y Amigurumis",
  description: "Explora nuestra colección de diseños de crochet: Pokémon, animales, personajes de películas y pedidos personalizados.",
};

const CATEGORIES = [
  { id: "pokemon", name: "Pokémon" },
  { id: "peliculas", name: "Películas Infantiles" },
  { id: "animales", name: "Animales" }
];

const MOCK_DESIGNS = [
  { id: "1", title: "Diseño 1", category: "pokemon", price: "35€", image: "/photos/design/Screenshot 2026-04-26 at 21.52.38.png" },
  { id: "2", title: "Diseño 2", category: "pokemon", price: "35€", image: "/photos/design/Screenshot 2026-04-26 at 21.52.44.png" },
  { id: "3", title: "Diseño 3", category: "animales", price: "25€", image: "/photos/design/Screenshot 2026-04-26 at 21.52.55.png" },
  { id: "4", title: "Diseño 4", category: "peliculas", price: "40€", image: "/photos/design/Screenshot 2026-04-26 at 21.53.05.png" },
];

export default function DesignsPage() {
  const t = useTranslations('Designs');
  const locale = useLocale();

  return (
    <div className={`container section`}>
      <h1 className="text-center mb-4">{t('title')}</h1>
      
      {CATEGORIES.map(category => (
        <div key={category.id} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category.name}</h2>
          <div className={styles.grid}>
            {MOCK_DESIGNS.filter(d => d.category === category.id).map(design => (
              <Link href={`/${locale}/designs/${design.id}`} key={design.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image 
                    src={design.image} 
                    alt={design.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
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
