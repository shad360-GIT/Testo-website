export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  link: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  client: string;
  date: string;
  services: string[];
  results: string[];
  techStack: string[];
  challenge: string;
  solution: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface Benefit {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverables: string[];
}
