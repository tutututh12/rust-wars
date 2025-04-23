# Rust Wars - Star Wars Themed PvP Server Website

A modern, responsive website for the Rust Wars PvP server, featuring real-time server status, interactive map, and news updates.

## Features

- 🎮 Real-time server status monitoring
- 🗺️ Interactive server map with points of interest
- 📰 News and events section
- 🚀 Star Wars themed design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎨 Beautiful animations with Framer Motion

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Map:** Mapbox GL JS
- **Server Monitoring:** BattleMetrics API
- **Icons:** Heroicons

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn
- A BattleMetrics API key
- A Mapbox access token

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/rust-wars.git
cd rust-wars
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your_mapbox_token
BATTLEMETRICS_API_KEY=your_battlemetrics_key
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout with global styles
│   └── page.tsx      # Home page component
├── components/
│   ├── ConnectButton.tsx    # Server connection button
│   ├── MapPreview.tsx       # Interactive server map
│   ├── NewsSection.tsx      # News and events display
│   └── ServerStatus.tsx     # Real-time server status
└── styles/
    └── globals.css          # Global styles and Tailwind imports
```

## Configuration

### Server Information

Update the server IP in `src/components/ConnectButton.tsx`:

```typescript
const SERVER_IP = 'your-server-ip:port'
```

### Map Points of Interest

Update the points of interest in `src/components/MapPreview.tsx`:

```typescript
const POINTS_OF_INTEREST = [
  { id: 1, name: 'Location Name', type: 'type', latitude: 0, longitude: 0 },
  // Add more locations...
]
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Star Wars is a trademark of Disney/Lucasfilm Ltd.
- Rust is a trademark of Facepunch Studios
- Map data provided by Mapbox
- Server monitoring powered by BattleMetrics

