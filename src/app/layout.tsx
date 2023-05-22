import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Green WA Messenger',
  description: 'Green WA messenger by Vadim Belousov',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
