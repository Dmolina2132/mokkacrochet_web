import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['es', 'en', 'de'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  console.log("i18n.ts running with locale:", locale);
  
  if (!locale || !locales.includes(locale as any)) {
    console.log("Locale not found in array! Defaulting to es.");
    locale = 'es';
  }

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return { locale, messages };
  } catch (err) {
    console.error("Failed to load messages for locale:", locale, err);
    notFound();
  }
});
