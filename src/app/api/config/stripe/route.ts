import { NextResponse } from 'next/server';
import { getStripeConfig } from '@/lib/supabase/payment-settings';

export const dynamic = 'force-dynamic';

const FALLBACK_STRIPE_PUBLISHABLE_KEY = 'pk_test_51UHaDLRo2TKeAOq8qGAsGGvgoics9p36je20qoTk2Yj0SY7RAFitIGd6fDUcMfF8pIUCeVZcyj2fJnQznrJGSnO700uglueIkS';

export async function GET() {
    try {
        const config = await getStripeConfig();
        
        return NextResponse.json({
            publishableKey: config.publishableKey || FALLBACK_STRIPE_PUBLISHABLE_KEY,
        });
    } catch (error) {
        console.error('Error fetching public Stripe config:', error);
        return NextResponse.json(
            { error: 'Failed to fetch payment configuration' },
            { status: 500 }
        );
    }
}
