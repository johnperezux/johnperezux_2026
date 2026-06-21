import type { Metadata } from 'next';
import './globals.css';
import './header.css';
import { Outfit, DM_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import { Logo } from '@/components/Logo';
import SmoothScroll from '@/components/SmoothScroll';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'John Perez | Designer & Developer',
  description: 'UX Designer crafting clean, user-centered web experiences.',
  icons: {
    icon: '@/public/FavIcon.png',
  },
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
      <body className="relative" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange={false}
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
