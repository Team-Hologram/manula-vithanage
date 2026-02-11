import Link from 'next/link';

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="py-6 px-6 md:px-10">
                <Link
                    href="/"
                    className="font-display text-lg tracking-wide text-luxury-graphite"
                >
                    Manula <span className="font-semibold">Vithanage</span>
                </Link>
            </header>
            <main className="flex-1 max-w-3xl mx-auto w-full px-6 md:px-10 py-12">
                {children}
            </main>
            <footer className="py-6 px-6 md:px-10 text-center">
                <p className="text-xs text-luxury-graphite/40">
                    &copy; {new Date().getFullYear()} Manula Vithanage. All rights
                    reserved.
                </p>
            </footer>
        </div>
    );
}
