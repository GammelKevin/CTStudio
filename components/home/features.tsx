"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Zap, Smartphone, Shield, Search, Palette } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Code,
    title: "Moderne Technologien",
    description: "Wir nutzen die neuesten Web-Technologien wie Next.js, React und TypeScript.",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    icon: Zap,
    title: "Blitzschnell",
    description: "Optimierte Performance für schnelle Ladezeiten und bessere User Experience.",
    color: "from-yellow-500 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfekte Darstellung auf allen Geräten - vom Smartphone bis zum Desktop.",
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.5)",
  },
  {
    icon: Shield,
    title: "Sicher & Zuverlässig",
    description: "Höchste Sicherheitsstandards und zuverlässige Hosting-Lösungen.",
    color: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.5)",
  },
  {
    icon: Search,
    title: "SEO-Optimiert",
    description: "Optimierung für Suchmaschinen, damit Ihre Website gefunden wird.",
    color: "from-red-500 to-pink-500",
    glowColor: "rgba(239, 68, 68, 0.5)",
  },
  {
    icon: Palette,
    title: "Individuelles Design",
    description: "Maßgeschneiderte Designs, die Ihre Marke perfekt repräsentieren.",
    color: "from-indigo-500 to-purple-500",
    glowColor: "rgba(99, 102, 241, 0.5)",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3, margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="flex items-center justify-center py-16 md:py-24"
    >
      <div className="relative w-full max-w-2xl mx-4">
        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
          style={{
            background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Card */}
        <motion.div
          className="relative p-12 rounded-3xl border border-white/20 overflow-hidden backdrop-blur-2xl"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
          }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, ${feature.glowColor}, transparent)`,
            }}
          />

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, ${feature.glowColor} 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
              animate={{
                backgroundPosition: ["0px 0px", "50px 50px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8 shadow-2xl`}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <feature.icon className="h-12 w-12 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-5xl font-bold mb-6 text-white">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </div>

          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "200% 200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function FloatingOrb({ delay, color, size, top, left }: { delay: number; color: string; size: number; top: string; left: string }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{
        width: size,
        height: size,
        background: color,
        opacity: 0.15,
        top,
        left,
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
        scale: [1, 1.3, 0.9, 1],
      }}
      transition={{
        duration: 25,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative bg-black">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb delay={0} color="rgba(168, 85, 247, 0.4)" size={500} top="10%" left="5%" />
        <FloatingOrb delay={3} color="rgba(59, 130, 246, 0.4)" size={400} top="40%" left="70%" />
        <FloatingOrb delay={6} color="rgba(236, 72, 153, 0.4)" size={450} top="70%" left="20%" />
        <FloatingOrb delay={9} color="rgba(251, 191, 36, 0.4)" size={350} top="30%" left="80%" />
      </div>

      {/* Header Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <motion.h2
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Warum CT Studio?
            </motion.h2>
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Wir kombinieren Kreativität mit technischer Exzellenz
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-16"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2 mx-auto">
                <motion.div
                  className="w-1 h-2 bg-purple-400 rounded-full"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </div>
              <p className="text-purple-400 text-sm mt-2">Scroll</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* End Spacer */}
      <div className="h-32" />
    </section>
  );
}
