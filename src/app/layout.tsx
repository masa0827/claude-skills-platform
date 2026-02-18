import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AI Skills Library | 話しかけるだけでAIが専門家になる指示ファイル集",
  description: "日本のビジネスに最適化されたAIスキルのライブラリ。ChatGPT・Claude・Gemini・Copilot対応。スキルを設定するだけで、AIが文脈を読み取り、必要な専門知識を自動で起動。すべて無料。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-NNSQPRK9" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} font-[family-name:var(--font-noto-sans-jp)] antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
