import type { Metadata } from 'next';
import DarkModeToggle from '@/components/DarkModeToggle';
import './globals.css';

export const metadata: Metadata = {
  title: 'Feeding Brennen',
  description: 'Track restaurants, visits, and spending.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold dark:text-white">
              Feeding Brennen
            </h1>

            <DarkModeToggle />
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
