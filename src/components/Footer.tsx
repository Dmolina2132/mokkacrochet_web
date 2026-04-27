import Link from 'next/link';
import styles from './Footer.module.css';
import { useTranslations, useLocale } from 'next-intl';
import siteConfig from '@/config/site';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');
  const tContact = useTranslations('Contact');
  const tLegal = useTranslations('Legal');
  const locale = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <h3>Mokka Crochet</h3>
          <p>{t('slogan')}</p>
        </div>

        <div className={styles.footerLinks}>
          <h4>{t('links')}</h4>
          <ul>
            <li><Link href={`/${locale}`}>{tNav('home')}</Link></li>
            <li><Link href={`/${locale}/designs`}>{tNav('designs')}</Link></li>
            <li><Link href={`/${locale}/patterns`}>{tNav('patterns')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{tNav('contact')}</Link></li>
            <li><Link href={`/${locale}/info-pagos-legal`}>{tLegal('title')}</Link></li>
          </ul>
        </div>

        <div className={styles.footerContact}>
          <h4>{t('contact')}</h4>
          <ul>
            <li>{tContact('email_label')}: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
            <li>{tContact('whatsapp_label')}: <a href={siteConfig.contact.whatsapp.url}>{siteConfig.contact.whatsapp.phone}</a></li>
            <li>{tContact('instagram_label')}: <a href={siteConfig.contact.instagram.url} target="_blank" rel="noopener noreferrer">{siteConfig.contact.instagram.handle}</a></li>
            <li>{tContact('etsy_label')}: <a href={siteConfig.contact.etsy.url} target="_blank" rel="noopener noreferrer">{siteConfig.contact.etsy.shopName}</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Mokka Crochet. {t('rights')}</p>
      </div>
    </footer>
  );
}
