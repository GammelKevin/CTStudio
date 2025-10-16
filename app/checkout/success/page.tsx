"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/cart";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [isLoading, setIsLoading] = useState(true);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (sessionId) {
      // Clear the cart after successful payment
      clearCart();
      setIsLoading(false);
    } else {
      // No session ID, redirect to home
      router.push("/");
    }
  }, [sessionId, clearCart, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-neon-purple" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-2 border-green-500/50">
            <CardContent className="p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
              </motion.div>

              <h1 className="text-4xl font-bold mb-4">Zahlung erfolgreich!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Vielen Dank für Ihre Bestellung. Wir haben Ihre Zahlung erhalten
                und werden uns in Kürze bei Ihnen melden.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-2">
                  Bestell-ID
                </p>
                <p className="font-mono text-sm">{sessionId}</p>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details zu
                Ihrer Bestellung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => router.push("/")}
                  size="lg"
                  className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                >
                  Zur Startseite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => router.push("/services")}
                  size="lg"
                  variant="outline"
                >
                  Weitere Angebote
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
