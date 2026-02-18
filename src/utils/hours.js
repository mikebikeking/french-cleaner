const SCHEDULE = [
  null,                    // 0 = Sunday (closed)
  { open: 7, close: 17 }, // 1 = Monday
  { open: 7, close: 17 }, // 2 = Tuesday
  { open: 7, close: 17 }, // 3 = Wednesday
  { open: 7, close: 17 }, // 4 = Thursday
  { open: 7, close: 17 }, // 5 = Friday
  { open: 9, close: 15 }, // 6 = Saturday
]

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function formatHour(h) {
  if (h === 0 || h === 12) return `12 ${h === 0 ? 'AM' : 'PM'}`
  return h > 12 ? `${h - 12} PM` : `${h} AM`
}

export function getBusinessStatus() {
  const now = new Date()
  const bostonTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
  const day = bostonTime.getDay()
  const hour = bostonTime.getHours()
  const minutes = bostonTime.getMinutes()
  const currentTime = hour + minutes / 60

  const todaySchedule = SCHEDULE[day]

  if (todaySchedule && currentTime >= todaySchedule.open && currentTime < todaySchedule.close) {
    return {
      isOpen: true,
      statusText: 'Open Now',
      closingInfo: `Until ${formatHour(todaySchedule.close)}`,
    }
  }

  // Find next opening
  for (let i = 1; i <= 7; i++) {
    const nextDay = (day + i) % 7
    const nextSchedule = SCHEDULE[nextDay]
    if (nextSchedule) {
      const dayLabel = i === 1 && (!todaySchedule || currentTime >= todaySchedule.close)
        ? 'Tomorrow'
        : DAY_NAMES[nextDay]
      return {
        isOpen: false,
        statusText: 'Closed',
        closingInfo: `Opens ${dayLabel} at ${formatHour(nextSchedule.open)}`,
      }
    }
  }

  return { isOpen: false, statusText: 'Closed', closingInfo: '' }
}

export function getCurrentDayIndex() {
  const now = new Date()
  const bostonTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }))
  return bostonTime.getDay()
}
