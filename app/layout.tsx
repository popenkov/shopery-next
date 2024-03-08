import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './styles/globals.scss';
import { ReactNode } from 'react';

const poppins = Poppins({ weight: ['600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
