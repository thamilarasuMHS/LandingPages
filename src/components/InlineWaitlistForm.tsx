import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { submitToWaitlist } from '../services/waitlistService';
import { ABTestConfig } from '../config/abTestConfig';

interface InlineWaitlistFormProps {
  variants: ABTestConfig;
}

export default function InlineWaitlistForm({ variants }: InlineWaitlistFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    const result = await submitToWaitlist({
      name: name.trim(),
      email: email.trim(),
      variants,
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      setName('');
      setEmail('');
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center gap-3 text-white">
          <CheckCircle className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-bold text-lg">You're on the waitlist!</p>
            <p className="text-sm opacity-90">
              Check your inbox for your confirmation and free preview.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none transition-all"
            placeholder="Your Name"
            disabled={isSubmitting}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/95 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none transition-all"
            placeholder="Your Email"
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <div className="p-3 bg-red-500/20 border border-red-400/50 rounded-lg text-white text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-[#7B2FFF] px-6 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Joining...
            </>
          ) : (
            'Join Free Waitlist'
          )}
        </button>
      </form>
    </div>
  );
}
