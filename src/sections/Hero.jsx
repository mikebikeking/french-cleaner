import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, ChevronDown } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          y: bgY,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/70" />
      {/* Shimmer */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, transparent 30%, rgba(0,85,164,0.4) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 6s ease-in-out infinite',
        }}
      />

      <motion.div
        className="relative text-center max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 font-medium mb-6"
          variants={item}
        >
          South End, Boston
        </motion.p>

        <motion.h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-[0.9]"
          variants={item}
        >
          French
          <br />
          Cleaners
        </motion.h1>

        {/* Accent line */}
        <motion.div
          className="mx-auto mt-8 h-[2px] bg-french-blue"
          initial={{ width: 0 }}
          animate={{ width: '5rem' }}
          transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
        />

        <motion.p
          className="mt-6 text-lg md:text-xl text-white/60 font-light italic font-display"
          variants={item}
        >
          Where your wardrobe gets the care it deserves
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <a
            href="tel:+16173384692"
            className="inline-flex items-center gap-2 bg-white text-french-blue px-8 py-4 rounded-full text-base font-medium hover:bg-french-blue hover:text-white transition-all duration-300 shadow-lg shadow-black/20"
          >
            <Phone size={18} />
            Call Now
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} className="text-white/30" />
      </motion.div>
    </section>
  )
}
