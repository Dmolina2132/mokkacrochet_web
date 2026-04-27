import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en', 'de'],
  defaultLocale: 'es'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|de)/:path*']
};
