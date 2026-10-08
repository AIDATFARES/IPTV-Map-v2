import PageHeader from '@/components/PageHeader';
import ChannelsSection from '@/components/ChannelsSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { Trophy, Film, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'IPTV Map — 50,000+ Live Channels & 200,000+ 4K VOD Lineup | Global TV & Sports',
  description: 'Browse the complete IPTV Map channel list. Watch over 50,000 live global channels, sports, USA, UK, Canada, Europe & international feeds, plus 200,000+ 4K VOD titles with dynamic EPG.',
  alternates: {
    canonical: `${siteConfig.domain}/channels`,
  },
};

export default function ChannelsPage() {
  const breadcrumbs = [{ label: 'Channels', href: '/channels' }];

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
        name: 'Channels',
        item: `${siteConfig.domain}/channels`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="IPTV MAP CHANNEL DIRECTORY"
        title="50,000+ Live IPTV Channels &amp; 200,000+ VOD Movies with"
        titleAccent="IPTV Map"
        description="Experience premier international sports in 60FPS, major national networks from the US, UK, Canada, and Europe, plus over 200,000 4K on-demand movies and series. Full interactive 7-day EPG included with every IPTV Map subscription."
        breadcrumbs={breadcrumbs}
      />

      <ChannelsSection hideHeader={true} />

      {/* Content Quality Guarantees */}
      <section className="py-16 bg-brand-bg-secondary border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-bg border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Native 60FPS Live Sports IPTV Broadcasts</h4>
                <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                  Experience high refresh-rate stadium feeds for football, motorsports, basketball, and combat championships with zero stutter on your <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plan</Link>.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Multi-Language Audio &amp; Subtitles</h4>
                <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                  Switch commentary languages and toggle subtitle tracks seamlessly on supported live sports feeds and <Link href="/features" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">4K VOD movie titles</Link>.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-bg border border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white font-heading">Interactive 7-Day IPTV EPG TV Guide</h4>
                <p className="text-xs text-brand-text-muted mt-1 leading-relaxed">
                  Stay ahead of kickoff times with live broadcast schedules updated automatically every 24 hours via Xtream Codes API. Follow our <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">device setup guides</Link> to calibrate your EPG.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Full Access to the IPTV Map Channel Lineup"
        subtitle={
          <>
            Select your preferred <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">subscription duration</Link> and start enjoying high-definition live channels and 4K cinema across all your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">connected devices</Link>.
          </>
        }
      />
    </>
  );
}
