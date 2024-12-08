export interface LinkItem {
  id: string;
  type: 'link' | 'social' | 'product';
  title: string;
  url: string;
  icon?: string;
  description?: string;
  price?: string;
  image?: string;
}

export interface PageSettings {
  title: string;
  theme: 'light' | 'dark';
  accentColor: string;
  bio: string;
  avatar?: string;
}

export interface EditorState {
  settings: PageSettings;
  links: LinkItem[];
  updateSettings: (settings: Partial<PageSettings>) => void;
  addLink: (link: Omit<LinkItem, 'id'>) => void;
  updateLink: (id: string, link: Partial<LinkItem>) => void;
  removeLink: (id: string) => void;
  reorderLinks: (startIndex: number, endIndex: number) => void;
}