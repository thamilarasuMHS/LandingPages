import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Will I get a recording of the masterclass?',
      answer: 'Yes! All registered participants will receive a recording of the masterclass within 24 hours after the live session ends. You can watch it at your convenience and revisit the content anytime.'
    },
    {
      question: 'Who should attend this masterclass?',
      answer: 'This masterclass is perfect for anyone looking to transform their life, overcome limiting beliefs, attract abundance, heal relationships, or learn powerful manifestation techniques. Whether you are a beginner or have some experience with personal development, you will find immense value in this session.'
    },
    {
      question: 'What if I don\'t receive the email after payment?',
      answer: 'If you don\'t receive the confirmation email within 15 minutes after payment, please check your spam/junk folder first. If you still can\'t find it, contact our support team at support@myhealthschool.com with your payment details, and we will assist you immediately.'
    },
    {
      question: 'How do I join the masterclass?',
      answer: 'After successful registration and payment, you will receive an email with the Zoom/Google Meet link and instructions. On the day of the masterclass, simply click the link 10 minutes before the scheduled time to join the live session.'
    },
    {
      question: 'When will I receive the bonuses?',
      answer: 'All bonuses will be automatically unlocked and sent to your registered email address within 2 hours after you attend the live masterclass. Make sure to attend the full session to claim all your bonuses worth ₹7,599!'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-[#7B2FFF] px-6 py-3 rounded-full mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
              <span className="text-2xl">❓</span>
              <span className="font-bold text-lg">Got Questions?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#555555]">
              Everything you need to know about the masterclass
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`
                  bg-white rounded-2xl border-2 overflow-hidden
                  transition-all duration-300 hover:shadow-2xl
                  ${
                    openIndex === index
                      ? 'border-[#7B2FFF] shadow-xl shadow-purple-500/20'
                      : 'border-gray-200 hover:border-purple-300'
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full flex items-center justify-between p-6 text-left
                    transition-all duration-300 group
                    ${openIndex === index ? 'bg-gradient-to-r from-purple-50 to-pink-50' : 'bg-white hover:bg-gray-50'}
                  `}
                >
                  <span className="text-lg font-bold text-[#333333] pr-4 group-hover:text-[#7B2FFF] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`
                      w-6 h-6 flex-shrink-0 transition-all duration-300
                      ${
                        openIndex === index
                          ? 'rotate-180 text-[#7B2FFF]'
                          : 'text-gray-400 group-hover:text-[#7B2FFF]'
                      }
                    `}
                  />
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 pb-6 text-[#555555] leading-relaxed bg-gradient-to-b from-purple-50/50 to-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#555555] text-lg mb-4">
              Still have questions? <span className="text-2xl">🤔</span>
            </p>
            <a
              href="mailto:support@myhealthschool.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-xl">💬</span>
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
