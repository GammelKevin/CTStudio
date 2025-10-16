'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Settings } from 'lucide-react';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consentData));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(fullConsent);
  };

  const acceptNecessary = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    saveConsent(minimalConsent);
  };

  const saveCustomConsent = () => {
    saveConsent(consent);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => !showSettings && setShowBanner(false)}
      />

      <div className="relative w-full max-w-2xl rounded-lg border bg-background p-6 shadow-2xl">
        <button
          onClick={() => setShowBanner(false)}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-muted"
        >
          <X className="h-5 w-5" />
        </button>

        {!showSettings ? (
          <>
            <div className="mb-4 flex items-start gap-3">
              <Cookie className="h-6 w-6 text-neon-purple mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">
                  Cookie-Einstellungen
                </h2>
                <p className="text-sm text-muted-foreground">
                  Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer
                  Website zu bieten. Einige Cookies sind notwendig für den Betrieb
                  der Website, während andere uns helfen, die Website und Ihr
                  Erlebnis zu verbessern.
                </p>
              </div>
            </div>

            <div className="mb-6 space-y-3 text-sm">
              <div className="rounded-md bg-muted/50 p-3">
                <h3 className="font-semibold mb-1">🔒 Notwendige Cookies</h3>
                <p className="text-muted-foreground text-xs">
                  Diese Cookies sind für die Funktionalität der Website erforderlich
                  und können nicht deaktiviert werden.
                </p>
              </div>
              <div className="rounded-md bg-muted/50 p-3">
                <h3 className="font-semibold mb-1">📊 Analyse-Cookies</h3>
                <p className="text-muted-foreground text-xs">
                  Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                </p>
              </div>
              <div className="rounded-md bg-muted/50 p-3">
                <h3 className="font-semibold mb-1">🎯 Marketing-Cookies</h3>
                <p className="text-muted-foreground text-xs">
                  Werden verwendet, um Besuchern relevante Werbung anzuzeigen.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-gradient-to-r from-neon-purple to-neon-blue text-white"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={acceptNecessary}
                variant="outline"
                className="flex-1"
              >
                Nur notwendige
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="ghost"
                className="flex-1"
              >
                <Settings className="mr-2 h-4 w-4" />
                Einstellungen
              </Button>
            </div>

            <p className="mt-4 text-xs text-center text-muted-foreground">
              Weitere Informationen finden Sie in unserer{' '}
              <a href="/datenschutz" className="text-neon-purple hover:underline">
                Datenschutzerklärung
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Cookie-Einstellungen anpassen</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between rounded-md border p-4">
                <div>
                  <h3 className="font-semibold">Notwendige Cookies</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Immer aktiv - erforderlich für die Funktion der Website
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="h-4 w-4 cursor-not-allowed"
                />
              </div>

              <div className="flex items-center justify-between rounded-md border p-4">
                <div>
                  <h3 className="font-semibold">Analyse-Cookies</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Helfen uns, die Nutzung der Website zu verstehen
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent({ ...consent, analytics: e.target.checked })
                  }
                  className="h-4 w-4 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between rounded-md border p-4">
                <div>
                  <h3 className="font-semibold">Marketing-Cookies</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ermöglichen personalisierte Werbung
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) =>
                    setConsent({ ...consent, marketing: e.target.checked })
                  }
                  className="h-4 w-4 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                onClick={saveCustomConsent}
                className="flex-1 bg-gradient-to-r from-neon-purple to-neon-blue text-white"
              >
                Einstellungen speichern
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="outline"
                className="flex-1"
              >
                Zurück
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  const [showSettings, setShowSettings] = useState(false);

  const resetConsent = () => {
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-date');
    setShowSettings(true);
    window.location.reload();
  };

  return (
    <button
      onClick={resetConsent}
      className="fixed bottom-4 left-4 z-40 rounded-full bg-muted p-3 shadow-lg hover:bg-muted/80 transition-colors"
      title="Cookie-Einstellungen"
    >
      <Cookie className="h-5 w-5" />
    </button>
  );
}
