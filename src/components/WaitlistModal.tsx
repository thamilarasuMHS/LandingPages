import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { submitToWaitlist } from '../services/waitlistService';
import { ABTestConfig } from '../config/abTestConfig';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  variants: ABTestConfig;
}

export default function WaitlistModal({ isOpen, onClose, variants }: WaitlistModalProps) {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      setStep('confirmation');
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
  };

  const handleClose = () => {
    setStep('form');
    setName('');
    setEmail('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 'form' ? (
          <div>
            <h2 className="text-3xl font-bold text-[#333333] mb-2">
              Join the Waitlist
            </h2>
            <p className="text-gray-600 mb-6">
              Get early access and exclusive benefits.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-6 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="text-3xl font-bold text-[#333333] mb-3">
              You're on the waitlist!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Check your inbox for your confirmation and free preview.
            </p>

            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
