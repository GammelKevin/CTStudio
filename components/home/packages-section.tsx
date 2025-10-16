"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types";

const packages: Product[] = [
  {
    id: "starter",
    name: "Starter",
    slug: "starter",
    description: "Perfekt für kleine Unternehmen und Startups",
    price: 1499,
    features: [
      "5 Seiten Website",
      "Responsive Design",
      "Kontaktformular",
      "Google Maps Integration",
      "3 Monate Support",
      "Basic SEO Optimierung",
    ],
    popular: false,
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    description: "Für wachsende Unternehmen",
    price: 2999,
    features: [
      "10 Seiten Website",
      "Premium Design",
      "Blog-System",
      "Newsletter Integration",
      "6 Monate Support",
      "Advanced SEO",
      "Content Management System",
      "Social Media Integration",
    ],
    popular: true,
  },
  {
    id: "pro",
    name: "Pro",
    slug: "pro",
    description: "Vollständige E-Commerce Lösung",
    price: 4999,
    features: [
      "Unbegrenzte Seiten",
      "Custom Design",
      "E-Commerce Shop",
      "Payment Integration (Stripe)",
      "12 Monate Support",
      "Premium SEO",
      "Analytics & Tracking",
      "Multi-Language Support",
      "Admin Dashboard",
    ],
    popular: false,
  },
];

export function PackagesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Unsere Pakete
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Wählen Sie das perfekte Paket für Ihr Projekt
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <ProductCard key={pkg.id} product={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
