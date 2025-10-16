"use client";

import { motion } from "framer-motion";
import { PackagesSection } from "@/components/home/packages-section";

export default function AngebotePage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Unsere Angebote
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie unsere professionellen Web-Entwicklungspakete für Ihr Unternehmen
          </p>
        </motion.div>

        <PackagesSection />
      </div>
    </main>
  );
}
