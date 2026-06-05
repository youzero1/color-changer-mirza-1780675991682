import { Flame, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-red-900 text-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-6 h-6 text-red-400" />
              <span className="text-lg font-bold text-white">RedApp</span>
            </div>
            <p className="text-sm text-red-300">
              Built with passion and a bold red aesthetic. Designed to stand out.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#stats" className="hover:text-white transition-colors">Stats</a></li>
              <li><a href="#cta" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="text-red-300 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-red-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-red-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-red-800 pt-6 text-center text-sm text-red-400">
          &copy; {new Date().getFullYear()} RedApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
