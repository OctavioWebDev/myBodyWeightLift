import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

// Create a Stripe instance with the latest API version
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

// Type for the template prices
export type TemplatePrices = {
  [key: string]: number;
};

// Template prices in cents (500 = $5.00)
export const templatePrices: TemplatePrices = {
  'beginner-strength': 500,
  'intermediate-hypertrophy': 500,
  'advanced-powerlifting': 500,
};

// Get price for a template
export const getTemplatePrice = (templateId: string): number => {
  const price = templatePrices[templateId];
  if (price === undefined) {
    throw new Error(`No price found for template: ${templateId}`);
  }
  return price;
};

// Format amount for display (cents to dollars)
export const formatAmountForDisplay = (amount: number): string => {
  return `$${(amount / 100).toFixed(2)}`;
};

// Format amount for Stripe (dollars to cents)
export const formatAmountForStripe = (amount: number, currency: string): number => {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  
  const parts = numberFormat.formatToParts(amount);
  const hasDecimal = parts.some(part => part.type === 'decimal');
  
  return hasDecimal ? Math.round(amount * 100) : amount;
};
