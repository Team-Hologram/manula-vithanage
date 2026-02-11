'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import MagneticButton from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
    fullName: z.string().min(2, 'Please enter your name'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().optional(),
    serviceType: z.string().min(1, 'Please select a service'),
    eventDate: z.string().optional(),
    location: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().min(10, 'Please tell us about your project'),
    honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
    'Wedding Photography',
    'Cinematic Videography',
    'Editorial & Fashion',
    'Commercial & Brand',
    'Portrait Sessions',
    'Other',
];

const inputClasses =
    'w-full bg-transparent border-b border-luxury-sand/60 py-3 text-sm text-luxury-graphite-deep placeholder:text-luxury-graphite-light/40 focus:border-luxury-champagne focus:outline-none transition-colors duration-300 font-sans';

const selectClasses =
    'w-full bg-transparent border-b border-luxury-sand/60 py-3 text-sm text-luxury-graphite-deep focus:border-luxury-champagne focus:outline-none transition-colors duration-300 font-sans appearance-none';

export default function ContactContent() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            serviceType: '',
            eventDate: '',
            location: '',
            budget: '',
            message: '',
            honeypot: '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const json = await res.json();
                setError(json.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <PageTransition>
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
                <Container>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                        Contact
                    </p>
                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-4">
                        Let&apos;s Create Together
                    </h1>
                    <p className="text-sm text-luxury-graphite-light max-w-lg leading-relaxed">
                        Every great image begins with a conversation. Fill out the form
                        below and I&apos;ll be in touch within 24 hours.
                    </p>
                </Container>
            </div>

            <Section className="!pt-0">
                <Container>
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-xl mx-auto text-center py-20"
                            >
                                <div className="w-16 h-16 border border-luxury-champagne/40 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="text-luxury-champagne"
                                    >
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <h2 className="font-display text-subhead text-luxury-graphite-deep mb-4">
                                    Message Sent
                                </h2>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed mb-8">
                                    Thank you for reaching out. I&apos;ll review your inquiry and
                                    respond within 24 hours.
                                </p>
                                <MagneticButton href="/" variant="outline">
                                    Return Home
                                </MagneticButton>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20"
                            >
                                {/* Form */}
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="lg:col-span-2 space-y-8"
                                >
                                    {/* Honeypot */}
                                    <input
                                        {...register('honeypot')}
                                        className="hidden"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                        <div>
                                            <input
                                                {...register('fullName')}
                                                placeholder="Full Name *"
                                                className={inputClasses}
                                            />
                                            {errors.fullName && (
                                                <p className="text-xs text-red-400 mt-1.5">
                                                    {errors.fullName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                placeholder="Email Address *"
                                                className={inputClasses}
                                            />
                                            {errors.email && (
                                                <p className="text-xs text-red-400 mt-1.5">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register('phone')}
                                                type="tel"
                                                placeholder="Phone Number"
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div className="relative">
                                            <select
                                                {...register('serviceType')}
                                                className={cn(selectClasses, !errors.serviceType || 'border-red-400')}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    Service Type *
                                                </option>
                                                {serviceOptions.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.serviceType && (
                                                <p className="text-xs text-red-400 mt-1.5">
                                                    {errors.serviceType.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register('eventDate')}
                                                type="date"
                                                placeholder="Event Date"
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                {...register('location')}
                                                placeholder="Event Location"
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <select
                                                {...register('budget')}
                                                className={selectClasses}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    Budget Range (optional)
                                                </option>
                                                <option value="under-1000">Under $1,000</option>
                                                <option value="1000-2500">$1,000 – $2,500</option>
                                                <option value="2500-5000">$2,500 – $5,000</option>
                                                <option value="5000-10000">$5,000 – $10,000</option>
                                                <option value="10000+">$10,000+</option>
                                            </select>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <textarea
                                                {...register('message')}
                                                rows={5}
                                                placeholder="Tell me about your project *"
                                                className={cn(inputClasses, 'resize-none')}
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-red-400 mt-1.5">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {error && (
                                        <p className="text-sm text-red-400">{error}</p>
                                    )}

                                    <MagneticButton
                                        type="submit"
                                        variant="primary"
                                        disabled={submitting}
                                    >
                                        {submitting ? 'Sending...' : 'Send Message'}
                                    </MagneticButton>
                                </form>

                                {/* Sidebar Info */}
                                <SmoothSection delay={0.15}>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-3 font-sans">
                                                Email
                                            </h3>
                                            <a
                                                href="mailto:hello@manulavithanage.com"
                                                className="text-sm text-luxury-graphite-deep hover:text-luxury-champagne transition-colors"
                                            >
                                                hello@manulavithanage.com
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-3 font-sans">
                                                Phone
                                            </h3>
                                            <a
                                                href="tel:+94771234567"
                                                className="text-sm text-luxury-graphite-deep hover:text-luxury-champagne transition-colors"
                                            >
                                                +94 77 123 4567
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-3 font-sans">
                                                Based In
                                            </h3>
                                            <p className="text-sm text-luxury-graphite-deep">
                                                Colombo, Sri Lanka
                                            </p>
                                            <p className="text-xs text-luxury-graphite-light mt-1">
                                                Available worldwide
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-[11px] tracking-[0.2em] uppercase text-luxury-graphite-light/60 mb-3 font-sans">
                                                Follow
                                            </h3>
                                            <div className="flex flex-col gap-2">
                                                <a
                                                    href="https://instagram.com/manulavithanage"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors"
                                                >
                                                    Instagram
                                                </a>
                                                <a
                                                    href="https://youtube.com/@manulavithanage"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors"
                                                >
                                                    YouTube
                                                </a>
                                                <a
                                                    href="https://vimeo.com/manulavithanage"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-luxury-graphite-light hover:text-luxury-graphite-deep transition-colors"
                                                >
                                                    Vimeo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SmoothSection>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </Section>
        </PageTransition>
    );
}
