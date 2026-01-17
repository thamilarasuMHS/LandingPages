import { Camera, Sparkles, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Camera,
      title: 'Auto-capture your data',
      description: 'Connect your health devices and snap photos of meals. Data flows automatically from CGMs, fitness trackers, and food images.',
      tag: 'Coming soon',
    },
    {
      icon: Sparkles,
      title: 'AI suggests your daily diet',
      description: 'Our AI analyzes your glucose, activity, sleep, and nutrition patterns to recommend what to eat today for optimal health.',
      tag: 'AI-powered',
    },
    {
      icon: BarChart3,
      title: 'Track trends & share insights',
      description: 'View simple dashboards, spot patterns over time, and generate comprehensive reports for your healthcare appointments.',
      tag: 'Early access',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to personalized health insights
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center relative">
                    <Icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-3 -right-3 bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
