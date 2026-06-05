import { Shield, Rocket, Palette, BarChart2, Lock, Headphones } from 'lucide-react';
import clsx from 'clsx';
import type { Feature } from '@/types';

const features: Feature[] = [
  { id: 1, title: 'Blazing Fast', description: 'Optimized for speed with lightning performance at every layer of the stack.', icon: 'Rocket' },
  { id: 2, title: 'Secure by Default', description: 'Enterprise-grade security built in from the ground up, protecting your data.', icon: 'Shield' },
  { id: 3, title: 'Beautiful Design', description: 'A stunning red-themed interface that makes users take notice and stay engaged.', icon: 'Palette' },
  { id: 4, title: 'Deep Analytics', description: 'Real-time insights and dashboards to keep you informed about what matters.', icon: 'BarChart2' },
  { id: 5, title: 'Privacy First', description: 'Your data stays yours. Full control over what you share and with whom.', icon: 'Lock' },
  { id: 6, title: '24/7 Support', description: 'Round-the-clock expert support so you never feel alone when things get tough.', icon: 'Headphones' },
];

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  BarChart2: <BarChart2 className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Features
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Packed with powerful features wrapped in a bold red experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={clsx(
                'rounded-2xl p-6 border transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
                index % 2 === 0
                  ? 'bg-red-50 border-red-100'
                  : 'bg-white border-gray-100'
              )}
            >
              <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-4 shadow">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
