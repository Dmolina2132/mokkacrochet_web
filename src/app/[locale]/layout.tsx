import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Mokka Crochet | Diseños y Peluches Artesanales",
  description: "Descubre hermosos diseños y peluches hechos a crochet. Especialistas en amigurumis de Pokémon, películas infantiles y diseños personalizados.",
  keywords: ["crochet", "amigurumi", "peluches", "pokemon", "hecho a mano", "patrones crochet"],
  icons: {
    icon: "/logos/logo_pagina.png",
    apple: "/logos/logo_pagina.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main style={{ minHeight: "calc(100vh - 300px)" }}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
