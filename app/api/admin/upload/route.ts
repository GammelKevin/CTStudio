import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

export async function POST(request: NextRequest) {
  try {
    console.log("[Upload API] Starting upload...");

    const session = await auth();
    console.log("[Upload API] Session:", session?.user?.email, session?.user?.role);

    if (!session || session.user?.role !== "ADMIN") {
      console.error("[Upload API] Unauthorized access attempt");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      console.error("[Upload API] No file provided");
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    console.log("[Upload API] File received:", file.name, file.size, "bytes");

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    console.log("[Upload API] Uploads directory:", uploadsDir);

    if (!existsSync(uploadsDir)) {
      console.log("[Upload API] Creating uploads directory...");
      await mkdir(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${timestamp}-${originalName}`;
    const filepath = path.join(uploadsDir, filename);

    console.log("[Upload API] Saving to:", filepath);

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Return public URL
    const url = `/uploads/${filename}`;
    console.log("[Upload API] File uploaded successfully:", url);

    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    console.error("[Upload API] Upload failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
