import { useState } from 'react'
import { motion } from 'framer-motion'

const SERVER_IP = 'play.rustwars.com:28015'

export default function ConnectButton() {
  const [copied, setCopied] = useState(false)

  const handleConnect = () => {
    window.location.href = `steam://connect/${SERVER_IP}`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(SERVER_IP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <motion.button
        className="btn-accent"
        onClick={handleConnect}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Connect to Server
      </motion.button>

      <div className="relative">
        <motion.button
          className="btn-primary"
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? 'Copied!' : 'Copy IP'}
        </motion.button>
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-sw-blue-dark px-3 py-1 rounded text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
        >
          {SERVER_IP}
        </motion.div>
      </div>
    </div>
  )
} 