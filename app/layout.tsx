import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { StoreProvider } from '@/app/providers';
import '@/app/styles/globals.scss';
import SmoothScroll from '@/shared/ui/SmoothScroll/SmoothScroll';
import { CartAside } from '@/widgets/CartAside';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { ProductPreviewModal } from '@/widgets/ProductPreviewModal/ui/ProductPreviewModal';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

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

  // // Providing all messages to the client
  // // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
    //  lang={locale}
    >
      <body className={poppins.className}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <SmoothScroll speed={0.08}>
              <Header />
              {children}
              <Footer />
            </SmoothScroll>
            <CartAside />
            <ProductPreviewModal />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
