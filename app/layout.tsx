import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import '@/app/styles/globals.scss';
import { StoreProvider } from '@/app/providers';
import { CartAside } from '@/widgets/CartAside';
import SmoothScroll from '@/shared/ui/SmoothScroll/SmoothScroll';
import { ProductPreviewModal } from '@/widgets/ProductPreviewModal/ui/ProductPreviewModal';

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
          <SmoothScroll speed={0.08}>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
          <CartAside />
          <ProductPreviewModal />
        </StoreProvider>
      </body>
    </html>
  );
}
