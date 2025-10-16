"use client";

import Link from "next/link";
import { Menu, X, LogIn, UserPlus, User, Sparkles, Settings, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession({
    required: false,
  });
  const pathname = usePathname();

  // Optimistic UI: Keep last known session to prevent flicker during navigation
  const [lastSession, setLastSession] = useState(session);

  useEffect(() => {
    if (session) {
      setLastSession(session);
    }
  }, [session]);

  // Display last known session even if currently loading
  const displaySession = session || lastSession;

  // Only show loading skeleton if we never had a session
  const showAuthLoading = status === "loading" && !lastSession;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Produkte" },
    { href: "/about", label: "Über uns" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group relative">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-lg blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500" />
                <span className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                  CT Studio
                </span>
              </div>
              <Sparkles className="h-5 w-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="relative group px-5 py-2">
                  <span
                    className={`text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 transform origin-center transition-all duration-300 ${
                      isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  />
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-lg -z-10" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <CartDrawer />

            {showAuthLoading ? (
              <div className="hidden md:flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
              </div>
            ) : displaySession ? (
              <div className="hidden md:block relative group">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-purple-500/20">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {displaySession.user?.name?.split(" ")[0] || "User"}
                  </span>
                </button>

                <div className="absolute right-0 mt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-black/95 backdrop-blur-2xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
                    <div className="p-3 border-b border-border/50 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                      <p className="text-sm font-semibold">{displaySession.user?.name}</p>
                      <p className="text-xs text-muted-foreground">{displaySession.user?.email}</p>
                    </div>
                    <div className="p-1">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors group/item"
                      >
                        <Settings className="h-4 w-4 text-muted-foreground group-hover/item:text-purple-500 transition-colors" />
                        <span className="text-sm">Profil</span>
                      </Link>
                      {displaySession.user?.role === "ADMIN" && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors group/item"
                        >
                          <LayoutDashboard className="h-4 w-4 text-muted-foreground group-hover/item:text-purple-500 transition-colors" />
                          <span className="text-sm">Admin Panel</span>
                        </Link>
                      )}
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 transition-colors group/item"
                      >
                        <LogOut className="h-4 w-4 text-muted-foreground group-hover/item:text-red-500 transition-colors" />
                        <span className="text-sm group-hover/item:text-red-500 transition-colors">
                          Abmelden
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Button variant="ghost" size="sm" asChild className="gap-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300">
                  <Link href="/login">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Link href="/register">
                    <UserPlus className="h-4 w-4" />
                    Registrieren
                  </Link>
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border/50"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="border-t border-border/50 pt-4 mt-4 space-y-1">
                  {showAuthLoading ? (
                    <div className="px-4 py-3">
                      <div className="h-8 bg-muted animate-pulse rounded" />
                    </div>
                  ) : displaySession ? (
                    <>
                      <div className="px-4 py-2 mb-2 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                        <p className="text-sm font-semibold">{displaySession.user?.name}</p>
                        <p className="text-xs text-muted-foreground">{displaySession.user?.email}</p>
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        Profil
                      </Link>
                      {displaySession.user?.role === "ADMIN" && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <LayoutDashboard className="h-4 w-4" />
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          signOut();
                          setMobileMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        Abmelden
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <LogIn className="h-4 w-4" />
                        Login
                      </Link>
                      <Link
                        href="/register"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium transition-all hover:from-purple-600 hover:to-pink-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <UserPlus className="h-4 w-4" />
                        Registrieren
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
