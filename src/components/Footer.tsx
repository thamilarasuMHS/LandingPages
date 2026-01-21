import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#7B2FFF] via-[#8C3BFF] to-[#C65BFF] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="My Health School"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-2xl font-bold">My Health School</h3>
                  <p className="text-sm opacity-80">Freedom From Disease</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                Empowering individuals to heal from the past and manifest their dream life through proven healing and manifestation techniques. Join over 200,000 people who have transformed their lives with us.
              </p>
              <div className="space-y-2">
                <a href="mailto:support@myhealthschool.com" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>support@myhealthschool.com</span>
                </a>
                <a href="tel:+911234567890" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 123 456 7890</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/90 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#masterclass" className="text-white/90 hover:text-white transition-colors">
                    Masterclass
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-white/90 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/90 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#privacy" className="text-white/90 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#refund" className="text-white/90 hover:text-white transition-colors">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-white/90 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-center">
              <p className="text-sm leading-relaxed">
                <strong>Disclaimer:</strong> The results and testimonials shared on this page are based on individual experiences and may vary from person to person. We do not guarantee specific outcomes, as results depend on various factors including personal commitment, consistent practice, and individual circumstances. This masterclass is for educational and informational purposes only and is not a substitute for professional medical, psychological, or financial advice.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#7B2FFF] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-6"
              >
                Register For Masterclass Now
              </button>
              <p className="text-white/80">
                © {currentYear} My Health School. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
}
