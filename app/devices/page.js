import PageHeader from '@/components/PageHeader';
import DevicesSection from '@/components/DevicesSection';
import SetupGuideCards from '@/components/SetupGuideCards';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'IPTV Map — Supported Devices | Firestick, Smart TVs, iOS & PC',
  description: 'Stream IPTV Map on Amazon Firestick, Android TV, Apple TV, Samsung & LG Smart TVs, PC, and MAG boxes. Easy 5-minute setup on any screen in your home.',
  alternates: {
    canonical: `${siteConfig.domain}/devices`,
  },
};

export default function DevicesPage() {
  const breadcrumbs = [{ label: 'Devices', href: '/devices' }];

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
        name: 'Devices',
        item: `${siteConfig.domain}/devices`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="IPTV MAP DEVICE COMPATIBILITY"
        title="Stream IPTV Map on Every Screen in"
        titleAccent="Your Home"
        description="Whether you are streaming live sports on your living room 4K Smart TV or catching up on cinema from a tablet or smartphone, IPTV Map delivers native, buffer-free playback across all major streaming devices with zero hardware locks."
        breadcrumbs={breadcrumbs}
      />

      <DevicesSection hideHeader={true} />

      {/* Direct Setup Guides Section */}
      <section className="py-20 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
              VERIFIED STEP-BY-STEP GUIDES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white mt-1 mb-3">
              Ready to Install IPTV Map on Your Streaming Device?
            </h2>
            <p className="text-sm text-brand-text-secondary">
              Follow our tested <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV setup guides</Link> with verified player recommendations for Firestick, Android TV, Apple TV, Smart TVs, and PC, or choose your <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plan</Link> to receive your login credentials in minutes:
            </p>
          </div>

          <SetupGuideCards />
        </div>
      </section>

      <CTASection
        title="Start Streaming With IPTV Map Today"
        subtitle={
          <>
            <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Subscribe in seconds</Link>, receive your credentials immediately, and follow our easy visual <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">setup guides</Link> to watch on your favorite screen.
          </>
        }
      />
    </>
  );
}
