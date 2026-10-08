import PageHeader from '@/components/PageHeader';
import SetupGuideCards from '@/components/SetupGuideCards';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import { CheckCircle2, MessageCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'IPTV Map — IPTV Setup & Installation Hub | Step-by-Step Guides',
  description: 'Step-by-step installation guides for IPTV Map. Configure Amazon Firestick, Android TV, Apple TV, Smart TVs, and MAG boxes with ease in under 5 minutes.',
  alternates: {
    canonical: `${siteConfig.domain}/setup`,
  },
};

export default function SetupHubPage() {
  const breadcrumbs = [{ label: 'Setup Guide', href: '/setup' }];

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
        name: 'Setup Guide',
        item: `${siteConfig.domain}/setup`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        badge="IPTV MAP SETUP &amp; INSTALLATION HUB"
        title="Set Up Your IPTV Map Subscription in Under"
        titleAccent="5 Minutes"
        description="Select your streaming device below for our verified, step-by-step IPTV Map setup walkthroughs. From Amazon Firestick sideloading to Apple TV, Android TV, and Smart TV configuration, start streaming in under 5 minutes."
        breadcrumbs={breadcrumbs}
      />

      {/* Before You Start Checklist */}
      <section className="py-12 bg-brand-bg-secondary border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="rounded-2xl bg-brand-bg p-6 sm:p-8 border border-white/10">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-6">
              Before You Begin: 3 Easy Steps to Prepare Your IPTV Stream
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">Active IPTV Map Subscription</h3>
                  <p className="text-xs text-brand-text-secondary mt-1">
                    Choose your plan to receive your authorized login credentials and portal links.{' '}
                    <Link href="/pricing" className="text-brand-primary underline">
                      View subscription plans
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">Login Credentials &amp; M3U Playlist</h3>
                  <p className="text-xs text-brand-text-secondary mt-1">
                    Check your welcome email or WhatsApp delivery for your Xtream Codes API URL, username, and M3U playlist. Need help? Check our <Link href="/support" className="text-brand-primary underline">support desk</Link>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">High-Speed Broadband Internet</h3>
                  <p className="text-xs text-brand-text-secondary mt-1">
                    Ensure a stable connection of at least 15 Mbps for Full HD or 30+ Mbps for 4K UHD streaming (5GHz Wi-Fi or Ethernet recommended) to benefit from our <Link href="/features" className="text-brand-primary underline">Anti-Freeze engine</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Directory */}
      <section className="py-20 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black font-heading text-white mb-3">
              Select Your Device for Fast IPTV Map Setup
            </h2>
            <p className="text-sm text-brand-text-secondary">
              Click your streaming device below for verified instructions, player recommendations, and troubleshooting tips, or browse our full <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">supported devices list</Link>:
            </p>
          </div>

          <SetupGuideCards />
        </div>
      </section>

      {/* Direct WhatsApp Assistance Callout */}
      <section className="py-16 bg-brand-bg-secondary border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Need Real-Time IPTV Map Setup Help?
          </h2>
          <p className="text-sm text-brand-text-secondary max-w-xl mx-auto mb-6">
            Our technical <Link href="/support" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">support specialists</Link> are available 24/7 on WhatsApp to guide you through IPTV player configuration step-by-step. You can also review our <Link href="/faq" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">troubleshooting FAQ</Link>.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-emerald-500 text-brand-bg hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Setup FAQ */}
      <section className="py-20 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary font-heading">
              IPTV Setup Troubleshooting
            </span>
            <h2 className="text-3xl font-black font-heading text-white mt-1">
              Frequently Asked Questions About IPTV Installation &amp; Player Setup
            </h2>
          </div>
          <FAQAccordion initialCategory="Setup" limit={4} />
        </div>
      </section>

      <CTASection
        title="Ready to Stream 4K Live Television With IPTV Map?"
        subtitle={
          <>
            <Link href="/pricing" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">Choose your IPTV Map plan now</Link>, receive instant activation credentials, and enjoy buffer-free sports and 4K cinema across all your <Link href="/devices" className="text-white hover:text-brand-primary underline decoration-brand-primary/40 underline-offset-2 transition-colors">favorite devices</Link>.
          </>
        }
      />
    </>
  );
}
