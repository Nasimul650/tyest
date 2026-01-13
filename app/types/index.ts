export interface NavigationItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  buttonText: string;
  buttonVariant: "solid" | "outline" | "primary" | "secondary";
  price: number;
  period?: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  cta?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  tags?: string[];
  image?: string;
  technologies?: string[];
  link?: string;
  url?: string;
  category?: string;
}
