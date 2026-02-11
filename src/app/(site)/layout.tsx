import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor'), {
    ssr: false,
});

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
