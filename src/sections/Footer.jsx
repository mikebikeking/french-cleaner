export default function Footer() {
  return (
    <footer className="border-t-2 border-french-blue bg-charcoal text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-display text-lg text-white/80 mb-2">French Cleaners</p>
        <p className="text-sm text-white/40">
          542 Tremont St, Boston MA 02116 &middot; (617) 338-4692
        </p>
        <p className="mt-4 text-xs text-white/25">
          &copy; {new Date().getFullYear()} French Cleaners &middot; South End, Boston
        </p>
      </div>
    </footer>
  )
}
