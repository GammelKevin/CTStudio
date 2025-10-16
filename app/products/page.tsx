"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Sparkles, Loader2 } from "lucide-react";
import { useCartStore } from "@/store/cart";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  features: string[];
  popular: boolean;
  imageUrl: string | null;
  createdAt: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addItem, items } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  const isInCart = (productId: string) => {
    return items.some((item) => item.id === productId);
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-purple-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Unsere Produkte
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Entdecken Sie unsere professionellen Lösungen für Ihr Business
          </p>
        </motion.div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Keine Produkte verfügbar
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group relative overflow-hidden border-border/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                  {product.popular && (
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Beliebt
                      </div>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-6xl font-bold text-purple-500/20">
                          {product.name.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-4 sm:p-6">
                    {/* Product Name */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-purple-500 transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                        {product.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Price & Add to Cart */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-3 sm:pt-4 border-t">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          €{product.price.toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          einmalig
                        </div>
                      </div>

                      {isInCart(product.id) ? (
                        <Button
                          disabled
                          className="bg-green-500 hover:bg-green-600 w-full sm:w-auto text-sm sm:text-base"
                        >
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          Im Warenkorb
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleAddToCart(product)}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 w-full sm:w-auto text-sm sm:text-base"
                        >
                          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          In den Warenkorb
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
