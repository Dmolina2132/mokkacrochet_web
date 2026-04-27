import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import NewsletterForm from "@/components/NewsletterForm";
import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  const locale = useLocale();

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1>{t('hero_title')}</h1>
            <p>{t('hero_subtitle')}</p>
            <div className={styles.heroButtons}>
              <Link href={`/${locale}/designs`} className="btn">
                {t('btn_designs')}
              </Link>
              <Link href={`/${locale}/contact`} className="btn btn-secondary">
                {t('btn_contact')}
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={`floral-frame ${styles.imageFrame}`}>
              <Image 
                src="/photos/style/Screenshot 2026-04-26 at 21.50.46.png" 
                alt="Amigurumi Mokka Crochet"
                width={500}
                height={500}
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className="floral-frame" style={{transform: 'rotate(-2deg)'}}>
              <Image 
                src="/photos/style/Screenshot 2026-04-26 at 21.50.52.png" 
                alt="Nuestra Historia"
                width={400}
                height={400}
                style={{ objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <div className={styles.storyText}>
              <h2>{t('story_title')}</h2>
              <p>{t('story_p1')}</p>
              <p>{t('story_p2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.newsletter}`}>
        <div className="container text-center">
          <h2>{t('newsletter_title')}</h2>
          <p className="mb-2">{t('newsletter_desc')}</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
