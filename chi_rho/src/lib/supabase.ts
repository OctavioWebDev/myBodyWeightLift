import { createClient } from '@supabase/supabase-js';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface GymFoundingMember {
  id: string;
  created_at: string;
  stripe_session_id: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  email: string;
  tier_id: string;
  tier_name: string;
  amount_cents: number;
  is_recurring: boolean;
  status: 'active' | 'cancelled' | 'refunded';
  cancelled_at: string | null;
  last_renewed_at: string | null;
}

export interface GymCampaignTotals {
  id: number;
  total_raised_cents: number;
  total_backers: number;
  last_updated_at: string;
}

// ─── Client ───────────────────────────────────────────────────────────────────

let _client: ReturnType<typeof createClient> | null = null;

export function supabase() {
  if (_client) return _client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables');
  }

  _client = createClient(url, key, {
    auth: { persistSession: false },
  });

  return _client;
}

// ─── Campaign helpers ─────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db = () => supabase() as any;

export async function insertFoundingMember(
  member: Omit<GymFoundingMember, 'id' | 'created_at'>
) {
  const { error } = await db()
    .from('gym_founding_members')
    .insert(member);

  if (error) throw error;
}

export async function incrementCampaignTotals(amountCents: number) {
  const { error } = await db().rpc('increment_gym_campaign', {
    p_amount_cents: amountCents,
  });

  if (error) {
    // Fallback if RPC isn't available yet
    const { data: current } = await db()
      .from('gym_campaign_totals')
      .select('total_raised_cents, total_backers')
      .eq('id', 1)
      .single();

    await db()
      .from('gym_campaign_totals')
      .update({
        total_raised_cents: (current?.total_raised_cents ?? 0) + amountCents,
        total_backers: (current?.total_backers ?? 0) + 1,
        last_updated_at: new Date().toISOString(),
      })
      .eq('id', 1);
  }
}

export async function cancelMembership(stripeSubscriptionId: string) {
  const { error } = await db()
    .from('gym_founding_members')
    .update({
      status: 'cancelled',
      cancelled_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', stripeSubscriptionId);

  if (error) throw error;
}

export async function renewMembership(stripeSubscriptionId: string) {
  const { error } = await db()
    .from('gym_founding_members')
    .update({ last_renewed_at: new Date().toISOString() })
    .eq('stripe_subscription_id', stripeSubscriptionId);

  if (error) throw error;
}

export async function getCampaignTotals(): Promise<GymCampaignTotals> {
  const { data, error } = await db()
    .from('gym_campaign_totals')
    .select('*')
    .eq('id', 1)
    .single();

  if (error) throw error;
  return data as GymCampaignTotals;
}