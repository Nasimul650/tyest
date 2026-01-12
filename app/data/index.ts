import {
  Feature,
  ProcessStep,
  PricingPlan,
  Testimonial,
  FAQ,
  NavigationItem,
  Project,
} from '@/types';

export const navigationItems: NavigationItem[] = [
  { label: 'Our Services', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Case Studies', href: '#testimonials' },
];

export const features: Feature[] = [
  {
    id: '1',
    title: 'Lightning Fast',
    description:
      'Built for speed and performance with modern technologies that deliver exceptional user experiences.',
    icon: 'Zap',
    color: 'text-accent-primary',
  },
  {
    id: '2',
    title: 'Secure & Reliable',
    description:
      'Enterprise-grade security with 99.9% uptime guarantee. Your data is always safe and accessible.',
    icon: 'Shield',
    color: 'text-green-500',
  },
  {
    id: '3',
    title: 'Easy Integration',
    description:
      'Seamlessly integrate with your existing tools and workflows. Get started in minutes, not hours.',
    icon: 'Puzzle',
    color: 'text-blue-500',
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    description:
      'Comprehensive analytics and insights to help you make data-driven decisions for your business.',
    icon: 'BarChart3',
    color: 'text-purple-500',
  },
  {
    id: '5',
    title: '24/7 Support',
    description:
      "Round-the-clock customer support from our expert team. We're here whenever you need us.",
    icon: 'Headphones',
    color: 'text-pink-500',
  },
  {
    id: '6',
    title: 'Scalable Solution',
    description:
      'Grows with your business. From startup to enterprise, our platform scales to meet your needs.',
    icon: 'TrendingUp',
    color: 'text-orange-500',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Sign Up',
    description:
      'Create your account in seconds with our streamlined onboarding process.',
    icon: 'UserPlus',
  },
  {
    id: '2',
    step: 2,
    title: 'Configure',
    description:
      'Set up your preferences and customize the platform to fit your workflow.',
    icon: 'Settings',
  },
  {
    id: '3',
    step: 3,
    title: 'Launch',
    description:
      'Go live with your new setup and start seeing results immediately.',
    icon: 'Rocket',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for individuals and small teams getting started.',
    features: [
      'Up to 5 team members',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Core features',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 79,
    period: 'month',
    description: 'Ideal for growing businesses that need more power.',
    features: [
      'Up to 25 team members',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'All features',
      'API access',
    ],
    popular: true,
    buttonText: 'Start Free Trial',
    buttonVariant: 'primary',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For large organizations with advanced requirements.',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'All features',
      'Custom integrations',
      'Dedicated account manager',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'secondary',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content:
      'This platform has revolutionized how we manage our projects. The intuitive interface and powerful features have increased our productivity by 40%.',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Labs',
    content:
      'The analytics dashboard provides incredible insights into our workflow. We can now make data-driven decisions that have improved our efficiency significantly.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Operations Director',
    company: 'Global Solutions',
    content:
      'The customer support is outstanding. Whenever we have questions, the team responds quickly with helpful solutions. Highly recommended!',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Simply sign up for an account, choose your plan, and follow our guided onboarding process. You can be up and running in minutes.',
  },
  {
    id: '2',
    question: 'Can I change my plan later?',
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
  },
  {
    id: '3',
    question: 'Is there a free trial?',
    answer:
      'We offer a 14-day free trial for our Professional plan. No credit card required. You can explore all features and see how our platform fits your needs.',
  },
  {
    id: '4',
    question: 'What kind of support do you offer?',
    answer:
      'We provide email support for all plans, priority support for Professional users, and 24/7 phone support for Enterprise customers. Our team is always ready to help.',
  },
  {
    id: '5',
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use enterprise-grade security measures including SSL encryption, regular backups, and compliance with industry standards to keep your data safe.',
  },
  {
    id: '6',
    question: 'Can I integrate with other tools?',
    answer:
      'Yes, we offer integrations with popular tools like Slack, Google Workspace, Microsoft Teams, and many others. Enterprise plans include custom integration options.',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'ShowPixels',
    subtitle: 'Creative Studio Website',
    description:
      'High-impact marketing site with cinematic hover, layered glows, and modular sections.',
    image: '/assets/logo2.svg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: 'proj-2',
    title: 'MailPro',
    subtitle: 'Email SaaS Landing',
    description:
      'Conversion-focused SaaS landing with feature grid, testimonials, and pricing.',
    image: '/assets/logo1.svg',
    tags: ['React', 'SEO', 'Responsive'],
    url: '#',
  },
  {
    id: 'proj-3',
    title: 'Yeary',
    subtitle: 'Web3 Platform Site',
    description:
      'Dark, futuristic aesthetic with 3D-inspired hero and subtle depth effects.',
    image: '/assets/logo5.svg',
    tags: ['Design System', 'Accessibility'],
    url: '#',
  },
];
