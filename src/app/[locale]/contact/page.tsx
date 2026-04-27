"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import siteConfig from '@/config/site';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container section">
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_desc')}</p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <h3>{t('email_label')}</h3>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('whatsapp_label')}</h3>
              <a href={siteConfig.contact.whatsapp.url}>{siteConfig.contact.whatsapp.phone}</a>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('instagram_label')}</h3>
              <a href={siteConfig.contact.instagram.url} target="_blank" rel="noopener noreferrer">{siteConfig.contact.instagram.handle}</a>
            </div>
            <div className={styles.infoItem}>
              <h3>{t('etsy_label')}</h3>
              <a href={siteConfig.contact.etsy.url} target="_blank" rel="noopener noreferrer">{siteConfig.contact.etsy.shopName}</a>
            </div>
          </div>
        </div>

        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t('name')}</label>
              <input type="text" id="name" name="name" placeholder={t('name_placeholder')} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">{t('email')}</label>
              <input type="email" id="email" name="email" placeholder={t('email_placeholder')} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">{t('message')}</label>
              <textarea id="message" name="message" rows={5} placeholder={t('message_placeholder')} required></textarea>
            </div>
            <button type="submit" className="btn" disabled={status === "loading"}>
              {status === "loading" ? t('sending') : t('submit')}
            </button>

            {status === "success" && (
              <p className={styles.successMessage}>{t('success')}</p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>{t('error')}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
