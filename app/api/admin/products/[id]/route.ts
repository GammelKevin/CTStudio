import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  slug: z.string().min(1, "Slug ist erforderlich"),
  description: z.string().min(1, "Beschreibung ist erforderlich"),
  price: z.number().positive("Preis muss positiv sein"),
  imageUrl: z.string().min(1, "Bild ist erforderlich"),
  features: z.array(z.string()).optional().default([]),
  popular: z.boolean().optional().default(false),
});

// PUT update product
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    console.log("[API UPDATE] Request body:", body);

    const validatedData = productSchema.parse(body);
    console.log("[API UPDATE] Validated data:", validatedData);

    const product = await db.product.update({
      where: { id },
      data: validatedData,
    });

    console.log("[API UPDATE] Product updated:", product);

    return NextResponse.json(product);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("[API UPDATE] Validation failed:", error.errors);
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    console.error("[API UPDATE] Failed to update product:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session || session.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    await db.product.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API DELETE] Failed to delete product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
