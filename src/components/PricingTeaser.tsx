import { Gift } from 'lucide-react';

export default function PricingTeaser() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-emerald-600">
      <div className="max-w-4xl mx-auto text-center">
        <Gift className="w-12 h-12 text-white mx-auto mb-4 opacity-90" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Early access benefits
        </h2>
        <p className="text-xl text-teal-50 mb-2">
          Pricing details coming soon
        </p>
        <p className="text-teal-100">
          Waitlist members get priority access and exclusive launch pricing
        </p>
      </div>
    </section>
  );
}
