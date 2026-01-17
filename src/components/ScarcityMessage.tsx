import { AlertCircle, Sparkles } from 'lucide-react';
import { ScarcityMessage as ScarcityMessageType, scarcityMessages } from '../config/abTestConfig';

interface ScarcityMessageProps {
  variant: ScarcityMessageType;
}

export default function ScarcityMessage({ variant }: ScarcityMessageProps) {
  if (variant === 'none') return null;

  const message = scarcityMessages[variant];
  const isVariantA = variant === 'A';

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
        isVariantA
          ? 'bg-red-500/20 text-red-100 border border-red-400/30'
          : 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30'
      }`}
    >
      {isVariantA ? (
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
      ) : (
        <Sparkles className="w-4 h-4 flex-shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
}
