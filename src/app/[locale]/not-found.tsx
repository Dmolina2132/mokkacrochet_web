import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations('Error');

  return (
    <div className="container section text-center">
      <h2 className="mb-4">{t('notFound') || 'Página no encontrada'}</h2>
      <p className="mb-4">{t('notFoundDescription') || 'La página que buscas no existe.'}</p>
      <Link href="/" className="btn">
        {t('goHome') || 'Volver al inicio'}
      </Link>
    </div>
  );
}
