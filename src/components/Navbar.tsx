"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const locales = [
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'de', name: 'DE', flag: '🇩🇪' }
];

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();

  // Simple language switcher logic
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.replace(segments.join('/'));
  };

  const currentLocale = pathname.split('/')[1] || 'es';

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href={`/${currentLocale}`} className={styles.logo}>
          <Image 
            src="/logos/logo.png" 
            alt="Mokka Crochet Logo" 
            width={150} 
            height={50} 
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href={`/${currentLocale}`}>{t('home')}</Link></li>
          <li><Link href={`/${currentLocale}/designs`}>{t('designs')}</Link></li>
          <li><Link href={`/${currentLocale}/patterns`}>{t('patterns')}</Link></li>
          <li><Link href={`/${currentLocale}/blog`}>{t('blog')}</Link></li>
          <li><Link href={`/${currentLocale}/contact`}>{t('contact')}</Link></li>
          <li>
            <select value={currentLocale} onChange={changeLanguage} className={styles.langSelect}>
              {locales.map((loc) => (
                <option key={loc.code} value={loc.code}>
                  {loc.flag} {loc.name}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
