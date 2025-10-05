export interface Project {
  id: number;
  title: string;
  category: 'Web App' | 'SaaS' | 'Mobile' | 'E-commerce';
  summary: string;
  imageUrl: string;
  tags: string[];
  metric: string;
  liveUrl?: string;
  repoUrl?: string;
  problem: string;
  solution: string;
  role: string;
  process: string[];
  deliverables: string[];
  galleryImages: string[];
}
