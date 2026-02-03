'use client';

import { useState, useEffect } from 'react';
import { Copy, Heart, RotateCw, Sparkles, Users } from 'lucide-react';
import { generateTeamNames } from '@/utils/generator';
import { CATEGORIES, CategoryKey } from '@/data/nameData';

export default function TeamNameGeneratorPage() {
  const [category, setCategory] = useState<CategoryKey>('cool');
  const [keyword, setKeyword] = useState('');
  const [count, setCount] = useState(12);
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('teamNameFavorites');
    if (saved) {
      try {
        setFavorites(new Set(JSON.parse(saved)));
      } catch (e) {
        console.error('Failed to load favorites', e);
      }
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    if (favorites.size > 0) {
      localStorage.setItem(
        'teamNameFavorites',
        JSON.stringify(Array.from(favorites))
      );
    }
  }, [favorites]);

  const handleGenerate = () => {
    const names = generateTeamNames(category, count, keyword);
    setGeneratedNames(names);
  };

  const handleCopy = (name: string, index: number) => {
    navigator.clipboard.writeText(name);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleFavorite = (name: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(name)) {
        newFavorites.delete(name);
      } else {
        newFavorites.add(name);
      }
      return newFavorites;
    });
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  // Generate initial names on mount
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Team Name Generator
          </h1>
          <p className="text-gray-600">
            Generate creative team names instantly
          </p>
        </div>

        {/* Generator Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Controls */}
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Category Select */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        category === cat.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white border border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      {cat.emoji} {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Keyword Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keyword (Optional)
                </label>
                <input
                  type="text"
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                  placeholder="e.g., Sales"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Count Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Count: {count}
                </label>
                <input
                  type="range"
                  min="6"
                  max="24"
                  value={count}
                  onChange={e => setCount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>

            {/* Generate Button */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleGenerate}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Generate Team Names
              </button>
              {generatedNames.length > 0 && (
                <button
                  onClick={handleRegenerate}
                  className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                  title="Regenerate"
                >
                  <RotateCw className="w-5 h-5 text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Results Grid */}
          {generatedNames.length > 0 && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">
                  Generated Names
                </h3>
                <span className="text-sm text-gray-500">
                  {generatedNames.length} results
                </span>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl p-4 transition-all"
                  >
                    <p className="font-medium text-gray-900 pr-16">
                      {name}
                    </p>
                    <div className="absolute top-3 right-3 flex gap-1">
                      <button
                        onClick={() => handleCopy(name, index)}
                        className="p-1.5 hover:bg-white rounded-lg transition-colors"
                        title="Copy"
                      >
                        <Copy
                          className={`w-4 h-4 ${
                            copiedIndex === index
                              ? 'text-green-500'
                              : 'text-gray-400 group-hover:text-gray-600'
                          }`}
                        />
                      </button>
                      <button
                        onClick={() => toggleFavorite(name)}
                        className="p-1.5 hover:bg-white rounded-lg transition-colors"
                        title="Save"
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites.has(name)
                              ? 'text-red-500 fill-red-500'
                              : 'text-gray-400 group-hover:text-gray-600'
                          }`}
                        />
                      </button>
                    </div>
                    {copiedIndex === index && (
                      <span className="absolute bottom-2 right-3 text-xs text-green-600 font-medium">
                        Copied!
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Favorites Section */}
        {favorites.size > 0 && (
          <div className="mt-6 bg-white rounded-xl p-4 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
              Saved Names ({favorites.size})
            </h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(favorites).map(name => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-sm"
                >
                  {name}
                  <button
                    onClick={() => toggleFavorite(name)}
                    className="hover:text-red-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
