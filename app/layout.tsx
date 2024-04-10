import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/app/styles/globals.scss';
import { ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

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
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
