import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { defaultLocale, supportedLocales } from "@/i18n/locales";
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

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : "en-US";
  const dict = await getDictionary(locale);
  const title = (dict as any).common?.siteTitle ?? "Nexorum";
  const description = (dict as any).common?.siteDescription ?? "Nexorum official website";
  const canonicalPath = locale === defaultLocale ? "/" : `/${locale}`;

  return {
    metadataBase: new URL("https://www.nexorum.io"),
    title,
    description,
    icons: {
      icon: "/new-logo.ico",
      shortcut: "/new-logo.ico",
      apple: "/new-logo.png",
    },
    alternates: {
      canonical: canonicalPath,
      languages: {
        "pt-BR": "/pt-BR",
        "en-US": defaultLocale === "en-US" ? "/" : `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url: canonicalPath,
      siteName: "Nexorum",
      locale,
      title,
      description,
      images: [
        {
          url: "/new-logo.png",
          width: 1200,
          height: 630,
          alt: "Nexorum",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/new-logo.png"],
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
