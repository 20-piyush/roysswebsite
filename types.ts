
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type Page = 'home' | 'services' | 'contact';

export interface AIResponse {
  features: string[];
  techStack: string[];
  summary: string;
}
