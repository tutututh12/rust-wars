import { Suspense } from 'react'
import ServerStatus from '@/components/ServerStatus'
import MapPreview from '@/components/MapPreview'
import NewsSection from '@/components/NewsSection'
import ConnectButton from '@/components/ConnectButton'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="heading mb-4">
          Welcome to Rust Wars
        </h1>
        <p className="subheading mb-8">
          A Star Wars Themed PvP Server
        </p>
        <ConnectButton />
      </section>

      {/* Server Status */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="card">
          <h2 className="subheading mb-4">Server Status</h2>
          <Suspense fallback={<div>Loading server status...</div>}>
            <ServerStatus />
          </Suspense>
        </div>
        <div className="card">
          <h2 className="subheading mb-4">Live Map</h2>
          <Suspense fallback={<div>Loading map...</div>}>
            <MapPreview />
          </Suspense>
        </div>
      </section>

      {/* News Section */}
      <section className="mb-16">
        <h2 className="subheading mb-8">Latest News & Events</h2>
        <Suspense fallback={<div>Loading news...</div>}>
          <NewsSection />
        </Suspense>
      </section>
    </div>
  )
} 