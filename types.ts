import { LucideIcon } from 'lucide-react';

export interface Step {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: StepContentSection[];
}

export type ContentType = 
  | 'text' 
  | 'list' 
  | 'info-box' 
  | 'warning-box' 
  | 'image' 
  | 'ai-prompt' 
  | 'checklist'
  | 'link-card'
  | 'time-estimate'
  | 'chat-simulation'
  | 'kaggle-simulation'
  | 'excel-simulation'
  | 'proposal-template';

export interface StepContentSection {
  type: ContentType;
  title?: string;
  text?: string;
  items?: string[] | { label: string; checked: boolean }[];
  imageSrc?: string;
  imageCaption?: string;
  links?: { title: string; url: string; description: string }[];
  chatMessages?: { role: 'user' | 'ai'; text: string }[];
}