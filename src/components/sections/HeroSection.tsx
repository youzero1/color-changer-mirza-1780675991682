import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-red-800 bg-opacity-50 border border-red-400 rounded-full px-4 py-1.5 mb-6 text-sm font-medium text-red-100">
          <Zap className="w-4 h-4" />
          Powered by Red
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Bold. Vibrant.
          <br />
          <span className="text-red-200">Unmistakably Red.</span>
        </h1>

        <p className="text-lg sm:text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          A stunning application built around a fiery red theme. Energetic, passionate,
          and designed to make a lasting impression on every visitor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
          >
            Explore Features
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 bg-red-800 bg-opacity-60 border-2 border-red-300 text-white px-8 py-3.5 rounded-xl font-bold text-lg hover:bg-red-800 transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="mt-16 flex justify-center opacity-30">
        <div className="w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent rounded-full" />
      </div>
    </section>
  );
}
