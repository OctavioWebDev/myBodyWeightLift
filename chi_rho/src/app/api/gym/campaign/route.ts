import { NextResponse } from 'next/server';
import { getCampaignTotals } from '@/lib/supabase';

const CAMPAIGN_GOAL_CENTS = 6_500_000; // $65,000

export const revalidate = 60; // cache for 60 seconds

export async function GET() {
  try {
    const totals = await getCampaignTotals();

    return NextResponse.json({
      totalRaisedCents: totals.total_raised_cents,
      totalRaisedDollars: totals.total_raised_cents / 100,
      totalBackers: totals.total_backers,
      goalDollars: CAMPAIGN_GOAL_CENTS / 100,
      percentFunded: Math.min(
        Math.round((totals.total_raised_cents / CAMPAIGN_GOAL_CENTS) * 1000) / 10,
        100
      ),
      lastUpdatedAt: totals.last_updated_at,
    });
  } catch (err) {
    console.error('Failed to fetch campaign totals:', err);
    // Return zeros rather than a 500 so the page still renders
    return NextResponse.json(
      {
        totalRaisedCents: 0,
        totalRaisedDollars: 0,
        totalBackers: 0,
        goalDollars: 65000,
        percentFunded: 0,
        lastUpdatedAt: null,
      },
      { status: 200 }
    );
  }
}