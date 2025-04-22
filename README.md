# Labyrintenfinale 2025

Dette repoet er utgangspunkt for caseoppgaven i Labyrintenfinalen 2025. Her kan dere se et eksempel på en enkel frontendapp i React + Typescript + Vite og en enkel Express + TypeScript backend med et api for tips.

## Kom i gang

### Førstegangsoppsett

1. Klon dette repoet til din lokale maskin. Åpne terminalen, naviger til mappen du vil ha repoet i og skriv kommandoen `git clone git@github.com:bekk/labyrintenfinale-de-som-er-i-oslo.git`.
2. Sjekk at du har node og npm installert på din maskin med `npm --version` og `node --version`. Hvis du på en av disse får `command not found`, må du installere det, feks med brew. Spør gjerne en coach om hjelp!

### Kjøre opp backend

1. Naviger inn i backend med `cd backend`.
2. Kjør `npm install` for å installere avhengigheter for backend.
3. Kjør `npm run dev` for å kjøre opp backend. Denne vil da starte opp på port 8080.
4. Åpne en nettleser på `localhost:8080/api/tips` for å verifisere at backend kjører.

### Kjøre opp frontend

1. Åpne nytt terminalvindu og naviger til roten av repoet.
2. Kjør `npm install` for å installere avhengigheter for frontend.
3. Kjør `npm run dev`for å kjøre opp frontend. Den vil da starte opp på port 3000.
4. Åpne nettleser på `localhost:3000` for å verifisere at frontend kjører.
5. Hvis alt er satt opp riktig, så kan du også aksessere backend fra frontend på `localhost:3000/api/tips`. Dette er fordi vi har satt opp en proxy i viteconfigen som gjør at alle forespørseler til `/api` blir sendt til backend.

## Få ting ut i den store verden

Vi bruker Heroku for å hoste appen: https://de-som-er-i-oslo-612923108025.herokuapp.com/.

For å dytte ting ut hit trenger dere bare å pushe til git, så fikser heroku pipeline resten. Om dere trenger å gjøre noen endringer i Heroku, kan dere ta kontakt med en av oss coacher!
