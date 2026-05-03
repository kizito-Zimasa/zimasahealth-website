// components/sections/StatsStrip.tsx
interface Stat { value: string; label: string }

export default function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-navy py-section-sm">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-h2 text-white mb-2">{stat.value}</p>
              <p className="font-ui text-label text-white/70 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
