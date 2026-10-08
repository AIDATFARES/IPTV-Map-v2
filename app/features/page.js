import PageHeader from '@/components/PageHeader';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { Zap, ShieldCheck, Cpu, Globe2, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'IPTV Map — Streaming Features & Technology | Anti-Freeze IPTV',
  description: 'Discover IPTV Map advanced streaming technology: Anti-Freeze v2.0 load-balancing, 4K 60FPS video clarity, 7-day EPG schedules, and multi-device compatibility.',
  alternates: {
    canonical: `${siteConfig.domain}/features`,
  },
};

export default function FeaturesPage() {
  const breadcrumbs = [{ label: 'Features', href: '/features' }];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.domain,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: `${siteConfig.domain}/features`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="IPTV MAP STREAMING TECHNOLOGY"
        title="Advanced IPTV Map Features Built for"
        titleAccent="Unrivaled Stability"
        description="Discover the engineering behind IPTV Map. From our proprietary Anti-Freeze v2.0 server balancing and 60FPS sports feeds to automatic 7-day EPG updates and universal device compatibility, we deliver a truly reliable cord-cutting experience."
        breadcrumbs={breadcrumbs}
      />

      <FeaturesSection showComparison={true} hideHeader={true} />

      {/* Deep-Dive Tech Architecture Section */}
      <section className="py-20 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
              IPTV ARCHITECTURE &amp; NETWORK TOPOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white mt-1 mb-4">
              Behind the IPTV Map Anti-Freeze v2.0 Architecture
            </h2>
            <p className="text-sm sm:text-base text-brand-text-secondary">
              Standard IPTV services route thousands of users through single overloaded servers, causing stutter during major matches. IPTV Map utilizes a distributed multi-continental edge CDN topology engineered to absorb peak traffic surges and maintain flawless 4K 60FPS streams across our entire <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">channel lineup</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">Global IPTV Edge Gateways</h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                Stream packets are dispatched from servers geographically closest to your location, slashing ping latency and eliminating distance-induced packet drops across all <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported devices</Link>.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-5">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">Redundant Live Stream Ingestion</h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                Critical sporting fixtures feature redundant multi-source transponder uplinks that failover in milliseconds if an upstream satellite source drops. Find more details in our <Link href="/faq" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">streaming FAQ</Link>.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">Hardware-Optimized H.265 / HEVC Compression</h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
                Modern HEVC compression delivers crystal-clear 4K pictures using 50% less bandwidth than legacy H.264, maximizing Wi-Fi performance when configuring your <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV player</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience High-Performance IPTV Map Today"
        subtitle={
          <>
            Test the speed and reliability of IPTV Map on your favorite <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">streaming device</Link>. Zero contracts, instant activation on all <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV plans</Link>, and 24/7 WhatsApp assistance.
          </>
        }
      />
    </>
  );
}
