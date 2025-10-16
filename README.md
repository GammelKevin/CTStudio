# CT Studio Website

Eine moderne, professionelle Website für eine Webagentur mit integriertem E-Commerce-System.

## 🚀 Features

- ⚡ **Next.js 15.5** mit App Router und React 19
- 🎨 **Tailwind CSS** + **shadcn/ui** für modernes Design
- 🛒 **E-Commerce** mit Stripe Integration
- 💾 **PostgreSQL** Datenbank über Neon
- 🔐 **NextAuth.js** für Admin-Authentifizierung
- 📱 **Fully Responsive** Design
- ✨ **Framer Motion** Animationen
- 🎯 **TypeScript** für Type Safety
- 📊 **Prisma ORM** für Datenbank-Management

## 📦 Tech Stack

- **Framework:** Next.js 15.5
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Payment:** Stripe
- **Auth:** NextAuth.js
- **State Management:** Zustand
- **Forms:** React Hook Form + Zod

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CTSTUDIo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Fülle die `.env` Datei mit deinen echten Werten:
   - Erstelle eine Neon PostgreSQL Datenbank
   - Erstelle einen Stripe Account
   - Generiere NextAuth Secret: `openssl rand -base64 32`

4. **Push database schema**
   ```bash
   npm run db:push
   ```

5. **Seed the database**
   ```bash
   npm run db:seed
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

   Die Website läuft auf `http://localhost:3000`

## 📝 Environment Variables

Erforderliche Umgebungsvariablen (siehe `.env.example`):

```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret

# Admin
ADMIN_EMAIL=admin@ctstudio.com
ADMIN_PASSWORD=your-password
```

## 🗄️ Database Commands

```bash
# Push schema changes to database
npm run db:push

# Open Prisma Studio (GUI for database)
npm run db:studio

# Seed database with initial data
npm run db:seed
```

## 💳 Stripe Setup

1. Erstelle einen Account auf [stripe.com](https://stripe.com)
2. Kopiere die Test API Keys aus dem Dashboard
3. Installiere Stripe CLI: `stripe login`
4. Starte Webhook Forwarding:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhook
   ```
5. Kopiere den Webhook Secret in `.env`

## 📱 Pages

- **/** - Homepage mit Hero, Features, Packages
- **/services** - Alle Angebote/Pakete
- **/about** - Über uns Seite
- **/contact** - Kontaktformular
- **/checkout** - Checkout-Seite
- **/checkout/success** - Erfolgreiche Zahlung
- **/checkout/cancel** - Abgebrochene Zahlung

## 🎨 Design

Das Design verwendet:
- **Farben:** Schwarz/Weiß/Grau mit Neon-Akzenten (Purple/Blue/Cyan)
- **Font:** Inter (Google Fonts)
- **Animationen:** Smooth Fade-ins, Hover-Effekte, Scroll-Animationen
- **Komponenten:** shadcn/ui für konsistentes Design

## 🔐 Admin Features

*(Coming soon)*

- Produkte verwalten (CRUD)
- Bestellungen ansehen
- User Management
- Analytics Dashboard

## 📦 Deployment

### Vercel (Empfohlen)

1. Push dein Projekt zu GitHub
2. Importiere in Vercel
3. Füge Environment Variables hinzu
4. Deploy!

### Wichtig für Production:

- Setze `NEXT_PUBLIC_APP_URL` auf deine Domain
- Aktualisiere Stripe Webhook URL
- Verwende Production Stripe Keys
- Generiere neuen `NEXTAUTH_SECRET`

## 🤝 Contributing

Contributions sind willkommen! Bitte erstelle einen Pull Request.

## 📄 License

MIT License

## 👨‍💻 Author

CT Studio Team

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
