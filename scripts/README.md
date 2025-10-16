# CT Studio Scripts

## Admin-Benutzer erstellen

Um einen Admin-Benutzer zu erstellen, führe folgenden Befehl aus:

```bash
npm run create-admin
```

### Standard-Anmeldedaten

- **Email:** admin@ctstudio.com
- **Passwort:** admin123

⚠️ **WICHTIG:** Ändere das Standard-Passwort nach dem ersten Login!

### Voraussetzungen

Stelle sicher, dass:
1. Die Datenbank konfiguriert ist (`.env` Datei mit `DATABASE_URL`)
2. `npm install` ausgeführt wurde
3. `npx prisma db push` ausgeführt wurde (oder `npm run db:push`)

### Fehlerbehebung

Wenn der Befehl fehlschlägt:
- Überprüfe die Datenbank-Verbindung
- Stelle sicher, dass das Prisma-Schema synchronisiert ist
- Überprüfe, ob bereits ein Admin-Benutzer existiert
