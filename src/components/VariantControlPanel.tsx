import { useState } from 'react';
import { Settings, X } from 'lucide-react';
import {
  CTAVersion,
  HeadlineVariant,
  SocialProofPlacement,
  ScarcityMessage,
  FormType,
} from '../config/abTestConfig';

interface VariantControlPanelProps {
  onVariantChange: (config: {
    ctaVersion?: CTAVersion;
    headlineVariant?: HeadlineVariant;
    socialProofPlacement?: SocialProofPlacement;
    scarcityMessage?: ScarcityMessage;
    formType?: FormType;
  }) => void;
  currentVariants: {
    ctaVersion: CTAVersion;
    headlineVariant: HeadlineVariant;
    socialProofPlacement: SocialProofPlacement;
    scarcityMessage: ScarcityMessage;
    formType: FormType;
  };
}

export default function VariantControlPanel({
  onVariantChange,
  currentVariants,
}: VariantControlPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        title="A/B Test Control Panel"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#333333]">
                A/B Test Control Panel
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  CTA Version
                </label>
                <select
                  value={currentVariants.ctaVersion}
                  onChange={(e) =>
                    onVariantChange({ ctaVersion: e.target.value as CTAVersion })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none"
                >
                  <option value="waitlist">Waitlist (Free)</option>
                  <option value="paid">Paid Registration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Headline Variant
                </label>
                <select
                  value={currentVariants.headlineVariant}
                  onChange={(e) =>
                    onVariantChange({
                      headlineVariant: e.target.value as HeadlineVariant,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none"
                >
                  <option value="A">
                    A: Heal From The Past & Manifest Your Dream Life
                  </option>
                  <option value="B">
                    B: 6 Proven Techniques to Heal Past Trauma
                  </option>
                  <option value="C">
                    C: Free Waitlist: Early Access + Special Discount
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Form Type
                </label>
                <select
                  value={currentVariants.formType}
                  onChange={(e) =>
                    onVariantChange({ formType: e.target.value as FormType })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none"
                >
                  <option value="modal">Modal Popup</option>
                  <option value="inline">Inline Form</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Social Proof Placement
                </label>
                <select
                  value={currentVariants.socialProofPlacement}
                  onChange={(e) =>
                    onVariantChange({
                      socialProofPlacement: e.target
                        .value as SocialProofPlacement,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none"
                >
                  <option value="hero">Below Hero</option>
                  <option value="lower">Lower Section Only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Scarcity Message
                </label>
                <select
                  value={currentVariants.scarcityMessage}
                  onChange={(e) =>
                    onVariantChange({
                      scarcityMessage: e.target.value as ScarcityMessage,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7B2FFF] focus:border-transparent outline-none"
                >
                  <option value="A">A: Limited seats</option>
                  <option value="B">B: Early-bird discount</option>
                  <option value="none">None</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-[#7B2FFF] to-[#C65BFF] text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Apply Changes
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Changes will take effect immediately. To
                  persist changes across page reloads, edit the configuration in{' '}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    src/config/abTestConfig.ts
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
