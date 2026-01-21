import { useState } from 'react';
import { Brain, Sparkles, Heart, Target } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function WhatYouWillLearn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const learnings = [
    {
      icon: Brain,
      title: 'Break Free From Limiting Beliefs',
      description: 'Identify and release the mental blocks that have been holding you back from achieving your true potential.'
    },
    {
      icon: Sparkles,
      title: 'Master the Art of Manifestation',
      description: 'Learn proven techniques to attract your desires and create the life you have always dreamed of.'
    },
    {
      icon: Heart,
      title: 'Attract Healthy Relationships',
      description: 'Discover how to build meaningful connections and create harmonious relationships in all areas of life.'
    },
    {
      icon: Target,
      title: '7-Step Goal Achievement System',
      description: 'Master a proven framework that transforms your goals into reality with clarity and confidence.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              What You Will Learn
            </h2>
            <p className="text-xl text-[#555555]">
              Transform your life with these powerful techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {learnings.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7B2FFF] to-[#C65BFF] rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-[#555555] text-center leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Secure Your Spot Now
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
