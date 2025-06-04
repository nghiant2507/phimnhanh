import './globals.css';

import { Inter } from 'next/font/google';

import { LayoutComponent, ThemeProvider } from '~/components';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden w-screen`}
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
