import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const NotoSansJP = Noto_Sans_JP();

export const metadata: Metadata = {
  title: "便利ツール",
  description: "シンプルで使いやすく、日常でも使える便利なツールをまとめたサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
