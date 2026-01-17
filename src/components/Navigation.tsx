import { Activity } from 'lucide-react';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-semibold text-gray-900">HealthTrack AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Why it works
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
