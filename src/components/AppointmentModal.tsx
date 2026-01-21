import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { supabase, AppointmentLead } from '../lib/supabase';
import { trackAppointmentRequest } from '../lib/analytics';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in name and email.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const leadData: AppointmentLead = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        message: formData.message.trim() || undefined,
      };

      const { error: submitError } = await supabase
        .from('appointment_leads')
        .insert([leadData]);

      if (submitError) {
        throw submitError;
      }

      trackAppointmentRequest(formData.email);
      setStep('confirmation');
    } catch (err) {
      console.error('Appointment submission error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
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
              Register For Masterclass
            </h2>
            <p className="text-gray-600 mb-6">
              Fill in your details to secure your spot.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="apt-name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apt-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="apt-email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="apt-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="apt-phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="apt-phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="Enter your phone"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="apt-message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message (optional)
                </label>
                <textarea
                  id="apt-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                  placeholder="Any questions or special requests?"
                  rows={3}
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
                    Registering...
                  </>
                ) : (
                  'Register For Masterclass Now'
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
              Registration Successful!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for registering. We'll send you the masterclass details via email shortly.
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

