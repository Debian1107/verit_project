export const navLinks = [
  { href: "#pricing", label: "Pricing" },
  { href: "#features", label: "Features" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
]

export const heroData = {
  title: "High-Performance Cloud Hosting for Tax & Accounting Firms",
  subtitle: {
    text: "Experience unparalleled speed and reliability, starting at ",
    highlight: "$69/user/month",
    extra: ". Say goodbye to lag and downtime.",
  },
  benefits: [
    { icon: "cloud", text: "Lag-Free Dedicated Private Cloud" },
    { icon: "headset", text: "24/7 Expert IT Support" },
    { icon: "shield", text: "Optimized for Security & Peak Performance" },
    { icon: "chart", text: "Guaranteed 99.999% Uptime for Max Productivity" },
  ],
  previewCard: {
    planName: "VeritSpace Pro",
    badge: "Most Popular",
    price: 99,
    features: ["Blazing-Fast Performance Cloud", "15GB RAM & 100GB NVMe Storage", "6 Applications Included"],
  },
}

export const pricingPlans = [
  {
    name: "VeritSpace Core",
    description: "For firms needing secure, high-performance cloud hosting.",
    price: 69,
    features: [
      "High-Performance Private Cloud",
      "10GB RAM, 40GB NVMe Storage",
      "2 Applications Included",
      "60-Day Backup Retention",
      "24/7 Support",
    ],
    featured: false,
  },
  {
    name: "VeritSpace Pro",
    description: "For growing firms demanding superior speed and scalability.",
    price: 99,
    features: [
      "Blazing-Fast Performance Cloud",
      "Upgraded 15GB RAM, 100GB NVMe Storage",
      "6 Applications Included",
      "60-Day Backup Retention",
      "24/7 Support",
    ],
    featured: true,
  },
  {
    name: "VeritComplete",
    description: "All-in-one solution for firms wanting fully managed IT and peak performance.",
    price: 199,
    features: [
      "Fully Managed IT & Peak Performance Hosting",
      "Upgraded 15GB RAM, 100GB NVMe Storage",
      "Unlimited Applications Included",
      "Extended 90-Day Retention",
      "Fully Managed IT Support",
    ],
    featured: false,
  },
]

export const featuresData = [
  {
    name: "Cloud Hosting",
    core: "High-Performance Private Cloud",
    pro: "Blazing-Fast Performance",
    complete: "Fully Managed IT & Peak Performance",
  },
  { name: "Storage", core: "40GB NVMe", pro: "100GB NVMe", complete: "100GB NVMe" },
  { name: "RAM", core: "10GB", pro: "15GB", complete: "15GB" },
  { name: "Applications", core: "2 Included", pro: "6 Included", complete: "Unlimited Included" },
  { name: "Backup Retention", core: "60 Days", pro: "60 Days", complete: "90 Days (Extended)" },
  {
    name: "Support",
    core: "24/7 Support",
    pro: "24/7 Support",
    complete: "Fully Managed IT + 24/7 Support",
  },
  {
    name: "IT Management (VeritGuard)",
    core: "Add-on Available",
    pro: "Add-on Available",
    complete: "VeritGuard Elite (Comprehensive IT & Device Management)",
  },
]

export const whyChooseUsData = [
  {
    icon: "server",
    title: "Dedicated Private Cloud",
    description:
      "Experience zero lag and maximum speed with your own dedicated, high-performance infrastructure. No resource sharing.",
  },
  {
    icon: "shield",
    title: "Optimized Security",
    description:
      "Your data is protected with bank-level security, optimized for performance without compromising on compliance (FTC, SOC 2, IRS).",
  },
  {
    icon: "clock",
    title: "Maximum Uptime",
    description:
      "Our infrastructure is built for speed and reliability, ensuring you stay productive even during peak tax season.",
  },
  {
    icon: "scaling",
    title: "On-Demand Scalability",
    description: "Instantly scale RAM, storage, and applications. Your cloud grows at the speed of your firm.",
  },
]

export const testimonialsData = [
  {
    quote:
      "My company has used Verito for several years now. We have expanded to 3 locations, all of which we use Verito at. The ability to work from anywhere is priceless.",
    author: "Felecia Criss",
  },
  {
    quote:
      "As a one person tax practice I was looking for a dependable remote desktop - verito was referred on many tax professional forums. The price was right and I have been with them a few months now with zero issues.",
    author: "Nicole Westra",
  },
  {
    quote:
      "Superior customer service. Almost 0% downtime. Host tax software as well as virtual office. Great cloud company.",
    author: "Sheldon Brown",
  },
]

export const faqData = [
  {
    question: "How does VeritSpace ensure high performance?",
    answer:
      "We use enterprise-grade hardware, including NVMe storage and dedicated resources for each client. Our infrastructure is optimized to eliminate common cloud hosting bottlenecks, like Citrix lag, ensuring your applications run at peak speed.",
  },
  {
    question: "How secure is my data in VeritSpace's cloud?",
    answer:
      "At VeritSpace, we implement Fortune 500-level security that's optimized for performance. We are compliant with SOC 2/3 and Gramm-Leach-Bliley Act (GLBA), ensuring your data is protected without slowing you down.",
  },
  {
    question: "How often do you backup the data?",
    answer:
      "We perform nightly automated backups with up to 90-day retention depending on your plan. This robust backup strategy ensures your critical financial data is always protected and quickly accessible.",
  },
  {
    question: "Can I use VeritSpace on mobile devices?",
    answer:
      "Yes! We offer mobile apps for iPad, iPhone, Android devices, and Windows Mobile devices. Your high-performance office goes wherever you go with VeritSpace.",
  },
  {
    question: "Are long-term contracts required?",
    answer:
      "No, we don't require long-term contracts. We're confident in the quality of our service and believe in earning your business every month with flexible month-to-month billing.",
  },
]

export const addOnsData = [
  {
    id: "ram",
    title: "Additional RAM",
    price: "$20 per GB per month",
  },
  {
    id: "storage",
    title: "Additional Storage",
    price: "$10 per 10 GB per month",
  },
  {
    id: "apps",
    title: "Additional Applications",
    price: "$10 per application per month",
  },
]
