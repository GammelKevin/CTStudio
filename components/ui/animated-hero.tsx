"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Plasma = dynamic(() => import("@/components/ui/plasma"), { ssr: false });

export function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "die performen",
      "die konvertieren",
      "die beeindrucken",
      "die Kunden gewinnen",
      "die Erfolg bringen"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background -mt-20 pt-20">
      {/* Plasma Background */}
      <div className="absolute inset-0 top-0 z-0">
        <Plasma
          color="#a855f7"
          speed={0.8}
          direction="forward"
          scale={1.0}
          opacity={1.0}
          mouseInteractive={true}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 py-20 lg:py-32 items-center justify-center flex-col min-h-[calc(100vh-5rem)]">
            {/* Main Title */}
            <div className="flex gap-4 flex-col w-full max-w-5xl flex-1 justify-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-center font-medium"
              >
                <div className="text-white">
                  Wir bauen Websites,
                </div>
                <div className="relative h-auto w-full flex items-center justify-center overflow-visible min-h-[100px] py-4">
                  {titles.map((title, index) => (
                    <motion.div
                      key={index}
                      className="absolute flex items-center justify-center font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap px-4 leading-relaxed"
                      style={{ lineHeight: '1.4' }}
                      initial={{ opacity: 0, y: 50 }}
                      transition={{ type: "spring", stiffness: 60, damping: 25 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -50 : 50,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.div>
                  ))}
                </div>
              </motion.h1>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-16"
            >
              <Button
                size="lg"
                className="gap-2 text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                asChild
              >
                <Link href="/products">
                  <ShoppingCart className="w-5 h-5" />
                  Unsere Produkte
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8 py-6 border-purple-500/50 hover:bg-purple-500/10"
                asChild
              >
                <Link href="/contact">
                  <Phone className="w-5 h-5" />
                  Kontakt aufnehmen
                </Link>
              </Button>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl w-full"
            >
              {[
                { value: "5+", label: "Zufriedene Kunden" },
                { value: "5+", label: "Projekte" },
                { value: "24/7", label: "Support" },
                { value: "5★", label: "Bewertung" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
