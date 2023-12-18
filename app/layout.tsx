import type { Metadata } from 'next';

import { inter, dmSerifDisplay } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Explore Weather',
  description:
    "Explore Weather is a compact Next.js website leveraging OpenWeatherMap's API to deliver real-time weather data based on user-input cities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
