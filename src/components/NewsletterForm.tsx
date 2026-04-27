"use client";

import { useState } from "react";
import styles from "../app/[locale]/page.module.css";
import { useTranslations } from 'next-intl';

export default function NewsletterForm() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(t('newsletter_success'));
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(data.error || t('newsletter_error'));
      }
    } catch (error) {
      setStatus("error");
      setMessage(t('newsletter_connection_error'));
    }
  };

  return (
    <>
      <form className={styles.newsletterForm} onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder={t('email_placeholder')} required className={styles.input} />
        <button type="submit" className="btn" disabled={status === "loading"}>
          {status === "loading" ? t('newsletter_sending') : t('subscribe')}
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '1rem', color: status === 'success' ? '#a5d6a7' : '#ef9a9a' }}>
          {message}
        </p>
      )}
    </>
  );
}
