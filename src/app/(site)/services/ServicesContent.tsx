'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import PageTransition from '@/components/ui/PageTransition';
import SmoothSection from '@/components/ui/SmoothSection';
import ServiceCard from '@/components/portfolio/ServiceCard';
import MagneticButton from '@/components/ui/MagneticButton';
import { services, processSteps, faqs } from '@/data/services';
import { staggerContainer, fadeInUp } from '@/lib/motion';

export default function ServicesContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <PageTransition>
            <div className="pt-32 pb-8 md:pt-40 md:pb-12">
                <Container>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                        Services
                    </p>
                    <h1 className="font-display text-headline text-luxury-graphite-deep mb-4">
                        Crafted for You
                    </h1>
                    <p className="text-sm text-luxury-graphite-light max-w-lg leading-relaxed">
                        Every project is bespoke. From intimate portraits to grand
                        cinematic productions, choose the service that matches your vision.
                    </p>
                </Container>
            </div>

            {/* Services Grid */}
            <Section className="!pt-0">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                        {services.map((s, i) => (
                            <ServiceCard
                                key={s.name}
                                name={s.name}
                                description={s.description}
                                startingPrice={s.startingPrice}
                                deliverables={s.deliverables}
                                index={i}
                            />
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Process Timeline */}
            <Section className="bg-luxury-ivory/50">
                <Container>
                    <SmoothSection className="text-center mb-12 md:mb-16">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            Process
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep">
                            How We Work Together
                        </h2>
                    </SmoothSection>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
                    >
                        {processSteps.map((step) => (
                            <motion.div key={step.step} variants={fadeInUp} className="text-center">
                                <span className="text-3xl md:text-4xl font-display text-luxury-champagne/40 block mb-3">
                                    {step.step}
                                </span>
                                <h3 className="font-display text-xl text-luxury-graphite-deep mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-luxury-graphite-light leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </Container>
            </Section>

            {/* FAQs */}
            <Section>
                <Container>
                    <SmoothSection className="text-center mb-12 md:mb-16">
                        <p className="text-[11px] tracking-[0.3em] uppercase text-luxury-champagne mb-3 font-sans">
                            FAQ
                        </p>
                        <h2 className="font-display text-headline text-luxury-graphite-deep">
                            Common Questions
                        </h2>
                    </SmoothSection>
                    <div className="max-w-2xl mx-auto divide-y divide-luxury-sand/40">
                        {faqs.map((faq, i) => (
                            <SmoothSection key={i} delay={i * 0.05}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full py-5 flex items-start justify-between text-left group"
                                >
                                    <span className="font-display text-lg text-luxury-graphite-deep pr-4 group-hover:text-luxury-graphite transition-colors">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`text-luxury-champagne transition-transform duration-300 mt-1.5 flex-shrink-0 ${openFaq === i ? 'rotate-45' : ''
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFaq === i ? 'auto' : 0,
                                        opacity: openFaq === i ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-5 text-sm text-luxury-graphite-light leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </SmoothSection>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="bg-luxury-ivory/50">
                <Container className="text-center">
                    <SmoothSection>
                        <p className="font-display text-subhead text-luxury-graphite-deep mb-6">
                            Ready to create something beautiful?
                        </p>
                        <MagneticButton href="/contact" variant="primary">
                            Start a Conversation
                        </MagneticButton>
                    </SmoothSection>
                </Container>
            </Section>
        </PageTransition>
    );
}
