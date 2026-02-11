import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
    try {
        // Rate limit by IP
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        const { success } = rateLimit(ip);

        if (!success) {
            return NextResponse.json(
                { error: 'Too many requests. Please wait a moment and try again.' },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { fullName, email, serviceType, message, honeypot } = body;

        // Honeypot spam detection
        if (honeypot) {
            return NextResponse.json({ success: true, message: 'Thank you.' });
        }

        // Basic validation
        if (!fullName || !email || !serviceType || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        // Log the submission (replace with actual email service in production)
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('📩 NEW CONTACT FORM SUBMISSION');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('Name:', fullName);
        console.log('Email:', email);
        console.log('Phone:', body.phone || 'N/A');
        console.log('Service:', serviceType);
        console.log('Event Date:', body.eventDate || 'N/A');
        console.log('Location:', body.location || 'N/A');
        console.log('Budget:', body.budget || 'N/A');
        console.log('Message:', message);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        return NextResponse.json({ success: true, message: 'Thank you for your inquiry. We will be in touch within 24-48 hours.' });
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
