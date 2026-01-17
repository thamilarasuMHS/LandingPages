import { useState } from 'react';
import { Play } from 'lucide-react';
import { ABTestConfig, getCTAText } from '../config/abTestConfig';
import WaitlistModal from './WaitlistModal';

interface TestimonialsProps {
  variants: ABTestConfig;
}

export default function Testimonials({ variants }: TestimonialsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ctaText = variants.ctaVersion === 'waitlist'
    ? 'Join Them On The Waitlist'
    : 'Join Them In This Transformation';

  const isWaitlist = variants.ctaVersion === 'waitlist';

  const handleCTAClick = () => {
    if (isWaitlist && variants.formType === 'modal') {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
                See What Our Participants Say
              </h2>
              <p className="text-xl text-[#555555]">
                Real stories of transformation and success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 ml-1" fill="white" />
                      </div>
                      <p className="text-lg font-semibold">Testimonial from Participant</p>
                      <p className="text-sm opacity-90 mt-2">Click to play video</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {isWaitlist && variants.formType === 'modal' && (
        <WaitlistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          variants={variants}
        />
      )}
    </>
  );
}
