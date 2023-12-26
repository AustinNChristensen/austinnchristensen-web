import type { Metadata } from 'next';
import { Sansita } from 'next/font/google';
import './globals.css';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { switchThemeDuration } from '../constants';
import { ThemeProvider } from '@/components/ThemeProvider';

const sansita = Sansita({
    weight: '400',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Austin N Christensen',
    description: 'Personal Website for Austin Christensen',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`bg-white transition duration-500 dark:bg-gray-900 ${sansita.className} ${switchThemeDuration}`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <NavBar />
                    <main className="isolate mx-auto flex flex-col max-w-100 items-center justify-between p-6 lg:px-8">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
