"use client";

import { Metadata } from "next";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Users, Zap, Award, Rocket, Heart, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Zufriedene Kunden" },
  { value: "5+", label: "Projekte" },
  { value: "100%", label: "Leidenschaft" },
  { value: "24/7", label: "Support" },
];

const values = [
  {
    icon: Code2,
    title: "Modernste Technologien",
    description:
      "Wir setzen auf die neuesten und besten Web-Technologien, um schnelle, sichere und skalierbare Websites zu entwickeln.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Schnelle Umsetzung",
    description:
      "Mit effizienten Prozessen und modernen Tools liefern wir deine Website schnell und ohne Kompromisse bei der Qualität.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Mit Leidenschaft",
    description:
      "Jedes Projekt wird mit größter Sorgfalt und Liebe zum Detail umgesetzt. Deine Zufriedenheit ist unser Antrieb.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Target,
    title: "Zielorientiert",
    description:
      "Wir fokussieren uns auf deine Ziele und entwickeln Lösungen, die echte Ergebnisse liefern und dein Business voranbringen.",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const technologies = [
  { name: "Next.js", color: "from-gray-700 to-gray-900" },
  { name: "React", color: "from-blue-500 to-cyan-500" },
  { name: "TypeScript", color: "from-blue-600 to-blue-800" },
  { name: "Tailwind CSS", color: "from-teal-500 to-cyan-600" },
  { name: "Node.js", color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", color: "from-blue-700 to-indigo-900" },
  { name: "Stripe", color: "from-purple-600 to-indigo-700" },
  { name: "Framer Motion", color: "from-pink-500 to-purple-600" },
];

const timeline = [
  {
    year: "2025",
    title: "Die Gründung",
    description: "CT Studio wurde zusammen mit einem Freund mit der Vision gegründet, Unternehmen zu helfen, ihre digitale Präsenz zu maximieren.",
  },
  {
    year: "2025",
    title: "Erste Erfolge",
    description: "Restaurant Alas - unser erstes großes Projekt.",
  },
  {
    year: "2025",
    title: "Expansion",
    description: "Wir erweitern unser Portfolio und helfen noch mehr Kunden, online erfolgreich zu sein.",
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const ySpring = useSpring(y, springConfig);

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <motion.div
          style={{ y: ySpring, opacity, scale }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Über CT Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Wir erschaffen digitale Erlebnisse, die begeistern und Erfolg bringen
            </p>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-purple-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-purple-500/20">
                <Image
                  src="/static/team/founder.jpg"
                  alt="CT Studio Founder"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <p className="text-2xl font-bold text-white">Founder</p>
                <p className="text-purple-100">CT Studio</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Unsere Vision
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  CT Studio wurde mit einer klaren Mission gegründet: Unternehmen zu helfen,
                  ihre digitale Präsenz zu maximieren und online erfolgreich zu sein.
                </p>
                <p>
                  Mit modernsten Technologien und kreativem Design schaffen wir Websites,
                  die nicht nur gut aussehen, sondern auch echte Ergebnisse liefern.
                </p>
                <p>
                  Jedes Projekt ist für uns eine Chance, etwas Besonderes zu erschaffen
                  und unsere Kunden zu begeistern.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Unsere Geschichte
          </motion.h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                <div className="absolute left-8 md:left-auto md:right-[-1.5rem] md:top-6 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50" />

                <motion.div
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                  className="ml-16 md:ml-0 bg-black/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />
                  <div className="relative">
                    <div className="text-sm text-purple-400 font-bold mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Unsere Werte
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Unsere Technologien
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wir arbeiten mit den modernsten Web-Technologien, um zukunftssichere und performante Lösungen zu entwickeln
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              >
                <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} text-white font-semibold shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Bereit für dein Projekt?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Lass uns gemeinsam etwas Großartiges erschaffen. Kontaktiere uns und lass uns über deine Vision sprechen.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300"
          >
            Jetzt starten
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
