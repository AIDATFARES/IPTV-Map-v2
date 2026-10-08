import PageHeader from '@/components/PageHeader';
import PricingSection from '@/components/PricingSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { ArrowRight, Flame, Tv, Apple, Cpu, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { pricingPlans } from '@/data/pricing';

export const metadata = {
  title: 'IPTV Map — Premium IPTV Subscription Plans & Pricing | 4K UHD',
  description: 'Explore flexible IPTV Map subscription plans from 1 to 24 months. Enjoy 50,000+ 4K Ultra HD streams, 200,000+ VOD titles, Anti-Freeze v2.0, instant activation, and 24/7 WhatsApp support.',
  alternates: {
    canonical: `${siteConfig.domain}/pricing`,
  },
};

export default function PricingPage() {
  const breadcrumbs = [{ label: 'Pricing', href: '/pricing' }];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IPTV Map Premium IPTV Subscription',
    description: 'High-speed buffer-free IPTV subscription with 4K streams, anti-freeze technology, and multi-device compatibility.',
    image: [
      {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/images/iptvmap-hero-home-streaming.jpg`,
        name: 'IPTV Map 4K Streaming Subscription Experience',
        caption: 'IPTV Map living room 4K Ultra HD streaming subscription with Anti-Freeze technology'
      },
      {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/images/iptvmap-hero-tv-entertainment.jpg`,
        name: 'IPTV Map 4K Smart TV Action Cinema',
        caption: 'IPTV Map 4K UHD live television and action movies on smart TV'
      },
      {
        '@type': 'ImageObject',
        url: `${siteConfig.domain}/images/iptvmap-sports-premier-league.jpg`,
        name: 'IPTV Map Premier League 4K 60FPS Sports Feed',
        caption: 'IPTV Map ultra-smooth 60FPS live sports streaming'
      }
    ],
    sku: 'IPTVMAP-SUB',
    mpn: 'IPTVMAP-SUB-4K',
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1240',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: Math.min(...pricingPlans.map((p) => p.price)).toFixed(2),
      highPrice: Math.max(...pricingPlans.map((p) => p.price)).toFixed(2),
      priceCurrency: 'USD',
      offerCount: pricingPlans.length,
      priceValidUntil: '2027-12-31',
      offers: pricingPlans.map((p) => ({
        '@type': 'Offer',
        name: `${p.name} Plan`,
        price: p.price.toFixed(2),
        priceCurrency: 'USD',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        url: `${siteConfig.domain}/pricing`,
      })),
    },
  };

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
        name: 'Pricing',
        item: `${siteConfig.domain}/pricing`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="IPTV MAP SUBSCRIPTION TIERS"
        title="Flexible IPTV Map Subscription Plans for"
        titleAccent="4K Live Streaming"
        description="Choose the ideal IPTV Map subscription plan for your home. Every package includes over 50,000 live IPTV channels, 60FPS sports, 200,000+ VOD movies, interactive EPG schedules, Anti-Freeze v2.0 technology, and 24/7 dedicated WhatsApp customer care."
        breadcrumbs={breadcrumbs}
      />

      <PricingSection hideHeader={true} />

      {/* Reseller Callout Banner */}
      <section className="py-8 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-bg-secondary border border-brand-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary font-heading block mb-1">
                Wholesale Opportunity
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                Launch Your Own IPTV Business with IPTV Map Reseller Credits
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-secondary mt-1 max-w-xl">
                Access our enterprise Xtream Codes reseller panel with credit packages from $399 (120 to 600 credits), sub-reseller issuance privileges, free trial creation, and credits that never expire.
              </p>
            </div>
            <Link
              href="/reseller"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-brand-primary text-brand-bg hover:shadow-glow-primary transition-all shrink-0"
            >
              <span>Explore Reseller Panel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Setup Shortcuts Section */}
      <section className="py-16 bg-brand-bg-secondary border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white mb-3">
            Ready to Install IPTV Map on Your Streaming Device?
          </h2>
          <p className="text-sm text-brand-text-secondary max-w-2xl mx-auto mb-8">
            As soon as you confirm your IPTV Map subscription, follow our step-by-step <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">device setup guides</Link> to start watching within 5 minutes across all <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported devices</Link>:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Link
              href="/setup/firestick"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-bg border border-white/10 hover:border-brand-primary text-xs sm:text-sm font-semibold text-white transition-colors"
            >
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Firestick IPTV Setup</span>
            </Link>
            <Link
              href="/setup/android-tv"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-bg border border-white/10 hover:border-brand-primary text-xs sm:text-sm font-semibold text-white transition-colors"
            >
              <Tv className="w-4 h-4 text-green-400" />
              <span>Android TV IPTV Guide</span>
            </Link>
            <Link
              href="/setup/apple-tv"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-bg border border-white/10 hover:border-brand-primary text-xs sm:text-sm font-semibold text-white transition-colors"
            >
              <Apple className="w-4 h-4 text-white" />
              <span>Apple TV &amp; iOS Guide</span>
            </Link>
            <Link
              href="/setup/mag"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-bg border border-white/10 hover:border-brand-primary text-xs sm:text-sm font-semibold text-white transition-colors"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>MAG Box IPTV Setup</span>
            </Link>
          </div>

          <Link
            href="/setup"
            className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1"
          >
            <span>Browse All IPTV Map Device Setup Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
              IPTV Billing &amp; Subscription Details
            </span>
            <h2 className="text-3xl font-black font-heading text-white mt-1">
              Frequently Asked Questions About IPTV Map Pricing &amp; Billing
            </h2>
          </div>
          <FAQAccordion initialCategory="Subscription" limit={4} />
        </div>
      </section>

      <CTASection
        title="Start Streaming With IPTV Map Today"
        subtitle={
          <>
            Need assistance selecting the right <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV plan</Link> or <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">device configuration</Link>? Our <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support specialists</Link> are available 24/7 on WhatsApp.
          </>
        }
      />
    </>
  );
}
