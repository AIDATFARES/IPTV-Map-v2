import PageHeader from '@/components/PageHeader';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { ShieldCheck, HeartHandshake, Zap, Globe, Tv, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'IPTV Map — About Us | High-Stability IPTV Streaming Mission',
  description: 'Learn about IPTV Map: Our engineering commitment to high-stability IPTV streaming, honest pricing, universal multi-device compatibility, and 24/7 human care.',
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: 'About', href: '/about' }];

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
        name: 'About',
        item: `${siteConfig.domain}/about`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="ABOUT IPTV MAP — MISSION &amp; STREAMING STANDARDS"
        title="Engineering a Superior IPTV Experience for"
        titleAccent="Modern Homes"
        description="At IPTV Map, we believe cord-cutting through modern IPTV streaming should be effortless, ultra-reliable, and cost-effective. Discover our high-bandwidth server architecture, Anti-Freeze v2.0 load balancing, and human-first customer care."
        breadcrumbs={breadcrumbs}
      />

      {/* Main Philosophy Section */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl space-y-16">
          {/* Section 1: Who We Are */}
          <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-12 border border-white/10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-4">
              What is IPTV Map? Redefining Modern IPTV Streaming
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-brand-text-secondary leading-relaxed">
              <p>
                IPTV Map is a high-performance IPTV service dedicated to delivering crystal-clear <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live television broadcasts</Link>, premier global sporting tournaments at native 60FPS, and an expansive 4K on-demand cinema library directly over your high-speed internet connection.
              </p>
              <p>
                Traditional cable and satellite packages come with locked-in annual contracts, hidden regional sports fees, and expensive proprietary hardware rentals. IPTV Map breaks free from outdated broadcasting models by delivering ultra-fast, high-bitrate streaming feeds straight to the <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">streaming devices you already own</Link>—including Amazon Firestick, Apple TV, Smart TVs, Android boxes, and mobile screens. Explore our transparent <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plans</Link> and start watching in minutes.
              </p>
            </div>
          </div>

          {/* Section 2: Core Pillars Grid */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-8 text-center">
              Our Core IPTV Service Pillars: Built for Reliability &amp; Trust
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  Anti-Freeze v2.0 Stream Integrity
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  We invest continuously in redundant edge CDN routing and real-time server balancing to eliminate buffering and maintain native 60FPS live sports playback through our <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Anti-Freeze technology</Link>.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  Honest, Transparent Pricing
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  No surprise setup charges, zero hardware rental costs, and no automated recurring billing without your explicit permission. Browse our flexible <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">no-contract plans</Link>.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-bg-secondary p-6 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-white mb-2">
                  24/7 Dedicated Human Support
                </h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  No automated chatbots or endless ticketing queues. Connect directly with experienced streaming specialists on <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">WhatsApp live support</Link> for instant setup assistance and troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Universal Device Support */}
          <div className="rounded-3xl bg-brand-bg-secondary p-8 sm:p-12 border border-white/10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-4">
              Universal IPTV Ecosystem Compatibility Across Every Screen
            </h2>
            <p className="text-sm sm:text-base text-brand-text-secondary leading-relaxed mb-6">
              A premium IPTV service should never lock you into a single proprietary TV box. We engineer our M3U playlists and Xtream Codes API endpoints to adhere strictly to open media streaming standards, ensuring flawless playback on industry-leading players including TiviMate, IPTV Smarters Pro, IBO Player, UHF, and VLC. Check our step-by-step <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV setup tutorials</Link> for detailed walkthroughs.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/devices"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all"
              >
                <span>Explore Compatible Devices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/setup"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-white transition-all"
              >
                <span>View Setup Center</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the IPTV Map Difference: Premium 4K IPTV Made Simple"
        subtitle={
          <>
            Join thousands of satisfied viewers enjoying buffer-free <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live television and sports</Link>. Choose your <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plan</Link> and start streaming in minutes.
          </>
        }
      />
    </>
  );
}
