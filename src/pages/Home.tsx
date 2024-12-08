import React from 'react';
import { ArrowRight, Sparkles, BarChart3, Palette } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                One Link for All Your Content
              </h1>
              <p className="mt-6 text-lg leading-8 text-purple-100">
                Create a beautiful, customizable landing page for your Instagram bio.
                Share your content, products, and services all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-purple-100 p-3">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Custom Design</h3>
                <p className="mt-2 text-gray-600">
                  Customize colors, fonts, and layout to match your brand identity
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-purple-100 p-3">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Easy to Use</h3>
                <p className="mt-2 text-gray-600">
                  Drag-and-drop interface for quick and intuitive page building
                </p>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-purple-100 p-3">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Analytics</h3>
                <p className="mt-2 text-gray-600">
                  Track visits, clicks, and engagement with detailed analytics
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};