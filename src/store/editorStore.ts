import { create } from 'zustand';
import { EditorState, LinkItem, PageSettings } from '../types/editor';

const defaultSettings: PageSettings = {
  title: 'My Links',
  theme: 'light',
  accentColor: '#6D28D9',
  bio: 'Welcome to my page!',
};

export const useEditorStore = create<EditorState>((set) => ({
  settings: defaultSettings,
  links: [],
  
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
    
  addLink: (link) =>
    set((state) => ({
      links: [...state.links, { ...link, id: crypto.randomUUID() }],
    })),
    
  updateLink: (id, updatedLink) =>
    set((state) => ({
      links: state.links.map((link) =>
        link.id === id ? { ...link, ...updatedLink } : link
      ),
    })),
    
  removeLink: (id) =>
    set((state) => ({
      links: state.links.filter((link) => link.id !== id),
    })),
    
  reorderLinks: (startIndex, endIndex) =>
    set((state) => {
      const newLinks = [...state.links];
      const [removed] = newLinks.splice(startIndex, 1);
      newLinks.splice(endIndex, 0, removed);
      return { links: newLinks };
    }),
}));