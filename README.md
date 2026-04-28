# Anor Website

Anor is a collectible trading card game (TCG).
This website, hosted at [https://anor.cards](https://anor.cards), is built with TypeScript and Vite.

## Tech Stack

- **Core**: TypeScript, HTML, CSS
- **Build Tool**: Vite
- **Development Server**: Vite Dev Server
- **Testing**: Vitest (via NPM scripts)

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js**: >= 24.1.0
- **npm**: >= 11.x (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Itschotsch/tcg-website.git
   cd tcg-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build

Build the project for production:

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

<!-- ### Testing

Run the test suite:

```bash
npm test
``` -->

<!-- ## Project Structure

```
tcg-website/
├── dist/             # Production build output (generated)
├── node_modules/     # Project dependencies (generated)
├── src/
│   ├── components/   # UI Components (e.g., button.ts, card.ts)
│   ├── game/         # Game Logic (e.g., deck-builder.ts)
│   ├── main.ts       # Application entry point
│   ├── rules/        # Game Rules & Data (e.g., rarities.ts)
│   └── styles.css    # Global Styles
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
``` -->
