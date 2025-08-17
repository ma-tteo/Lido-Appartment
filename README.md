# Tortoreto Lido Apartment - Sito Vetrina

![Screenshot del sito web dell'appartamento a Tortoreto Lido](https://i.imgur.com/IFtDT8y.jpeg)

Questo è il repository per il sito web promozionale di un moderno appartamento per vacanze situato nel cuore di Tortoreto Lido (TE), Abruzzo. Il sito è stato costruito per essere veloce, responsive e per facilitare il contatto diretto tramite WhatsApp o telefono.

**➡️ Visita il sito live: [https://Matto244.github.io](https://Matto244.github.io)**

---

## ✨ Caratteristiche Principali

- **Design Moderno e Responsive**: Interfaccia utente pulita e completamente navigabile da qualsiasi dispositivo, desktop o mobile.
- **Galleria Fotografica Interattiva**: Esplora l'appartamento con una galleria di immagini a griglia e visualizzazione a schermo intero.
- **Sistema di Recensioni Dinamico**: Gli utenti possono lasciare recensioni in tempo reale, gestite tramite un backend **Firebase Firestore**.
- **Contatto Rapido Fluttuante**: Pulsanti WhatsApp e Telefono sempre visibili per massimizzare le conversioni.
- **Tema Chiaro/Scuro**: Possibilità per l'utente di scegliere il tema visivo preferito.
- **Mappa Interattiva**: Una mappa OpenStreetMap integrata per mostrare la posizione esatta dell'appartamento.
- **Animazioni fluide**: Transizioni ed effetti realizzati con **Framer Motion** per un'esperienza utente più piacevole.

---

## 🛠️ Tecnologie Utilizzate

- **Framework Frontend**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Componenti UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Backend (per le recensioni)**: [Firebase Firestore](https://firebase.google.com/products/firestore)
- **Animazioni**: [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Come Avviare il Progetto in Locale

Per eseguire una copia del progetto sul tuo computer:

1.  **Clona il repository:**
    ```bash
    git clone https://github.com/Matto244/Matto244.github.io.git
    cd Matto244.github.io
    ```

2.  **Installa le dipendenze:**
    ```bash
    npm install
    ```

3.  **Configura Firebase:**
    - Crea un file `.env.local` nella cartella principale.
    - Inserisci le tue credenziali Firebase come mostrato nel file `.env.example` (se presente) o seguendo la struttura `VITE_FIREBASE_*`.

4.  **Avvia il server di sviluppo:**
    ```bash
    npm run dev
    ```
    Il sito sarà visibile su `http://localhost:5173` (o la porta indicata nel terminale).

---

## 📦 Deployment

Il sito è configurato per essere pubblicato su GitHub Pages con un singolo comando:

```bash
npm run deploy
```
Questo comando esegue il build del progetto nella cartella `dist` e successivamente la pubblica sul branch `gh-pages`.

---

## 🏷️ Argomenti per GitHub (Topics)

Per migliorare la visibilità del tuo repository su GitHub, vai sulla pagina principale del tuo repo, clicca sull'icona a forma di ingranaggio "Manage topics" e aggiungi questi "hashtags":

`react` `vite` `typescript` `tailwind-css` `firebase` `firestore` `portfolio-project` `vacation-rental` `website-showcase` `responsive-design` `shadcn-ui` `framer-motion` `tortoreto` `abruzzo`
