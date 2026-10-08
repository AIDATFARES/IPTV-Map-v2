export const retailSubscriptionPlans = [
  {
    id: '1-month',
    name: '1 Month',
    badge: null,
    duration: '1 Month Access',
    price: 14.99,
    period: '/month',
    monthlyEquivalent: '$14.99/mo',
    billingNote: 'Billed once for 1 month',
    description: 'Ideal for experiencing IPTV Map premium 4K streaming infrastructure with full access to 50,000+ live channels, 200,000+ VOD titles, and zero long-term commitment.',
    popular: false,
    savingsText: null,
    features: [
      '50,000+ Live TV & international entertainment channels',
      'Ultra HD 4K & Full HD 60FPS streaming quality',
      '99.9% Uptime with Anti-Freeze v2.0 technology',
      'Interactive 7-day Electronic Program Guide (EPG)',
      'Instant IPTV activation with Xtream Codes & M3U',
      'Universal compatibility (Firestick, Smart TV, Android, Apple & PC)',
      '24/7 WhatsApp customer care & setup guidance'
    ],
    ctaText: 'Get 1 Month Plan',
    whatsappMessage: 'Hello IPTV Map support, I want to subscribe to the 1 Month Plan ($14.99).'
  },
  {
    id: '3-months',
    name: '3 Months',
    badge: 'SAVE 22%',
    duration: '3 Months Access',
    price: 35.00,
    period: '/quarter',
    monthlyEquivalent: '$11.67/mo',
    billingNote: 'Billed once every 3 months',
    description: 'The smart quarterly IPTV plan for championship sports, major PPV tournaments, and family entertainment with substantial savings.',
    popular: false,
    savingsText: 'Save 22% vs monthly',
    features: [
      '50,000+ Live TV & international entertainment channels',
      'Ultra HD 4K & Full HD 60FPS streaming quality',
      '99.9% Uptime with Anti-Freeze v2.0 technology',
      'Interactive 7-day Electronic Program Guide (EPG)',
      'Instant IPTV activation with Xtream Codes & M3U',
      'Universal compatibility (Firestick, Smart TV, Android, Apple & PC)',
      '24/7 WhatsApp customer care & setup guidance'
    ],
    ctaText: 'Get 3 Months Plan',
    whatsappMessage: 'Hello IPTV Map support, I want to subscribe to the 3 Months Plan ($35.00).'
  },
  {
    id: '6-months',
    name: '6 Months',
    badge: 'SAVE 44%',
    duration: '6 Months Access',
    price: 49.99,
    period: '/6-months',
    monthlyEquivalent: '$8.33/mo',
    billingNote: 'Billed once every 6 months',
    description: 'Six months of buffer-free 4K live television, worldwide sports leagues in 60FPS, and 200,000+ on-demand movies at an exceptional monthly rate.',
    popular: false,
    savingsText: 'Save 44% vs monthly',
    features: [
      '50,000+ Live TV & international entertainment channels',
      'Ultra HD 4K & Full HD 60FPS streaming quality',
      '99.9% Uptime with Anti-Freeze v2.0 technology',
      'Interactive 7-day Electronic Program Guide (EPG)',
      'Instant IPTV activation with Xtream Codes & M3U',
      'Universal compatibility (Firestick, Smart TV, Android, Apple & PC)',
      'Priority server routing & 24/7 WhatsApp support'
    ],
    ctaText: 'Get 6 Months Plan',
    whatsappMessage: 'Hello IPTV Map support, I want to subscribe to the 6 Months Plan ($49.99).'
  },
  {
    id: '1-year',
    name: '12 Months',
    badge: 'Most Popular',
    duration: '1 Year Access',
    price: 69.99,
    period: '/year',
    monthlyEquivalent: '$5.83/mo',
    billingNote: 'Billed once annually',
    description: 'Our flagship IPTV subscription package. Maximum server stability, priority CDN bandwidth allocation, and our most popular annual value.',
    popular: true,
    savingsText: 'Save 61% vs monthly',
    features: [
      '50,000+ Live TV & international entertainment channels',
      'Ultra HD 4K & Full HD 60FPS streaming quality',
      'High-speed dedicated streaming CDN bandwidth',
      'Real-time Electronic Program Guide (EPG) with automatic refresh',
      'Instant VIP account provisioning (Xtream Codes API & M3U URL)',
      'Universal multi-device flexibility (Smart TV, Firestick, iOS, Android, PC)',
      'Priority 24/7 dedicated WhatsApp support desk'
    ],
    ctaText: 'Get 1 Year Plan',
    whatsappMessage: 'Hello IPTV Map support, I want to subscribe to the 12 Months (1 Year) Plan ($69.99).'
  },
  {
    id: '2-years',
    name: '24 Months',
    badge: 'Best Value',
    duration: '2 Years Access',
    price: 119.99,
    period: '/2-years',
    monthlyEquivalent: '$5.00/mo',
    billingNote: 'Billed once every 2 years',
    description: 'The ultimate cord-cutting package with our lowest monthly equivalent rate, VIP priority server routing, and complete long-term peace of mind.',
    popular: false,
    savingsText: 'Save 67% vs monthly',
    features: [
      '50,000+ Live TV & international entertainment channels',
      'Ultra HD 4K & Full HD 60FPS streaming quality',
      'VIP low-latency CDN server pool with maximum stability',
      'Comprehensive real-time EPG TV guide',
      'Instant VIP account provisioning (Xtream Codes API & M3U URL)',
      'Universal multi-device compatibility guarantee',
      'Free server updates & playlist migrations',
      'Dedicated VIP WhatsApp agent on standby 24/7'
    ],
    ctaText: 'Get 2 Years Plan',
    whatsappMessage: 'Hello IPTV Map support, I want to subscribe to the 24 Months (2 Years) Plan ($119.99).'
  }
];

