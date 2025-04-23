import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Rust Wars - Star Wars Themed PvP Server',
  description: 'Join the ultimate Star Wars themed Rust PvP server. Experience epic battles, explore unique maps, and become a legend in the galaxy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className="bg-black text-white min-h-screen bg-stars">
        <div className="fixed inset-0 bg-gradient-radial from-sw-blue-dark/20 to-black/80 pointer-events-none" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
} 