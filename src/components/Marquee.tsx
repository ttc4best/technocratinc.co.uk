interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

export default function Marquee({ children, reverse = false, speed = 'normal', className = '' }: MarqueeProps) {
  const speedClass = speed === 'slow' ? '[animation-duration:60s]' : speed === 'fast' ? '[animation-duration:20s]' : '';
  const direction = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`flex ${direction} ${speedClass}`}>
        <div className="flex items-center gap-8 pr-8 flex-shrink-0">
          {children}
        </div>
        <div className="flex items-center gap-8 pr-8 flex-shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
