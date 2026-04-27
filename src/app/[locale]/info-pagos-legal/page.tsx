import { Metadata } from "next";
import Link from "next/link";
import styles from "./legal.module.css";
import { useTranslations, useLocale } from 'next-intl';

export const metadata: Metadata = {
  title: "Información de Pagos y Legal | Mokka Crochet",
};

export default function LegalPage() {
  const t = useTranslations('Legal');
  const tContact = useTranslations('Contact');
  const locale = useLocale();

  return (
    <div className="container section">
      <div className={styles.legalWrapper}>
        <h1 className="text-center mb-4">{t('title')}</h1>

        <section className={styles.legalSection}>
          <h2>{t('payments_title')}</h2>
          <p>
            {t('payments_desc')}
          </p>
          <ul>
            <li><strong>{t('stripe_label')}:</strong> {t('stripe_desc')}</li>
            <li><strong>{t('paypal_label')}:</strong> {t('paypal_desc')}</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2>{t('digital_title')}</h2>
          <p>{t('digital_desc')}</p>
          <ul>
            <li><strong>{t('digital_eu_label')}:</strong> {t('digital_eu_desc')}</li>
            <li><strong>{t('digital_world_label')}:</strong> {t('digital_world_desc')}</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2>{t('shipping_title')}</h2>
          <p>{t('shipping_desc')}</p>
          <ul>
            <li><strong>{t('shipping_eu_label')}:</strong> {t('shipping_eu_desc')}</li>
            <li><strong>{t('shipping_world_label')}:</strong> {t('shipping_world_desc')}</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2>{t('terms_title')}</h2>
          <ul>
            <li><strong>{t('digital_returns_label')}:</strong> {t('digital_returns_desc')}</li>
            <li><strong>{t('stock_returns_label')}:</strong> {t('stock_returns_desc')}</li>
            <li><strong>{t('custom_returns_label')}:</strong> {t('custom_returns_desc')}</li>
          </ul>
        </section>

        <div className="text-center mt-4">
          <p>{tContact('more_questions')}</p>
          <Link href={`/${locale}/contact`} className="btn mt-2">{tContact('contact_us')}</Link>
        </div>
      </div>
    </div>
  );
}
