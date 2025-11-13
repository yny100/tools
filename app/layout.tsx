import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const NotoSansJP = Noto_Sans_JP();
const PoppinsFont = Poppins({ weight: "400" });

export const metadata: Metadata = {
  title: "YNYTools | シンプルで使いやすい日常向けWebアプリ集",
  description: "シンプルで使いやすい便利ツールをまとめたサイトです。日常で役立つツールを無料で利用できます。",
  keywords: ["便利ツール", "無料ツール", "日常", "Webアプリ", "シンプル", "YNYTools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className} ${PoppinsFont.className}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
