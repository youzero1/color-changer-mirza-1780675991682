import type { Stat } from '@/types';

const stats: Stat[] = [
  { label: 'Active Users', value: '120K+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Countries', value: '48' },
  { label: 'Support Rating', value: '4.9★' },
];

export default function StatsSection() {
  return (
    <section id="stats" className="bg-red-600 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white">Trusted Worldwide</h2>
          <p className="text-red-200 mt-2">Real numbers from real users who love RedApp</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white bg-opacity-10 border border-red-400 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-red-200 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
