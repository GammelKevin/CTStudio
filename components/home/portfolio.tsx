"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "Restaurant Alas",
    url: "https://restaurant-alas.de",
    description: "Modernes Restaurant-Website mit Online-Reservierung und dynamischer Speisekarte",
    category: "Restaurant & Gastronomie",
    color: "from-purple-500 to-pink-500",
  },
];

export function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent pb-2">
            Unsere erste Erfolgsgeschichte
          </h2>
        </motion.div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="max-w-7xl mx-auto"
        >
          <div className="relative">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white">
                    {projects[activeProject].name}
                  </h3>
                </div>
                <motion.a
                  href={projects[activeProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Live ansehen
                </motion.a>
              </div>
            </motion.div>

            {/* Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${projects[activeProject].color} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />

              {/* Browser Window */}
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Browser Header */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-900 px-4 py-1.5 rounded-lg text-sm text-gray-400">
                      {projects[activeProject].url}
                    </div>
                  </div>
                </div>

                {/* Website Preview */}
                <div className="relative bg-black" style={{ height: "70vh" }}>
                  <motion.iframe
                    src={projects[activeProject].url}
                    className="w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    title={projects[activeProject].name}
                    sandbox="allow-scripts allow-same-origin"
                  />

                  {/* Overlay on hover to prevent interaction */}
                  <motion.div
                    className="absolute inset-0 bg-transparent cursor-pointer"
                    whileHover={{
                      background: "rgba(0, 0, 0, 0.05)",
                    }}
                    onClick={() => window.open(projects[activeProject].url, "_blank")}
                  />

                  {/* Loading Indicator */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <motion.div
                        className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="text-gray-400">Lädt Website...</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
