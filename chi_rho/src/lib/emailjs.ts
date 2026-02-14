// ─────────────────────────────────────────────────────────────────────────────
// EmailJS — server-side REST API helper
//
// EmailJS is normally a browser SDK, but it exposes a REST endpoint at
// https://api.emailjs.com/api/v1.0/email/send that works from Node/Edge.
//
// Required env vars:
//   EMAILJS_SERVICE_ID   — from EmailJS dashboard → Email Services
//   EMAILJS_TEMPLATE_ID  — from EmailJS dashboard → Email Templates
//   EMAILJS_PUBLIC_KEY   — from EmailJS dashboard → Account → API Keys (Public Key)
//   EMAILJS_PRIVATE_KEY  — from EmailJS dashboard → Account → API Keys (Private Key)
// ─────────────────────────────────────────────────────────────────────────────

const EMAILJS_API = 'https://api.emailjs.com/api/v1.0/email/send';

// Tier → friendly label map for email subject/body
const TIER_LABELS: Record<string, { emoji: string; headline: string; billing: string }> = {
  'community-supporter': {
    emoji: '🙌',
    headline: 'You\'re a Chi-Rho Community Supporter!',
    billing: 'One-time contribution of $25',
  },
  'supporter-plus': {
    emoji: '💪',
    headline: 'You\'re a Chi-Rho Supporter Plus!',
    billing: 'One-time contribution of $50',
  },
  'founding-annual': {
    emoji: '🏆',
    headline: 'You\'re a Founding Annual Member!',
    billing: '$300/year — locked for life',
  },
  'founding-monthly': {
    emoji: '⚡',
    headline: 'You\'re a Founding Monthly Member!',
    billing: '$35/month — locked for your first year',
  },
  'founding-coaching': {
    emoji: '🎯',
    headline: 'You\'re a Founding Coaching Client!',
    billing: '$197/month — coaching + gym credit when we open',
  },
};

export interface SendConfirmationEmailOptions {
  toEmail: string;
  tierId: string;
  tierName: string;
  amountCents: number;
}

export async function sendGymConfirmationEmail({
  toEmail,
  tierId,
  tierName,
  amountCents,
}: SendConfirmationEmailOptions): Promise<void> {
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    console.warn('EmailJS env vars not set — skipping confirmation email');
    return;
  }

  const tier = TIER_LABELS[tierId] ?? {
    emoji: '✅',
    headline: `You\'re a ${tierName}!`,
    billing: `$${(amountCents / 100).toFixed(2)} paid`,
  };

  // These variables map to {{variable_name}} placeholders in your EmailJS template
  const templateParams = {
    to_email: toEmail,
    subject: `Chi-Rho Barbell Club — You're In! ${tier.emoji}`,
    headline: tier.headline,
    tier_name: tierName,
    billing_info: tier.billing,
    amount_paid: `$${(amountCents / 100).toFixed(2)}`,
    reply_to: 'chirhostrength@gmail.com',
  };

  const res = await fetch(EMAILJS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: templateParams,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`EmailJS error ${res.status}: ${text}`);
  }
}