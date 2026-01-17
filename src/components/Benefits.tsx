import { Zap, TrendingUp, Heart, Camera, Calendar } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Effortless tracking',
      description: 'Track daily health without effort. Automatic data capture from your devices and food photos means no manual logging.',
    },
    {
      icon: TrendingUp,
      title: 'Daily eating guidance',
      description: 'Know what to eat today, based on your body metrics. Get personalized nutrition suggestions powered by your real-time health data.',
    },
    {
      icon: Heart,
      title: 'Continuous health signals',
      description: 'Monitor glucose, activity, sleep, and nutrition patterns in one place. Spot trends before they become problems.',
    },
    {
      icon: Camera,
      title: 'Smart food capture',
      description: 'Snap a photo of your meal and let AI identify nutrients and log it automatically. No more database searching.',
    },
    {
      icon: Calendar,
      title: 'Appointment insights',
      description: 'Generate comprehensive health summaries for your doctor appointments. Show trends, not just snapshots.',
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Health tracking that adapts to your life, not the other way around
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
