"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cart";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${product.popular ? "border-neon-purple border-2 shadow-lg shadow-neon-purple/20" : ""}`}>
        <CardHeader>
          {product.popular && (
            <Badge className="w-fit mb-2 bg-gradient-to-r from-neon-purple to-neon-blue">
              Beliebt
            </Badge>
          )}
          <CardTitle className="text-2xl">{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="mb-6">
            <span className="text-4xl font-bold">€{product.price}</span>
            <span className="text-muted-foreground">/Projekt</span>
          </div>
          <ul className="space-y-3">
            {product.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-neon-purple mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full ${
              product.popular
                ? "bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                : ""
            }`}
            onClick={handleAddToCart}
          >
            In den Warenkorb
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
