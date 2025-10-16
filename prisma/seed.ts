import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Create products
  const products = [
    {
      name: "Starter Website",
      slug: "starter-website",
      description: "Perfekt für kleine Unternehmen und Startups",
      price: 1499,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      features: [
        "5 Seiten Website",
        "Responsive Design",
        "Kontaktformular",
        "SSL Zertifikat",
        "DSGVO-konform",
        "3 Monate Support",
      ],
      popular: false,
    },
    {
      name: "Business Package",
      slug: "business-package",
      description: "Für wachsende Unternehmen",
      price: 2999,
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800",
      features: [
        "10 Seiten Website",
        "Premium Design",
        "Blog-System",
        "Newsletter Integration",
        "CMS",
        "Social Media Integration",
        "6 Monate Support",
        "SEO Optimierung",
      ],
      popular: true,
    },
    {
      name: "E-Commerce Pro",
      slug: "ecommerce-pro",
      description: "Vollständige E-Commerce Lösung",
      price: 4999,
      imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      features: [
        "Online-Shop",
        "Stripe Payment Integration",
        "Admin Dashboard",
        "Produktverwaltung",
        "Kundenverwaltung",
        "API Integration",
        "12 Monate Support",
        "Premium SEO",
        "Live Chat",
      ],
      popular: false,
    },
  ];

  console.log("📦 Creating products...");
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
    console.log(`  ✓ Created product: ${product.name}`);
  }

  // Create admin user
  console.log("👤 Creating admin user...");
  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || "admin123",
    12
  );

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@ctstudio.com" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || "admin@ctstudio.com",
      name: "CT Studio Admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
  console.log(`  ✓ Created admin user:`);
  console.log(`     Email: admin@ctstudio.com`);
  console.log(`     Password: admin123`);

  console.log("✅ Seed completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
