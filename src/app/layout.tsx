import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PizzaManager - Seu gerenciador de negócio",
  description: "Gerenciando o seu negócio da melhor maneira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#f1f1f1",
              color: "#131313",
              borderColor: "rgba(255,255,255, 0.5",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
