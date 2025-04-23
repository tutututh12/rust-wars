import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { UsersIcon, ClockIcon, WifiIcon } from '@heroicons/react/24/outline'

interface ServerStats {
  players: number
  maxPlayers: number
  uptime: string
  ping: number
  queue?: number
}

export default function ServerStatus() {
  const [stats, setStats] = useState<ServerStats>({
    players: 0,
    maxPlayers: 200,
    uptime: '0h 0m',
    ping: 0
  })

  useEffect(() => {
    const fetchServerStats = async () => {
      try {
        // In production, replace with actual API call to BattleMetrics
        const mockStats = {
          players: Math.floor(Math.random() * 200),
          maxPlayers: 200,
          uptime: '24h 30m',
          ping: Math.floor(Math.random() * 100),
          queue: Math.floor(Math.random() * 10)
        }
        setStats(mockStats)
      } catch (error) {
        console.error('Failed to fetch server stats:', error)
      }
    }

    fetchServerStats()
    const interval = setInterval(fetchServerStats, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-4">
      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <UsersIcon className="h-6 w-6 text-sw-accent" />
        <div>
          <p className="text-sm text-sw-blue-light">Players Online</p>
          <p className="text-lg font-bold">{stats.players}/{stats.maxPlayers}</p>
          {stats.queue && stats.queue > 0 && (
            <p className="text-sm text-sw-accent">Queue: {stats.queue}</p>
          )}
        </div>
      </motion.div>

      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ClockIcon className="h-6 w-6 text-sw-accent" />
        <div>
          <p className="text-sm text-sw-blue-light">Uptime</p>
          <p className="text-lg font-bold">{stats.uptime}</p>
        </div>
      </motion.div>

      <motion.div 
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <WifiIcon className="h-6 w-6 text-sw-accent" />
        <div>
          <p className="text-sm text-sw-blue-light">Server Ping</p>
          <p className="text-lg font-bold">{stats.ping}ms</p>
        </div>
      </motion.div>
    </div>
  )
} 