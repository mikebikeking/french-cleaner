import { motion } from 'framer-motion'
import { CircleDot, HandHeart, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: CircleDot,
    step: '01',
    title: 'Drop Off',
    description: 'Bring your garments to our Tremont St location. We inspect every piece and note your preferences.',
  },
  {
    icon: HandHeart,
    step: '02',
    title: 'Expert Care',
    description: 'Each garment is treated individually with the method best suited to its fabric and construction.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Pick Up Fresh',
    description: 'Your clothes are pressed, finished, and ready — looking better than the day you bought them.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Process() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center mb-4 text-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-center text-warm-gray mb-14 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Simple, personal, and meticulous — every time.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map(({ icon: Icon, step, title, description }) => (
            <motion.div key={step} className="text-center" variants={item}>
              <div className="relative inline-block mb-6">
                <span className="font-display text-5xl font-light text-french-blue/15">{step}</span>
                <Icon
                  size={24}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-french-blue"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-lg mb-2 text-charcoal">{title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
