'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Logo({ compact = false, className = '', onClick }) {
  const pathname = usePathname();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      scroll={true}
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg cursor-pointer ${className}`}
      aria-label="IPTV Map - Return to homepage"
    >
      {/* Icon Mark: Modern Television Display */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-all duration-300 bg-brand-bg-secondary border border-brand-primary/30 shadow-[0_0_15px_rgba(0,229,153,0.25)]">
        <Image
          src="/logo-icon.svg"
          alt="IPTV Map Official Brand Logo - 4K Television Streaming"
          title="IPTV Map - Return to Homepage"
          width={40}
          height={40}
          className="w-full h-full object-contain p-0.5"
          priority
        />
      </div>

      {/* Typography */}
      {!compact && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-xl sm:text-2xl font-black font-heading tracking-wider text-white group-hover:text-brand-text transition-colors">
              IPTV
            </span>
            <span className="text-xs sm:text-sm font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-brand-primary to-emerald-400 text-brand-bg font-heading uppercase shadow-sm shadow-brand-primary/40">
              MAP
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-slate-300 font-bold mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            Global 4K Network
          </span>
        </div>
      )}
    </Link>
  );
}
