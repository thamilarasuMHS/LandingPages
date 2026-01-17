import { Users } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "Finally, a health tracker that doesn't feel like homework.",
      role: "Beta tester",
    },
    {
      quote: "The food photo feature saves me 10 minutes every meal.",
      role: "Early adopter",
    },
    {
      quote: "I showed my doctor the health summary and she was impressed.",
      role: "Health enthusiast",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by health-conscious individuals
          </h2>
          <p className="text-lg text-gray-600">
            Join hundreds on the waitlist for early access
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm text-gray-600">— {testimonial.role}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="w-8 h-8 text-teal-600" />
            <h3 className="text-xl font-semibold text-gray-900">
              Partnering with leading health organizations
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-40">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            Logo placeholders — partnerships in development
          </p>
        </div>
      </div>
    </section>
  );
}
