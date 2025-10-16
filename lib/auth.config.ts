import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserRole } from "@prisma/client";

// Edge-safe configuration without Prisma
export const authConfig = {
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "fallback-secret-for-development-only-change-in-production",
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Lazy imports to keep edge-safe (imports only happen during actual auth, not in middleware)
          const { db } = await import("@/lib/db");
          const { compare } = await import("bcryptjs");

          console.log("[Auth] Attempting login for:", credentials?.email);

          if (!credentials?.email || !credentials?.password) {
            console.error("[Auth] Missing credentials");
            throw new Error("Ungültige Anmeldedaten");
          }

          const email = credentials.email as string;
          const password = credentials.password as string;

          const user = await db.user.findUnique({
            where: {
              email,
            },
          });

          console.log("[Auth] User found:", user ? "Yes" : "No");

          if (!user || !user.password) {
            console.error("[Auth] User not found or no password");
            throw new Error("Benutzer nicht gefunden");
          }

          const isPasswordValid = await compare(
            password,
            user.password
          );

          console.log("[Auth] Password valid:", isPasswordValid);

          if (!isPasswordValid) {
            console.error("[Auth] Invalid password");
            throw new Error("Falsches Passwort");
          }

          console.log("[Auth] Login successful for:", user.email, "Role:", user.role);

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            image: user.image,
          };
        } catch (error) {
          console.error("[Auth] Authorization error:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("[Auth] JWT callback - adding user to token:", user.email, user.role);
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      console.log("[Auth] Session callback - token role:", token.role);
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
