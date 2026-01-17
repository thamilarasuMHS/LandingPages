import { useState, FormEvent } from 'react';
import { CheckCircle, Loader2, Calendar } from 'lucide-react';
import { supabase, AppointmentLead } from '../lib/supabase';
import { trackAppointmentRequest } from '../lib/analytics';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
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
      setIsSuccess(true);
    } catch (err) {
      console.error('Appointment request error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-200 text-center">
        <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Thanks — our team will follow up
        </h3>
        <p className="text-gray-600 text-lg">
          We'll reach out within 2 business days to discuss partnership opportunities.
        </p>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Healthcare providers & partners
          </h2>
          <p className="text-lg text-gray-600">
            Interested in offering HealthTrack AI to your patients or clients?
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="apt-name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="apt-name"
                name="apt-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="Dr. Jane Smith"
              />
            </div>

            <div>
              <label htmlFor="apt-email" className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="apt-email"
                name="apt-email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="your@clinic.com"
              />
            </div>

            <div>
              <label htmlFor="apt-phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="apt-phone"
                name="apt-phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="apt-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message (optional)
              </label>
              <textarea
                id="apt-message"
                name="apt-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all resize-none"
                placeholder="Tell us about your practice or organization..."
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                'Request appointment'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
