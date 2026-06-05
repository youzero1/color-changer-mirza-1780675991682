import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section id="cta" className="bg-gradient-to-br from-red-700 to-red-900 py-24 px-4 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Go Red?</h2>
        <p className="text-red-200 text-lg mb-10">
          Join thousands of users who made the bold switch. Enter your email to get early access.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-white bg-opacity-10 border border-red-300 rounded-2xl px-6 py-5 text-lg font-semibold">
            <CheckCircle className="w-6 h-6 text-green-300" />
            <span>You&apos;re on the list! We&apos;ll be in touch soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-900 text-base font-medium placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-300"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-6 py-3.5 rounded-xl font-bold hover:bg-red-50 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
              Join Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
