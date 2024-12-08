import React from 'react';
import { SettingsPanel } from '../components/editor/SettingsPanel';
import { LinkEditor } from '../components/editor/LinkEditor';
import { Preview } from '../components/editor/Preview';

export const Editor: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <SettingsPanel />
            <LinkEditor />
          </div>
          <div className="lg:sticky lg:top-8 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Preview</h2>
              <div className="aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                <Preview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};