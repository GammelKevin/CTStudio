"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ShoppingBag, User, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CheckoutPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  // Customer information
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const totalPrice = mounted ? getTotalPrice() : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Pre-fill with session data if available
    if (session?.user) {
      if (session.user.name) setCustomerName(session.user.name);
      if (session.user.email) setCustomerEmail(session.user.email);
    }
  }, [session]);

  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push("/");
    }
  }, [mounted, items, router]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!customerName.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    if (!customerEmail.trim()) {
      newErrors.email = "E-Mail ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      newErrors.email = "Ungültige E-Mail-Adresse";
    }

    if (!customerPhone.trim()) {
      newErrors.phone = "Telefonnummer ist erforderlich";
    } else if (!/^[0-9+\-\s()]+$/.test(customerPhone)) {
      newErrors.phone = "Ungültige Telefonnummer";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      console.log("[Checkout] Sending request with items:", items);
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          customerName,
          customerEmail,
          customerPhone,
        }),
      });

      console.log("[Checkout] Response status:", response.status);
      const data = await response.json();
      console.log("[Checkout] Response data:", data);

      if (!response.ok) {
        console.error("[Checkout] Server error:", data.error);
        alert(`Checkout-Fehler: ${data.error || "Ein Fehler ist aufgetreten"}`);
        setIsLoading(false);
        return;
      }

      if (data.url) {
        console.log("[Checkout] Redirecting to:", data.url);
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error("[Checkout] No checkout URL received, full response:", data);
        alert("Checkout-Fehler: Keine URL erhalten. Bitte versuche es erneut.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("[Checkout] Checkout error:", error);
      alert("Ein Fehler ist aufgetreten. Bitte versuche es erneut.");
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Ihre Kontaktdaten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">
                    <User className="inline w-4 h-4 mr-2" />
                    Vollständiger Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Max Mustermann"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">
                    <Mail className="inline w-4 h-4 mr-2" />
                    E-Mail-Adresse *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="max@beispiel.de"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Telefonnummer *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+49 123 456789"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">
                  * Pflichtfelder - Wir benötigen diese Informationen für die Bestellbestätigung
                </p>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card>
              <CardHeader>
                <CardTitle>Ihre Bestellung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Menge: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        €{item.price.toFixed(2)} / Stück
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Zusammenfassung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Zwischensumme</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">MwSt. (19%)</span>
                    <span>€{(totalPrice * 0.19).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Gesamt</span>
                      <span>€{(totalPrice * 1.19).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Wird geladen...
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Zur Zahlung
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Sichere Zahlung mit Stripe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
