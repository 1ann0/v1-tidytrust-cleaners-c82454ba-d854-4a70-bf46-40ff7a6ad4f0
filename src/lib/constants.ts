import {
  ShieldCheck,
  ThumbsUp,
  Star,
  Home,
  Building,
  Sparkles,
  Wind,
  Briefcase,
  CheckCircle,
  LucideIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#login", label: "Login" },
];
export const TRUST_SIGNALS = [
  {
    icon: ShieldCheck,
    text: "Vetted & Trained Cleaners",
  },
  {
    icon: ThumbsUp,
    text: "100% Satisfaction Guarantee",
  },
  {
    icon: Star,
    text: "5-Star Rated Service",
  },
];
export const SERVICES = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Complete cleaning for your home, tailored to your needs.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "An intensive, detailed clean that leaves your home spotless.",
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description: "Professional and reliable cleaning for your workspace.",
  },
  {
    icon: Wind,
    title: "Move-In/Out Cleaning",
    description: "A thorough clean to prepare for moving in or out.",
  },
  {
    icon: Briefcase,
    title: "Post-Construction",
    description: "Cleaning up dust and debris after renovations.",
  },
  {
    icon: CheckCircle,
    title: "Eco-Friendly Cleaning",
    description: "Using green products for a safe and healthy environment.",
  },
];
export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Book Your Clean",
    description: "Select your service and schedule a date and time that works for you using our simple online form.",
  },
  {
    step: 2,
    title: "We Make It Sparkle",
    description: "Our team of vetted, professional cleaners arrives on time with all the necessary supplies to make your space shine.",
  },
  {
    step: 3,
    title: "Relax and Enjoy",
    description: "Come back to a spotless home or office. Enjoy your sparkling clean space and the free time you've gained.",
  },
];
export const TESTIMONIALS = [
  {
    quote:
      "TidyTrust is a game-changer. I came home to a spotless apartment, and the attention to detail was incredible. I highly recommend their services to anyone in Nairobi!",
    name: "Jane D.",
    location: "Westlands",
    rating: 5,
  },
  {
    quote:
      "The booking process was so easy, and the cleaning team was professional and efficient. Our office has never looked better. We've signed up for a monthly service.",
    name: "David K.",
    location: "Kilimani",
    rating: 5,
  },
  {
    quote:
      "I was hesitant to hire a cleaning service, but TidyTrust exceeded all my expectations. They were thorough, respectful of my space, and the results were amazing.",
    name: "Amina H.",
    location: "Lavington",
    rating: 5,
  },
   {
    quote:
      "Absolutely fantastic service! The deep clean was worth every shilling. My house feels brand new. The team was friendly and worked diligently.",
    name: "Michael O.",
    location: "Karen",
    rating: 5,
  },
];
export const FAQS = [
  {
    question: "Do I need to be home for the cleaning?",
    answer:
      "No, you don't need to be home. Many of our clients provide a key or a code for entry. Our team is fully vetted and trustworthy. We'll securely lock up when we're done.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use high-quality, professional-grade cleaning products. We also offer an eco-friendly cleaning option with green, non-toxic products upon request for the safety of your family and pets.",
  },
  {
    question: "Is your service guaranteed?",
    answer:
      "Absolutely. We have a 100% satisfaction guarantee. If you're not completely satisfied with our service, please let us know within 24 hours, and we will re-clean the area free of charge.",
  },
  {
    question: "How do I pay for the service?",
    answer:
      "We accept various payment methods, including M-Pesa, credit/debit cards, and bank transfers. Payment is typically processed after the cleaning service is completed.",
  },
  {
    question: "Can I customize my cleaning service?",
    answer:
      "Yes! We are happy to tailor the cleaning to your specific needs. You can add notes and special requests during the booking process or by contacting our customer support.",
  },
];
export const FOOTER_LINKS = {
  company: [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Press" },
  ],
  services: [
    { href: "#services", label: "Residential Cleaning" },
    { href: "#services", label: "Office Cleaning" },
    { href: "#services", label: "Deep Cleaning" },
  ],
  support: [
    { href: "#faq", label: "FAQ" },
    { href: "#", label: "Contact Us" },
    { href: "#", label: "Terms of Service" },
  ],
};
export const SOCIAL_LINKS: { href: string; icon: LucideIcon }[] = [
  { href: "#", icon: Facebook },
  { href: "#", icon: Twitter },
  { href: "#", icon: Instagram },
  { href: "#", icon: Linkedin },
];