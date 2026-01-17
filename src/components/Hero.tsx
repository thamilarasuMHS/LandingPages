import { useState } from 'react';
import { Calendar, Clock, Globe, Timer } from 'lucide-react';
import { ABTestConfig, headlines, getCTAText } from '../config/abTestConfig';
import WaitlistModal from './WaitlistModal';
import InlineWaitlistForm from './InlineWaitlistForm';
import ScarcityMessage from './ScarcityMessage';

interface HeroProps {
  variants: ABTestConfig;
}

export default function Hero({ variants }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headline = headlines[variants.headlineVariant];
  const ctaText = getCTAText(variants.ctaVersion);
  const showPricing = variants.ctaVersion === 'paid';
  const showInlineForm = variants.ctaVersion === 'waitlist' && variants.formType === 'inline';
  const showModalButton = variants.ctaVersion === 'waitlist' && variants.formType === 'modal';

  const handleCTAClick = () => {
    if (showModalButton) {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="hero-section relative min-h-screen bg-gradient-to-br from-[#7B2FFF] via-[#8C3BFF] to-[#C65BFF] overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold leading-tight animate-fadeInUp">
                {headline}
              </h1>

              <p className="text-xl md:text-2xl font-medium opacity-90 animate-fadeInUp-delay-1">
                More than 2 Lakh People Have Experienced Big Transformation
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-4 animate-fadeInUp-delay-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 opacity-80" />
                  <span className="font-semibold">15th Jan 2025</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/50"></div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 opacity-80" />
                  <span className="font-semibold">7:00 PM IST</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/50"></div>
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 opacity-80" />
                  <span className="font-semibold">90 Min</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-white/50"></div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 opacity-80" />
                  <span className="font-semibold">English</span>
                </div>
              </div>

              {variants.scarcityMessage !== 'none' && (
                <div className="flex justify-start animate-fadeInUp-delay-2">
                  <ScarcityMessage variant={variants.scarcityMessage} />
                </div>
              )}

              <div className="animate-fadeInUp-delay-3">
                {showInlineForm ? (
                  <InlineWaitlistForm variants={variants} />
                ) : showModalButton ? (
                  <button
                    onClick={handleCTAClick}
                    className="bg-white text-[#7B2FFF] px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-opacity-95"
                  >
                    {ctaText}
                  </button>
                ) : (
                  <button className="bg-white text-[#7B2FFF] px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-opacity-95">
                    {ctaText}
                    {showPricing && (
                      <span className="line-through opacity-70 ml-3">₹1999</span>
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-scaleIn">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-4 border-white/30 overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/dr_edited.avif"
                      alt="Gayathri Shivaram"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModalButton && (
        <WaitlistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          variants={variants}
        />
      )}
    </section>
  );
}
