import { useState } from 'react';
import { Code2 } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  loading?: 'eager' | 'lazy';
  decoding?: 'async' | 'auto' | 'sync';
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackIcon,
  loading = 'lazy',
  decoding = 'async',
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-slate-800 ${className}`}>
        {fallbackIcon || <Code2 className="w-8 h-8 text-slate-400" />}
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`flex items-center justify-center bg-slate-800 animate-pulse ${className}`}>
          <Code2 className="w-8 h-8 text-slate-400" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        loading={loading}
        decoding={decoding}
        onError={() => setError(true)}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
