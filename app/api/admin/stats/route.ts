import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await auth();

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch statistics
    const [totalProducts, totalUsers, totalOrders, orders] = await Promise.all([
      db.product.count(),
      db.user.count(),
      db.order.count(),
      db.order.findMany({
        orderBy: { createdAt: "desc" },
        take: 5,
        select: {
          id: true,
          email: true,
          name: true,
          total: true,
          status: true,
          createdAt: true,
        },
      }),
    ]);

    // Calculate total revenue
    const totalRevenue = await db.order.aggregate({
      _sum: {
        total: true,
      },
    });

    return NextResponse.json({
      totalProducts,
      totalUsers,
      totalOrders,
      totalRevenue: totalRevenue._sum.total || 0,
      recentOrders: orders,
    });
  } catch (error) {
    console.error("Failed to fetch admin stats:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
