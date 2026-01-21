import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function WhoShouldJoin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const benefits = [
    'Wake up with clarity and purpose',
    'Attract wealth, abundance, opportunities',
    'Feel confident in decision-making',
    'Overcome stress and anxiety',
    'Heal relationships',
    'Build a positive mindset'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Who Should Join This Masterclass?
            </h2>
            <p className="text-xl text-[#555555]">
              This transformational experience is perfect for you if you want to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle2 className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-lg text-[#333333] font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Yes, I Want To Transform My Life!
            </button>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
