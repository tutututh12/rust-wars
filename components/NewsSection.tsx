import { motion } from 'framer-motion'

interface NewsItem {
  id: number
  title: string
  date: string
  content: string
  type: 'news' | 'event'
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: 'Server Launch!',
    date: '2024-03-01',
    content: 'Welcome to Rust Wars! Join us in this epic Star Wars themed PvP adventure.',
    type: 'news'
  },
  {
    id: 2,
    title: 'Death Star Raid Event',
    date: '2024-03-15',
    content: 'Join the Rebel Alliance in a coordinated attack on the Imperial Death Star base.',
    type: 'event'
  },
  {
    id: 3,
    title: 'New Map Update',
    date: '2024-03-10',
    content: 'Explore new Star Wars themed monuments and locations in our latest map update.',
    type: 'news'
  }
]

export default function NewsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {NEWS_ITEMS.map((item, index) => (
        <motion.div
          key={item.id}
          className="card hover:border-sw-accent/50 transition-colors cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-sw-accent">{item.title}</h3>
            <span className={`px-2 py-1 rounded text-xs ${
              item.type === 'event' 
                ? 'bg-sw-accent text-black' 
                : 'bg-sw-blue text-white'
            }`}>
              {item.type.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-sw-blue-light mb-2">{item.date}</p>
          <p className="text-sm">{item.content}</p>
        </motion.div>
      ))}
    </div>
  )
} 