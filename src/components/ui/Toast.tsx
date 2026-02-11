'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
    message: string;
    visible: boolean;
    onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] bg-luxury-graphite border border-luxury-pearl/10 px-6 py-3 text-sm text-luxury-ivory shadow-xl"
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Hook for easy toast usage
export function useToast() {
    const [toast, setToast] = useState({ visible: false, message: '' });

    const showToast = (message: string) => setToast({ visible: true, message });
    const hideToast = () => setToast({ visible: false, message: '' });

    return { toast, showToast, hideToast };
}
