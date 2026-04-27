import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalle del Diseño | Mokka Crochet",
};

// En un entorno real, esto vendría de una base de datos
const MOCK_DESIGNS = {
  "1": { title: "Pikachu Amigurumi", description: "Fiel compañero de aventuras tejido a mano. Suave, detallado y perfecto para cualquier fan de Pokémon.", time: "1-2 semanas", price: "35€", image: "/photos/design/Screenshot 2026-04-26 at 21.52.38.png" },
  "2": { title: "Charmander Amigurumi", description: "El inicial de fuego más adorable. Hecho con hilos de algodón hipoalergénico y relleno súper suave.", time: "1-2 semanas", price: "35€", image: "/photos/design/Screenshot 2026-04-26 at 21.52.44.png" },
  "3": { title: "Osito Dormilón", description: "El regalo perfecto para recién nacidos. Un osito diseñado para acompañar los mejores sueños.", time: "1 semana", price: "25€", image: "/photos/design/Screenshot 2026-04-26 at 21.52.55.png" },
  "4": { title: "Personaje Mágico", description: "Personaje mágico sacado de tus películas favoritas, con detalles bordados a mano.", time: "2-3 semanas", price: "40€", image: "/photos/design/Screenshot 2026-04-26 at 21.53.05.png" },
};

export default function ProductPage({ params }: { params: { id: string, locale: string } }) {
  const design = MOCK_DESIGNS[params.id as keyof typeof MOCK_DESIGNS];

  if (!design) {
    return <div className="container section text-center"><h1>Diseño no encontrado</h1><Link href={`/${params.locale}/designs`}>Volver a diseños</Link></div>;
  }

  return (
    <div className={`container section`}>
      <Link href={`/${params.locale}/designs`} className={styles.backLink}>&larr; Volver a diseños</Link>
      <div className={styles.productLayout}>
        <div className={styles.productImage}>
          <Image 
            src={design.image} 
            alt={design.title}
            fill
            style={{ objectFit: 'contain', borderRadius: '12px' }}
          />
        </div>
        <div className={styles.productInfo}>
          <h1>{design.title}</h1>
          <p className={styles.price}>{design.price}</p>
          <div className={styles.description}>
            <h3>Descripción</h3>
            <p>{design.description}</p>
          </div>
          <div className={styles.details}>
            <p><strong>Tiempo estimado de encargo:</strong> {design.time}</p>
            <p><strong>Materiales:</strong> Hilo de algodón 100%, relleno sintético hipoalergénico.</p>
          </div>
          <div className={styles.actions}>
            <Link href={`/${params.locale}/contact?subject=Encargo: ${design.title}`} className="btn">
              Solicitar Encargo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
