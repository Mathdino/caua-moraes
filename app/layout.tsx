import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/header";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cauã Moraes - Treinos Personalizados para Jovens Atletas",
  description:
    "Treinamento especializado em futebol para crianças e adolescentes de 7 a 15 anos. Desenvolvimento técnico, físico e motor com metodologia profissional.",
  generator: "v0.app",
  keywords: [
    "futebol",
    "treino personalizado",
    "aulas particulares",
    "jovens atletas",
    "São Paulo",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1DB954",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
