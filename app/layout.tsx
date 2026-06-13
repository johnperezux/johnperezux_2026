import type { Metadata } from 'next';
import './globals.css';
import { Outfit, DM_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import { Logo } from '@/components/Logo';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
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
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <div className="h-[100vh] bg-[var(--accent)]">
          <h1>dd</h1>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
