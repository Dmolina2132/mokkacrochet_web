"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container section text-center">
      <h2 className="mb-4">{t('title') || 'Algo salió mal'}</h2>
      <p className="mb-4">{t('description') || 'Ha ocurrido un error inesperado.'}</p>
      <button
        onClick={() => reset()}
        className="btn"
      >
        {t('retry') || 'Intentar de nuevo'}
      </button>
    </div>
  );
}
