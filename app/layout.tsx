import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Стажировка в МКБ",
  description: "Кликабельный прототип лендинга стажировок МКБ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
