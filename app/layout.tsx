import type { Metadata } from 'next';
import './globals.css';
import './header.css';
import { Outfit, DM_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
// import { Logo } from '@/components/Logo';
import SmoothScroll from '@/components/SmoothScroll';
import { GoogleAnalytics } from '@next/third-parties/google';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://johnperezux.com'),
  title: 'Johnathan Perez',
  description: 'UX Designer crafting clean, user-centered web experiences.',
  icons: {
    icon: '/FavIcon.png',
  },
  keywords:
    'Freelancer, User Experience, User Interface, Web Design, App Design, Front-End Development, SEO, Email Campaigns, Digital Marketing, Designer, Developer',
  openGraph: {
    title: 'Johnathan Perez — UX Designer',
    description: 'UX Designer crafting clean, user-centered web experiences.',
    url: 'https://johnperezux.com/',
    siteName: 'Johnathan Perez',
    images: [
      {
        url: 'https://johnperezux.com/john_perez_open_graph.png',
        width: 1200,
        height: 630,
        alt: 'Johnathan Perez — UX Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johnathan Perez — UX Designer',
    description: 'UX Designer crafting clean, user-centered web experiences.',
    images: ['/john_perez_open_graph.png'],
  },
  alternates: {
    canonical: 'https://johnperezux.com',
  },
  robots: {
    index: true,
    follow: true,
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
        <GoogleAnalytics gaId="G-8GSSDVM1BG" />

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
