import { cn } from '@/lib/utils';

interface TagProps {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

export default function Tag({ children, active, onClick }: TagProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                'text-xs tracking-widest uppercase font-sans px-4 py-2 border transition-all duration-300',
                active
                    ? 'bg-luxury-black text-luxury-ivory border-luxury-black'
                    : 'border-luxury-black/20 text-luxury-black/60 hover:border-luxury-black/40 hover:text-luxury-black'
            )}
        >
            {children}
        </button>
    );
}
