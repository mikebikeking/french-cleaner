import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Steven K.',
    text: 'Excellent service; Emma and David provide the best dry cleaning in Boston for sure. Friendly staff, great pricing, and they are extremely fast. I wouldn’t go anywhere else.',
  },
  {
    name: 'Jessica S.',
    text: 'We go to French Cleaners for our clothes that need cleaning with extra love and care (ex. expensive linen, delicate fabrics). We\'ve had a great experience with the results of the cleanings and the staff has been helpful. Glad to have you guys around the corner!',
  },
  {
    name: 'Joseph C.',
    text: 'French Cleaners pressed a suit I had purchased for my wedding, and upon noticing that the suit - which had never been worn - had stains and chalk marks on it from the seller/tailor - they alerted me to this, and did not charge me. They then worked to help get those stains cleaned in time for my wedding which was less than 24 hours later.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Stars() {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 bg-navy texture-overlay">
      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-3xl md:text-4xl text-center mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say:
        </motion.h2>
        <motion.p
          className="text-center text-white/40 mb-14 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {reviews.map(({ name, text }) => (
            <motion.blockquote
              key={name}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm"
              variants={item}
            >
              <Stars />
              <p className="text-white/70 text-sm leading-relaxed italic font-display mb-6">
                &ldquo;{text}&rdquo;
              </p>
              <cite className="text-white/40 text-xs not-italic uppercase tracking-wider">
                {name}
              </cite>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