// Main consumer pricing plans
export const pricingPlans = retailSubscriptionPlans;

// Dedicated packages for sellers (resellers)
export const resellerCreditPackages = [
  {
    id: '120-credits',
    name: '120 CREDITS',
    credits: 120,
    badge: null,
    duration: '120 Reseller Credits',
    price: 399,
    pricePerCredit: '$3.33 per credit',
    period: 'total',
    billingNote: 'One-time investment • No expiration',
    description: 'Entry-level reseller panel package. Ideal for testing customer demand and launching your IPTV business.',
    popular: false,
    savingsText: '$3.33 / credit',
    features: [
      '120 Total Credits (1 credit = 1 month line)',
      'Official Xtream Codes & M3U panel access',
      'Free trial creation directly in panel',
      'Anti-Freeze v2.0 high-speed 4K/FHD streams',
      '50,000+ Channels & 200,000+ VODs',
      'Credits never expire (no monthly fees)',
      'Sub-reseller account management',
      '24/7 dedicated VIP WhatsApp support desk'
    ],
    ctaText: 'Order 120 Credits',
    whatsappMessage: 'Hello IPTV Map support, I want to order the 120 Credits Reseller Panel ($399).'
  },
  {
    id: '240-credits',
    name: '240 CREDITS',
    credits: 240,
    badge: 'Most Popular',
    duration: '240 Reseller Credits',
    price: 799,
    pricePerCredit: '$3.33 per credit',
    period: 'total',
    billingNote: 'One-time investment • No expiration',
    description: 'Our most popular reseller tier for growing providers. Maximum flexibility and rapid client deployment.',
    popular: true,
    savingsText: '$3.33 / credit',
    features: [
      '240 Total Credits (1 credit = 1 month line)',
      'Official Xtream Codes & M3U panel access',
      'Free trial creation directly in panel',
      'Anti-Freeze v2.0 high-speed 4K/FHD streams',
      '50,000+ Channels & 200,000+ VODs',
      'Credits never expire (no monthly fees)',
      'Sub-reseller account management',
      '24/7 dedicated VIP WhatsApp support desk'
    ],
    ctaText: 'Order 240 Credits',
    whatsappMessage: 'Hello IPTV Map support, I want to order the 240 Credits Reseller Panel ($799).'
  },
  {
    id: '360-credits',
    name: '360 CREDITS',
    credits: 360,
    badge: 'Best Value',
    duration: '360 Reseller Credits',
    price: 1199,
    pricePerCredit: '$3.33 per credit',
    period: 'total',
    billingNote: 'One-time investment • No expiration',
    description: 'Best value for high-volume distributors. Optimal profit margin and expanded customer base capacity.',
    popular: false,
    savingsText: 'Best Value',
    features: [
      '360 Total Credits (1 credit = 1 month line)',
      'Official Xtream Codes & M3U panel access',
      'Free trial creation directly in panel',
      'Anti-Freeze v2.0 high-speed 4K/FHD streams',
      '50,000+ Channels & 200,000+ VODs',
      'Credits never expire (no monthly fees)',
      'Sub-reseller account management',
      '24/7 dedicated VIP WhatsApp support desk'
    ],
    ctaText: 'Order 360 Credits',
    whatsappMessage: 'Hello IPTV Map support, I want to order the 360 Credits Reseller Panel ($1199).'
  },
  {
    id: '480-credits',
    name: '480 CREDITS',
    credits: 480,
    badge: null,
    duration: '480 Reseller Credits',
    price: 1599,
    pricePerCredit: '$3.33 per credit',
    period: 'total',
    billingNote: 'One-time investment • No expiration',
    description: 'High-capacity infrastructure package designed for established operations with large active subscriber bases.',
    popular: false,
    savingsText: '$3.33 / credit',
    features: [
      '480 Total Credits (1 credit = 1 month line)',
      'Official Xtream Codes & M3U panel access',
      'Free trial creation directly in panel',
      'Anti-Freeze v2.0 high-speed 4K/FHD streams',
      '50,000+ Channels & 200,000+ VODs',
      'Credits never expire (no monthly fees)',
      'Sub-reseller account management',
      '24/7 dedicated VIP WhatsApp support desk'
    ],
    ctaText: 'Order 480 Credits',
    whatsappMessage: 'Hello IPTV Map support, I want to order the 480 Credits Reseller Panel ($1599).'
  },
  {
    id: '600-credits',
    name: '600 CREDITS',
    credits: 600,
    badge: null,
    duration: '600 Reseller Credits',
    price: 1999,
    pricePerCredit: '$3.33 per credit',
    period: 'total',
    billingNote: 'One-time investment • No expiration',
    description: 'Enterprise tier with wholesale volume. Unrestricted sub-reseller issuance and top-priority server routing.',
    popular: false,
    savingsText: '$3.33 / credit',
    features: [
      '600 Total Credits (1 credit = 1 month line)',
      'Official Xtream Codes & M3U panel access',
      'Free trial creation directly in panel',
      'Anti-Freeze v2.0 high-speed 4K/FHD streams',
      '50,000+ Channels & 200,000+ VODs',
      'Credits never expire (no monthly fees)',
      'Sub-reseller account management',
      '24/7 dedicated VIP WhatsApp support desk'
    ],
    ctaText: 'Order 600 Credits',
    whatsappMessage: 'Hello IPTV Map support, I want to order the 600 Credits Reseller Panel ($1999).'
  }
];

