import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuthProvider } from "@/components/providers/session-provider";
import { CookieBanner, CookieSettingsButton } from "@/components/ui/cookie-banner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CT Studio - Moderne Websites für Unternehmen",
  description: "Wir bauen Websites, die Eindruck machen. Professionelle Webentwicklung mit modernen Technologien.",
  keywords: ["Webdesign", "Webentwicklung", "Website erstellen", "CT Studio"],
  authors: [{ name: "CT Studio" }],
  openGraph: {
    title: "CT Studio - Moderne Websites für Unternehmen",
    description: "Wir bauen Websites, die Eindruck machen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <Navbar />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <CookieBanner />
          <CookieSettingsButton />
        </AuthProvider>
      </body>
    </html>
  );
}
