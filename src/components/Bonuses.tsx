import { useEffect, useRef, useState } from 'react';
import WaitlistModal from './WaitlistModal';
import { abTestConfig } from '../config/abTestConfig';

export default function Bonuses() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const bonuses = [
    {
      emoji: '📅',
      title: '21-Day Abundance Challenge',
      value: '₹1999',
      description: 'Daily practices to manifest abundance and prosperity'
    },
    {
      emoji: '💖',
      title: 'Inner Child Healing Meditation',
      value: '₹1499',
      description: 'Powerful guided meditation to heal childhood wounds'
    },
    {
      emoji: '📋',
      title: 'Boost Self-Esteem Worksheet',
      value: '₹999',
      description: 'Actionable exercises to build unshakeable confidence'
    },
    {
      emoji: '📚',
      title: 'Overcome Emotional Pain Workbook',
      value: '₹1599',
      description: 'Step-by-step guide to release emotional baggage'
    },
    {
      emoji: '☀️',
      title: 'The Miracle Morning Routine Guide',
      value: '₹1499',
      description: 'Transform your mornings and transform your life'
    }
  ];

  const totalValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('₹', ''));
  }, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-6 py-3 rounded-full mb-6 shadow-lg animate-pulse-slow">
              <span className="text-2xl">🎁</span>
              <span className="font-bold text-lg">Special Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Unlock Special Bonuses Worth ₹{totalValue.toLocaleString('en-IN')}
            </h2>
            <p className="text-xl text-[#555555]">
              Get instant access to these premium resources after attending the masterclass 🎯
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bonuses.slice(0, 3).map((bonus, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`
                  bg-white rounded-2xl p-6 border-2 border-purple-100
                  hover:border-purple-400 hover:shadow-2xl
                  transition-all duration-500 hover:-translate-y-2
                  ${
                    visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }
                `}
                style={{
                  transitionDelay: visibleCards.includes(index) ? '0ms' : `${index * 150}ms`
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7B2FFF] to-[#C65BFF] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    <span className="text-3xl">{bonus.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-2 shadow-md">
                      {bonus.value}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  {bonus.title}
                </h3>
                <p className="text-[#555555] leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8 lg:flex-nowrap">
            {bonuses.slice(3, 5).map((bonus, index) => {
              const actualIndex = index + 3;
              return (
                <div
                  key={actualIndex}
                  ref={(el) => (cardsRef.current[actualIndex] = el)}
                  className={`
                    bg-white rounded-2xl p-6 border-2 border-purple-100
                    hover:border-purple-400 hover:shadow-2xl
                    transition-all duration-500 hover:-translate-y-2
                    w-full md:w-[calc(50%-12px)] lg:w-auto lg:max-w-sm
                    ${
                      visibleCards.includes(actualIndex)
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }
                  `}
                  style={{
                    transitionDelay: visibleCards.includes(actualIndex) ? '0ms' : `${actualIndex * 150}ms`
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#7B2FFF] to-[#C65BFF] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg transform hover:rotate-12 transition-transform duration-300">
                      <span className="text-3xl">{bonus.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-2 shadow-md">
                        {bonus.value}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3">
                    {bonus.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-2xl p-6 mb-12 text-center shadow-lg animate-fade-in-up">
            <p className="text-lg text-[#333333] font-semibold">
              <span className="text-2xl mr-2">✨</span>
              <span className="text-[#7B2FFF] font-bold">Note:</span> All bonuses will be unlocked automatically after you attend the live masterclass
              <span className="text-2xl ml-2">🔓</span>
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span className="inline-flex items-center gap-2">
                Claim Your Bonuses Now
                <span className="text-xl group-hover:animate-bounce">🎉</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variants={abTestConfig}
      />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
