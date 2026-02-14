// ─────────────────────────────────────────────────────────────────────────────
// Discord — Incoming Webhook helper
//
// No bot needed. Just create a webhook URL in Discord:
//   Server Settings → Integrations → Webhooks → New Webhook
//   Copy URL → paste as DISCORD_GYM_WEBHOOK_URL in .env.local
//
// Required env var:
//   DISCORD_GYM_WEBHOOK_URL  — the full webhook URL from Discord
// ─────────────────────────────────────────────────────────────────────────────

// Tier colours (Discord embed sidebar colours in decimal)
const TIER_COLORS: Record<string, number> = {
  'community-supporter': 0xf59e0b,  // amber
  'supporter-plus':      0xf59e0b,
  'founding-annual':     0xfbbf24,  // yellow-400
  'founding-monthly':    0xfbbf24,
  'founding-coaching':   0x10b981,  // emerald — highest tier
};

const TIER_EMOJI: Record<string, string> = {
  'community-supporter': '🙌',
  'supporter-plus':      '💪',
  'founding-annual':     '🏆',
  'founding-monthly':    '⚡',
  'founding-coaching':   '🎯',
};

export interface DiscordNewMemberOptions {
  tierId: string;
  tierName: string;
  amountCents: number;
  isRecurring: boolean;
  totalBackers: number;
  totalRaisedCents: number;
}

export async function notifyDiscordNewMember({
  tierId,
  tierName,
  amountCents,
  isRecurring,
  totalBackers,
  totalRaisedCents,
}: DiscordNewMemberOptions): Promise<void> {
  const webhookUrl = process.env.DISCORD_GYM_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn('DISCORD_GYM_WEBHOOK_URL not set — skipping Discord notification');
    return;
  }

  const emoji = TIER_EMOJI[tierId] ?? '✅';
  const color = TIER_COLORS[tierId] ?? 0xf59e0b;
  const amountDollars = (amountCents / 100).toFixed(2);
  const totalRaisedDollars = (totalRaisedCents / 100).toFixed(0);
  const percentFunded = ((totalRaisedCents / 100 / 65000) * 100).toFixed(1);
  const billingType = isRecurring ? '/month' : ' one-time';

  const payload = {
    username: 'Chi-Rho Barbell Club',
    avatar_url: 'https://chi-rho-power-and-strength.vercel.app/chi-rho-logo.png', // update to your actual logo URL
    embeds: [
      {
        title: `${emoji} New Founding Member — ${tierName}`,
        color,
        fields: [
          {
            name: '💰 Amount',
            value: `$${amountDollars}${billingType}`,
            inline: true,
          },
          {
            name: '👥 Total Backers',
            value: `${totalBackers}`,
            inline: true,
          },
          {
            name: '📈 Campaign Progress',
            value: `$${Number(totalRaisedDollars).toLocaleString()} / $65,000 (${percentFunded}%)`,
            inline: false,
          },
        ],
        footer: {
          text: 'Chi-Rho Barbell Club — Toledo\'s First Dedicated Barbell Gym',
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Discord webhook error ${res.status}: ${text}`);
  }
}

export async function notifyDiscordCancellation(
  tierId: string,
  tierName: string
): Promise<void> {
  const webhookUrl = process.env.DISCORD_GYM_WEBHOOK_URL;
  if (!webhookUrl) return;

  const payload = {
    username: 'Chi-Rho Barbell Club',
    embeds: [
      {
        title: `❌ Membership Cancelled — ${tierName}`,
        color: 0x6b7280, // gray
        description: `A ${tierName} subscription has been cancelled.`,
        timestamp: new Date().toISOString(),
      },
    ],
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}