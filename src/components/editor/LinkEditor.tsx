import React from 'react';
import { useEditorStore } from '../../store/editorStore';
import { Link, Trash2, GripVertical } from 'lucide-react';
import { Button } from '../Button';

export const LinkEditor: React.FC = () => {
  const { links, addLink, updateLink, removeLink } = useEditorStore();

  const handleAddLink = () => {
    addLink({
      type: 'link',
      title: 'New Link',
      url: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Link className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold">Links</h2>
        </div>
        <Button onClick={handleAddLink} size="sm">
          Add Link
        </Button>
      </div>

      <div className="space-y-4">
        {links.map((link) => (
          <div
            key={link.id}
            className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg"
          >
            <button className="mt-2 cursor-move">
              <GripVertical className="w-5 h-5 text-gray-400" />
            </button>
            
            <div className="flex-1 space-y-3">
              <input
                type="text"
                value={link.title}
                onChange={(e) => updateLink(link.id, { title: e.target.value })}
                placeholder="Link Title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
              
              <input
                type="url"
                value={link.url}
                onChange={(e) => updateLink(link.id, { url: e.target.value })}
                placeholder="URL"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
            
            <button
              onClick={() => removeLink(link.id)}
              className="mt-2 text-gray-400 hover:text-red-500"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};