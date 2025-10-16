"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Instagram, Send } from "lucide-react"
import Link from "next/link"

function Footerdemo() {
  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                CT Studio
              </span>
            </h2>
            <form className="relative">
              <Input
                type="email"
                placeholder="E-Mail für Newsletter"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Abonnieren</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-neon-purple/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link href="/" className="block transition-colors hover:text-neon-purple">
                Home
              </Link>
              <Link href="/about" className="block transition-colors hover:text-neon-purple">
                Über uns
              </Link>
              <Link href="/angebote" className="block transition-colors hover:text-neon-purple">
                Angebote
              </Link>
              <Link href="/contact" className="block transition-colors hover:text-neon-purple">
                Kontakt
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>CT Studio</p>
              <p>Flurweg 13</p>
              <p>94527 Aholming</p>
              <p>Deutschland</p>
              <p>E-Mail: kundenservice@ct-studio.store</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Folge uns</h3>
            <div className="flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/ch1scl/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Folge uns auf Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 CT Studio. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/datenschutz" className="transition-colors hover:text-neon-purple">
              Datenschutz
            </Link>
            <Link href="/agb" className="transition-colors hover:text-neon-purple">
              AGB
            </Link>
            <Link href="/impressum" className="transition-colors hover:text-neon-purple">
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
