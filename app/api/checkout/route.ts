import { NextResponse } from "next/server";

/** Phase 2 — Stripe Checkout session creation. */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Checkout is not configured yet. Stripe will be connected in the next phase.",
    },
    { status: 501 },
  );
}
