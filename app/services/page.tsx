import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Angebote - CT Studio",
  description: "Entdecken Sie unsere Website-Pakete für jedes Budget und jeden Bedarf.",
};

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
      "SSL Zertifikat",
      "Cookie Banner (DSGVO)",
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
      "Google Analytics",
      "Mehrsprachigkeit (2 Sprachen)",
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
      "API Integration",
      "Live Chat Support",
      "Automatische Backups",
    ],
    popular: false,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Unsere{" "}
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Angebote
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Wählen Sie das perfekte Paket für Ihr Projekt. Alle Pakete beinhalten
            professionelles Design, moderne Technologie und verlässlichen Support.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {packages.map((pkg, index) => (
            <ProductCard key={pkg.id} product={pkg} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-muted/50 rounded-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4">Individuelle Anforderungen?</h2>
            <p className="text-muted-foreground mb-6">
              Keines unserer Pakete passt perfekt zu Ihren Anforderungen? Kein Problem!
              Wir erstellen Ihnen gerne ein individuelles Angebot, das genau auf Ihre
              Bedürfnisse zugeschnitten ist.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-neon-purple to-neon-blue text-white h-10 px-4 py-2"
            >
              Individuelles Angebot anfragen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
