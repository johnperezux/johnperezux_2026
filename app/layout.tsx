import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Outfit, DM_Sans } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'John Perez — UX Designer',
  description: 'UX Designer crafting clean, user-centered web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
