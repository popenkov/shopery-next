import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { StoreProvider } from '@/app/providers';
import '@/app/styles/globals.scss';
import { StatusMessage } from '@/entities/StatusMessage';
import { SmoothScroll } from '@/shared/ui/SmoothScroll';
import { CartAside } from '@/widgets/CartAside';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { ProductPreviewModal } from '@/widgets/ProductPreviewModal';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const SCROLL_SPEED = 0.08;

export const metadata: Metadata = {
  title: 'Ecobazar',
  description: 'Ecobazar description',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <SmoothScroll speed={SCROLL_SPEED}>
              <Header />
              {children}
              <Footer />
            </SmoothScroll>
            <CartAside />
            <ProductPreviewModal />
            <StatusMessage />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
