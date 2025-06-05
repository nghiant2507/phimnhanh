import './globals.css';

import { Inter, Montserrat } from 'next/font/google';

import { LayoutComponent, ThemeProvider } from '~/components';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${montserrat.variable} overflow-x-hidden w-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutComponent>{children}</LayoutComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}
