import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=542+Tremont+St+Boston+MA+02116'

export default function Location() {
  return (
    <section className="py-20 px-6 bg-white">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-center mb-14 text-charcoal">
          Visit Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-silver shadow-sm">
            <iframe
              title="French Cleaners location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.0!2d-71.0725!3d42.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0e3c2b1a1b%3A0x0!2s542+Tremont+St%2C+Boston%2C+MA+02116!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-medium text-warm-gray uppercase tracking-widest mb-2">
                Address
              </h3>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg text-charcoal hover:text-french-blue transition-colors"
              >
                542 Tremont St<br />
                Boston, MA 02116
              </a>
            </div>
            <div>
              <h3 className="text-xs font-medium text-warm-gray uppercase tracking-widest mb-2">
                Phone
              </h3>
              <a
                href="tel:+16173384692"
                className="inline-flex items-center gap-2 font-display text-lg text-charcoal hover:text-french-blue transition-colors"
              >
                <Phone size={16} />
                (617) 338-4692
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
