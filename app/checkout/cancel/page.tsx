"use client";

import { useRouter } from "next/navigation";
import { XCircle, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CancelPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-2 border-yellow-500/50">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto">
                  <XCircle className="h-12 w-12 text-yellow-500" />
                </div>
              </motion.div>

              <h1 className="text-4xl font-bold mb-4">Zahlung abgebrochen</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ihre Zahlung wurde abgebrochen. Keine Sorge, es wurden keine Kosten
                berechnet.
              </p>

              <p className="text-sm text-muted-foreground mb-6">
                Ihre Artikel befinden sich weiterhin in Ihrem Warenkorb. Sie können
                den Checkout jederzeit fortsetzen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push("/checkout")}
                  size="lg"
                  className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Zurück zum Checkout
                </Button>
                <Button
                  onClick={() => router.push("/")}
                  size="lg"
                  variant="outline"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Zur Startseite
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
