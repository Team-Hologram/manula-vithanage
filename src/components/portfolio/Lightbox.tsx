'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface LightboxProps {
    images: string[];
    initialIndex?: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function Lightbox({
    images,
    initialIndex = 0,
    isOpen,
    onClose,
}: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        setIsMounted(true);
        return () => setIsMounted(false);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousBodyOverflow = document.body.style.overflow;
        const previousBodyOverflowX = document.body.style.overflowX;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const previousHtmlOverflowX = document.documentElement.style.overflowX;

        document.body.style.overflow = 'hidden';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
        document.documentElement.setAttribute('data-lightbox-open', 'true');
        window.dispatchEvent(
            new CustomEvent('app:scroll-lock', { detail: { lock: true } })
        );

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.body.style.overflowX = previousBodyOverflowX;
            document.documentElement.style.overflow = previousHtmlOverflow;
            document.documentElement.style.overflowX = previousHtmlOverflowX;
            document.documentElement.removeAttribute('data-lightbox-open');
            window.dispatchEvent(
                new CustomEvent('app:scroll-lock', { detail: { lock: false } })
            );
        };
    }, [isOpen]);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose, goNext, goPrev]);

    if (!isMounted) {
        return null;
    }

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[10010] w-screen h-screen overflow-hidden overscroll-none touch-pan-y bg-luxury-graphite-deep/95 backdrop-blur-xl flex items-center justify-center"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                    onPointerDown={(e) => {
                        if (e.target === e.currentTarget) {
                            onClose();
                        }
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        onPointerDown={(e) => e.stopPropagation()}
                        className="absolute top-4 left-4 md:top-6 md:left-auto md:right-6 text-white/60 hover:text-white transition-colors z-20"
                        aria-label="Close lightbox"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Counter */}
                    <div className="absolute top-5 right-4 md:top-6 md:left-6 md:right-auto text-xs tracking-widest text-white/40 font-sans z-20">
                        {currentIndex + 1} / {images.length}
                    </div>

                    {/* Image */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-[90vw] h-[80vh] max-w-[calc(100vw-2rem)] md:max-w-5xl"
                        onClick={(e) => e.stopPropagation()}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`Gallery image ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goPrev();
                                    }}
                                    onPointerDown={(e) => e.stopPropagation()}
                                    className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors z-20"
                                    aria-label="Previous image"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goNext();
                                    }}
                                    onPointerDown={(e) => e.stopPropagation()}
                                    className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/40 hover:text-white transition-colors z-20"
                                    aria-label="Next image"
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    >
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
