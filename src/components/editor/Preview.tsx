import React from 'react';
import { useEditorStore } from '../../store/editorStore';
import { ExternalLink } from 'lucide-react';

export const Preview: React.FC = () => {
  const { settings, links } = useEditorStore();

  return (
    <div 
      className="w-full h-full overflow-y-auto rounded-lg p-6"
      style={{
        backgroundColor: settings.theme === 'dark' ? '#1F2937' : '#FFFFFF',
        color: settings.theme === 'dark' ? '#FFFFFF' : '#1F2937'
      }}
    >
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-8">
          {settings.avatar && (
            <img
              src={settings.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4"
              style={{ borderColor: settings.accentColor }}
            />
          )}
          <h1 className="text-2xl font-bold mb-2">{settings.title}</h1>
          <p className="text-sm opacity-80">{settings.bio}</p>
        </div>

        {/* Links Section */}
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div
                className="flex items-center p-4 rounded-lg transition-all duration-200"
                style={{
                  backgroundColor: settings.theme === 'dark' ? '#374151' : '#F3F4F6',
                  border: `2px solid ${settings.accentColor}`
                }}
              >
                {link.icon && (
                  <span className="mr-3">
                    {/* You can add icon rendering logic here */}
                  </span>
                )}
                <span className="flex-1">{link.title}</span>
                <ExternalLink 
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: settings.accentColor }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};