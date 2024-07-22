import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import '@/app/styles/globals.scss';
import { StoreProvider } from '@/app/providers';
import { CartAside } from '@/widgets/CartAside';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ecobazar',
  description: 'Ecobazar description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
          <CartAside />
        </StoreProvider>
      </body>
    </html>
  );
}
