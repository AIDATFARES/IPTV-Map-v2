import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import ChannelsSection from '@/components/ChannelsSection';
import DevicesSection from '@/components/DevicesSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { 
  ShieldCheck, Zap, Tv, Clock, CheckCircle2, MessageCircle, 
  ArrowRight, Sparkles, Play, Award 
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { faqs } from '@/data/faq';

export const metadata = {
  title: 'IPTV Map — #1 Worldwide IPTV Service | 50,000+ 4K Channels & 200,000+ VOD',
  description: 'Stream live sports, international TV networks, and 200,000+ 4K movies without buffering. IPTV Map provides 50,000+ channels, instant activation, and 24/7 dedicated support.',
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function HomePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IPTV Map Premium Streaming Service',
    serviceType: 'IPTV Streaming',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    description: siteConfig.description,
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IPTV Map Subscription Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '1 Month Plan',
          price: '14.99',
          priceCurrency: 'USD',
          url: `${siteConfig.domain}/pricing`,
        },
        {
          '@type': 'Offer',
          name: '12 Months Plan',
          price: '69.99',
          priceCurrency: 'USD',
          url: `${siteConfig.domain}/pricing`,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 6).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip & Value Highlights */}
      <section className="py-10 bg-brand-bg-secondary border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">Anti-Freeze v2.0 IPTV</span>
              <span className="text-slate-300 font-medium text-xs">Zero-Buffering Stream Balancing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <Tv className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">4K &amp; Full HD IPTV</span>
              <span className="text-slate-300 font-medium text-xs">Native 60FPS Sports Feeds</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">Instant IPTV Activation</span>
              <span className="text-slate-300 font-medium text-xs">Xtream &amp; M3U in Under 5 Mins</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base font-heading">24/7 IPTV Support</span>
              <span className="text-slate-300 font-medium text-xs">Dedicated WhatsApp Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <PricingSection />

      {/* 4. How It Works (3 Simple Steps) */}
      <section className="py-20 md:py-24 bg-brand-bg relative overflow-hidden border-t border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              FAST 3-STEP ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              How to Start Streaming With IPTV Map in 3 Simple Steps
            </h2>
            <p className="text-brand-text-secondary text-base">
              Setting up your IPTV Map <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription</Link> is seamless. From picking your plan to watching crystal-clear <Link href="/channels" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">live IPTV channels</Link> and 4K sports, you will be streaming in under 5 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-black font-heading text-lg flex items-center justify-center mb-5">
                01
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Select Your IPTV Map Plan</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                Pick the ideal <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plan</Link> for your household with flexible durations, multi-device connections, transparent pricing, and zero long-term commitments.
              </p>
              <Link href="/pricing" className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1">
                <span>View IPTV Subscription Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-black font-heading text-lg flex items-center justify-center mb-5">
                02
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Receive Instant IPTV Credentials</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                Within minutes of confirming your order, receive your secure Xtream Codes API login and M3U playlist URL delivered directly via email and our <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">24/7 WhatsApp helpdesk</Link>.
              </p>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                <span>Instant WhatsApp Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-brand-bg-secondary p-8 border border-white/5 relative">
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary font-black font-heading text-lg flex items-center justify-center mb-5">
                03
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3">Connect Your Device &amp; Stream in 4K</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed mb-4">
                Follow our simple <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">device installation guides</Link> for Firestick, Smart TVs, Android, or Apple TV, enter your credentials, and enjoy uninterrupted live entertainment on your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported streaming screens</Link>.
              </p>
              <Link href="/setup" className="text-xs font-bold text-brand-primary hover:underline flex items-center gap-1">
                <span>Browse IPTV Setup Guides</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Entertainment & Channel Lineup Section */}
      <ChannelsSection />

      {/* 6. Features Section */}
      <FeaturesSection showComparison={false} />

      {/* 7. Supported Devices Section */}
      <DevicesSection showProtocolsAndHelp={false} />

      {/* 9. FAQ Section */}
      <section className="py-20 md:py-28 bg-brand-bg relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 mb-3 font-heading">
              IPTV Map Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white mb-4">
              Frequently Asked Questions About IPTV Map IPTV Service
            </h2>
            <p className="text-brand-text-secondary text-base">
              Find instant, authoritative answers about our <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV subscription plans</Link>, compatible <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">streaming devices</Link>, broadband speed requirements, and quick <Link href="/setup" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">IPTV installation steps</Link>.
            </p>
          </div>

          <FAQAccordion limit={6} />

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-primary hover:underline"
            >
              <span>Explore Complete IPTV Map FAQ Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final Call To Action */}
      <CTASection />
    </>
  );
}
