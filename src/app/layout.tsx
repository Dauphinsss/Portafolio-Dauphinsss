import type { Metadata } from "next";
import "./globals.css";
import { lato } from "./fonts/fonts";




export const metadata: Metadata = {
  title: "Dauphinsss",
  description: "Mi portafolio personal xd",
  icons: "/duck.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${lato.className} antialiased font-[family-name:var(--font-geist-sans)] h-screen bg-zinc-950`}
      >
        {children}
      </body>
    </html>
  );
}
