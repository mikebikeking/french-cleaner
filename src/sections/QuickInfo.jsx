import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { getBusinessStatus } from '../utils/hours'

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function QuickInfo() {
  const { isOpen, statusText, closingInfo } = getBusinessStatus()

  return (
    <motion.section
      className="bg-french-blue py-4 px-6"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <a
          href="https://www.google.com/maps/search/?api=1&query=542+Tremont+St+Boston+MA+02116"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <MapPin size={16} />
          542 Tremont St, Boston, MA 02116
        </a>
        <div className="inline-flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}
            aria-hidden="true"
          />
          <span className="font-medium text-white">{statusText}</span>
          <span className="text-white/70">{closingInfo}</span>
        </div>
      </div>
    </motion.section>
  )
}
