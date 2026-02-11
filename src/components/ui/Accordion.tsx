'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="divide-y divide-luxury-black/10">
            {items.map((item, i) => (
                <div key={i}>
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left group"
                        aria-expanded={openIndex === i}
                    >
                        <span className="font-display text-lg md:text-xl text-luxury-black group-hover:text-luxury-black/80 transition-colors pr-8">
                            {item.question}
                        </span>
                        <span
                            className={cn(
                                'text-luxury-black text-xl transition-transform duration-300',
                                openIndex === i && 'rotate-45'
                            )}
                        >
                            +
                        </span>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="pb-6 text-luxury-black/60 leading-relaxed max-w-2xl">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
