import { motion } from 'framer-motion'
import { Shirt, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Dry Cleaning',
    description: 'Expert cleaning for suits, dresses, coats, and delicate garments using eco-friendly solvents.',
  },
  {
    icon: Scissors,
    title: 'Tailoring & Alterations',
    description: 'Precision alterations and custom fitting to ensure your garments look their absolute best.',
  },
  {
    icon: Sparkles,
    title: 'Specialized Fabric Care',
    description: 'Gentle treatment for silk, cashmere, leather, and other fine fabrics that require special attention.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center mb-12 text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              className="text-center px-6 py-8 rounded-2xl border border-silver hover:border-french-blue/30 hover:shadow-md transition-all duration-500"
              variants={item}
            >
              <Icon size={28} className="mx-auto text-french-blue mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-lg mb-2 text-charcoal">{title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
