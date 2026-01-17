import { useState, useEffect } from 'react';
import { ABTestConfig, getHeaderCTAText } from '../config/abTestConfig';
import WaitlistModal from './WaitlistModal';

interface HeaderProps {
  variants: ABTestConfig;
}

export default function Header({ variants }: HeaderProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ctaText = getHeaderCTAText(variants.ctaVersion);
  const isWaitlist = variants.ctaVersion === 'waitlist';

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    if (isWaitlist && variants.formType === 'modal') {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? 'bg-white shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="My Health School"
                className="h-12 w-auto"
              />
              <div className={`transition-colors duration-300 ${isSticky ? 'text-[#7B2FFF]' : 'text-white'}`}>
                <h2 className="text-xl font-bold">My Health School</h2>
                <p className="text-xs opacity-75">Freedom From Disease</p>
              </div>
            </div>

            <button
              onClick={handleCTAClick}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isSticky
                  ? 'bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white'
                  : 'bg-white text-[#7B2FFF]'
              }`}
            >
              {ctaText}
            </button>
          </div>
        </div>
      </header>

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
