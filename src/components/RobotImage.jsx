import { useState } from 'react';

export default function RobotImage({ src, alt, className = '', eager = false, size = 420 }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return (
      <div className={`robot-fallback ${className}`} role="img" aria-label={alt} style={{ aspectRatio: '1 / 1' }}>
        <svg viewBox="0 0 180 180" aria-hidden="true">
          <rect x="34" y="42" width="112" height="96" rx="28" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="5"/>
          <rect x="50" y="64" width="80" height="48" rx="18" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="4"/>
          <circle cx="76" cy="88" r="7" fill="#4F46E5"/><circle cx="104" cy="88" r="7" fill="#4F46E5"/>
          <path d="M90 42V24M90 24l18 10" fill="none" stroke="#4F46E5" strokeWidth="5" strokeLinecap="round"/>
          <circle cx="108" cy="34" r="7" fill="#10B981"/>
          <rect x="64" y="138" width="52" height="16" rx="8" fill="#C7D2FE"/>
        </svg>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
