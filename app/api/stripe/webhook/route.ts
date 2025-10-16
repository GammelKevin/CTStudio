import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  console.log("[Stripe Webhook] Received webhook request");

  if (!signature) {
    console.error("[Stripe Webhook] No signature provided");
    return NextResponse.json(
      { error: "No signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("[Stripe Webhook] STRIPE_WEBHOOK_SECRET not configured");
      return NextResponse.json(
        { error: "Webhook secret not configured" },
        { status: 500 }
      );
    }

    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (error: any) {
    console.error("[Stripe Webhook] Signature verification failed:", error.message);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  console.log("[Stripe Webhook] Event type:", event.type);

  try {
    // Handle the event
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("[Stripe Webhook] Checkout session completed:", session.id);

        // Find order by stripeSessionId
        const order = await db.order.findUnique({
          where: { stripeSessionId: session.id },
        });

        if (!order) {
          console.error("[Stripe Webhook] Order not found for session:", session.id);
          return NextResponse.json(
            { error: "Order not found" },
            { status: 404 }
          );
        }

        // Update order status to PAID
        await db.order.update({
          where: { stripeSessionId: session.id },
          data: {
            status: "PAID",
          },
        });

        console.log("[Stripe Webhook] Order updated to PAID:", order.id);
        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("[Stripe Webhook] Checkout session expired:", session.id);

        // Update order status to CANCELLED
        try {
          await db.order.update({
            where: { stripeSessionId: session.id },
            data: {
              status: "CANCELLED",
            },
          });
          console.log("[Stripe Webhook] Order marked as CANCELLED");
        } catch (error) {
          console.error("[Stripe Webhook] Failed to update order:", error);
        }

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("[Stripe Webhook] Payment succeeded:", paymentIntent.id);
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("[Stripe Webhook] Payment failed:", paymentIntent.id);
        break;
      }

      default:
        console.log("[Stripe Webhook] Unhandled event type:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("[Stripe Webhook] Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
