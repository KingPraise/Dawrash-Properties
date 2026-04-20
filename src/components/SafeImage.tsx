import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function SafeImage({ src, fallbackSrc, className, alt, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);
  
  // Use a reliable picsum placeholder if the primary image fails
  const defaultFallback = `https://picsum.photos/seed/${alt?.replace(/\s+/g, '-').toLowerCase() || 'property'}/1200/800`;
  const finalFallback = fallbackSrc || defaultFallback;

  return (
    <img
      src={error ? finalFallback : src}
      alt={alt}
      className={cn(className, "transition-opacity duration-500", !src && "opacity-0")}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      {...props}
    />
  );
}
