import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    console.log("[Stripe Checkout] Starting checkout process");

    // Get session to check if user is logged in
    const session = await auth();
    console.log("[Stripe Checkout] Session user:", session?.user?.id);

    const body = await request.json();
    const { items, customerName, customerEmail, customerPhone } = body;

    console.log("[Stripe Checkout] Items:", JSON.stringify(items, null, 2));
    console.log("[Stripe Checkout] Customer:", { customerName, customerEmail, customerPhone });

    if (!items || items.length === 0) {
      console.error("[Stripe Checkout] No items in cart");
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    // Validate customer information
    if (!customerEmail || !customerName || !customerPhone) {
      console.error("[Stripe Checkout] Missing customer information");
      return NextResponse.json(
        { error: "Customer information is required" },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    console.log("[Stripe Checkout] Line items:", JSON.stringify(lineItems, null, 2));

    // Calculate total
    const total = items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );

    console.log("[Stripe Checkout] Total:", total);

    // Check Stripe key
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("[Stripe Checkout] STRIPE_SECRET_KEY not set");
      return NextResponse.json(
        { error: "Stripe configuration error" },
        { status: 500 }
      );
    }

    // Create Stripe Checkout Session
    console.log("[Stripe Checkout] Creating Stripe session...");
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerEmail,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/checkout/cancel`,
      metadata: {
        total: total.toString(),
        customerName,
        customerPhone,
      },
    });

    console.log("[Stripe Checkout] Stripe session created:", stripeSession.id);
    console.log("[Stripe Checkout] Session URL:", stripeSession.url);

    // Create order in database
    console.log("[Stripe Checkout] Creating order in database...");
    try {
      const orderData: any = {
        stripeSessionId: stripeSession.id,
        email: customerEmail,
        name: customerName,
        phone: customerPhone,
        total,
        status: "PENDING",
        items: {
          create: items.map((item: any) => ({
            quantity: item.quantity,
            price: item.price,
            productName: item.name,
            // Don't set productId - we'll use productName instead
          })),
        },
      };

      // Link order to user if logged in
      if (session?.user?.id) {
        orderData.userId = session.user.id;
        console.log("[Stripe Checkout] Linking order to user:", session.user.id);
      }

      const order = await db.order.create({
        data: orderData,
      });
      console.log("[Stripe Checkout] Order created:", order.id);
    } catch (dbError: any) {
      console.error("[Stripe Checkout] Database error (non-critical):", dbError.message);
      console.error("[Stripe Checkout] Full error:", dbError);
      // Continue even if DB fails - Stripe session is created
    }

    const response = {
      sessionId: stripeSession.id,
      url: stripeSession.url
    };

    console.log("[Stripe Checkout] Sending response:", JSON.stringify(response, null, 2));

    return NextResponse.json(response);
  } catch (error: any) {
    console.error("[Stripe Checkout] Error:", error);
    console.error("[Stripe Checkout] Error stack:", error.stack);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
