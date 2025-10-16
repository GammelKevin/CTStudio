import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await auth();

    console.log("[Orders API] Session:", session ? "exists" : "null");
    console.log("[Orders API] User role:", session?.user?.role);

    if (!session) {
      console.log("[Orders API] No session found");
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (session.user?.role !== "ADMIN") {
      console.log("[Orders API] User is not admin");
      return NextResponse.json({ error: "Forbidden - Admin access required" }, { status: 403 });
    }

    const orders = await db.order.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        items: {
          select: {
            id: true,
            productName: true,
            quantity: true,
            price: true,
          },
        },
      },
    });

    console.log("[Orders API] Fetched orders:", orders.length);
    return NextResponse.json(orders);
  } catch (error) {
    console.error("[Orders API] Failed to fetch orders:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
