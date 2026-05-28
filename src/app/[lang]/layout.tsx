import { Inter, Orbitron } from "next/font/google";
import { supportedLocales } from "@/i18n/locales";
import { getDictionary, hasLocale } from "./dictionaries";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en-US";
  const dict = await getDictionary(locale);
  const title = (dict as any).common?.siteTitle ?? "Nexorum";
  const description = (dict as any).common?.siteDescription ?? "Nexorum official website";

  return {
    title,
    description,
    alternates: {
      languages: {
        "pt-BR": "/pt-BR",
        "en-US": "/en-US",
      },
    },
  };
}

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${inter.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