export const resellerFaq = [
  {
    question: 'How do IPTV reseller credits work?',
    answer: 'Each credit equals 1 month of full IPTV subscription for 1 client line. For example, creating a 12-month subscription for a client consumes 12 credits. You have complete freedom to set your own retail prices to your clients.'
  },
  {
    question: 'Do reseller credits ever expire?',
    answer: 'No. Your credits have zero expiration date. Any credits you purchase remain in your management panel until you actively assign them to active client subscriptions.'
  },
  {
    question: 'Can I generate free trial lines for potential clients?',
    answer: 'Yes! Your management panel allows you to generate free 24-hour test lines directly without deducting credits from your balance, making customer conversion fast and effortless.'
  },
  {
    question: 'Can I create sub-resellers under my panel?',
    answer: 'Yes. All IPTV Map reseller panel packages include full sub-reseller creation privileges. You can transfer credits from your balance to your sub-resellers at your own custom wholesale rates.'
  },
  {
    question: 'What management panel is provided?',
    answer: 'You receive access to an industry-standard, high-speed Xtream Codes web management dashboard. It includes real-time user monitoring, expiration reminders, playlist generation (M3U & MAG Portal), and comprehensive bouquet editing.'
  }
];

export const connectionOptions = [
  { connections: 1, label: '1 Device', multiplier: 1 },
  { connections: 2, label: '2 Devices', multiplier: 2 },
  { connections: 3, label: '3 Devices', multiplier: 3 }
];

export const pricingGuarantees = [
  {
    title: 'Instant IPTV Activation',
    description: 'Receive your official IPTV Map Xtream Codes credentials and M3U playlist link within minutes of order confirmation.'
  },
  {
    title: 'Transparent Cord-Cutting',
    description: 'Zero hidden contracts, no forced recurring debits, and zero setup fees. You remain in complete control of your subscription.'
  },
  {
    title: 'Anti-Freeze v2.0 Stability',
    description: 'Engineered with intelligent stream load balancing and backed by dedicated 24/7 WhatsApp technical specialists.'
  },
  {
    title: 'Universal Multi-Device Freedom',
    description: 'Stream seamlessly across Amazon Firestick, Smart TVs (Samsung & LG), Android, Apple TV, iOS, and PC.'
  }
];
