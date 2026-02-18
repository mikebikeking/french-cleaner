import { motion } from 'framer-motion'
import { getCurrentDayIndex } from '../utils/hours'

const schedule = [
  { day: 'Monday', hours: '7 AM – 5 PM', dayIndex: 1 },
  { day: 'Tuesday', hours: '7 AM – 5 PM', dayIndex: 2 },
  { day: 'Wednesday', hours: '7 AM – 5 PM', dayIndex: 3 },
  { day: 'Thursday', hours: '7 AM – 5 PM', dayIndex: 4 },
  { day: 'Friday', hours: '7 AM – 5 PM', dayIndex: 5 },
  { day: 'Saturday', hours: '9 AM – 3 PM', dayIndex: 6 },
  { day: 'Sunday', hours: 'Closed', dayIndex: 0 },
]

export default function Hours() {
  const today = getCurrentDayIndex()

  return (
    <section className="py-20 px-6 bg-cream">
      <motion.div
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-center mb-10 text-charcoal">
          Hours
        </h2>
        <div className="space-y-0">
          {schedule.map(({ day, hours, dayIndex }) => {
            const isToday = dayIndex === today
            return (
              <div
                key={day}
                className={`flex justify-between py-3 px-4 rounded-lg text-sm ${
                  isToday
                    ? 'border-l-4 border-french-blue bg-french-blue/5 text-french-blue font-medium'
                    : 'text-charcoal'
                }`}
              >
                <span>{day}{isToday && ' (Today)'}</span>
                <span className={hours === 'Closed' ? 'text-warm-gray' : ''}>
                  {hours}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
