import { useTranslations } from 'next-intl';
import styles from './blog.module.css';

export default function BlogPage() {
  const t = useTranslations('Blog');

  return (
    <div className="container section">
      <div className={styles.blogContainer}>
        <h1 className={styles.blogTitle}>{t('title')}</h1>
        <p className={styles.blogSubtitle}>{t('subtitle')}</p>

        <article className={styles.blogPost}>
          <div className={styles.blogHeader}>
            <h2 className={styles.postTitle}>{t('post1_title')}</h2>
            <p className={styles.postDate}>{t('post1_date')}</p>
          </div>

          <div className={styles.blogContent}>
            <p className={styles.intro}>{t('post1_intro')}</p>

            <p>{t('post1_paragraph1')}</p>

            <div className={styles.blogImage}>
              <img src="/logos/logo_pagina.png" alt="Mokka Crochet" />
            </div>

            <p>{t('post1_paragraph2')}</p>

            <p>{t('post1_paragraph3')}</p>

            <div className={styles.blogQuote}>
              <p>{t('post1_quote')}</p>
            </div>

            <p>{t('post1_paragraph4')}</p>

            <p>{t('post1_paragraph5')}</p>

            <div className={styles.blogImage}>
              <img src="/logos/logo.png" alt="Mokka Crochet Logo" />
            </div>

            <p>{t('post1_conclusion')}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
