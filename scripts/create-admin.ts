import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    const email = "admin@ctstudio.com";
    const password = "admin123"; // CHANGE THIS IN PRODUCTION!

    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      console.log("❌ Admin user already exists!");
      console.log("Email:", email);
      console.log("Role:", existingAdmin.role);
      return;
    }

    // Create admin user
    const hashedPassword = await hash(password, 10);
    const adminUser = await prisma.user.create({
      data: {
        email,
        name: "CT Studio Admin",
        password: hashedPassword,
        role: "ADMIN",
      },
    });

    console.log("✅ Admin user created successfully!");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", adminUser.role);
    console.log("\n⚠️  IMPORTANT: Change the default password after first login!");
  } catch (error) {
    console.error("Failed to create admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdminUser();
