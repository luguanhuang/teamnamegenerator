import { Sparkles, Zap, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { FaqAccordion } from './components/FaqAccordion';

export const metadata = {
  title: 'Free Creative Team Name Generator | 10,000+ Team Name Ideas',
  description: 'Free team name generator for sports, work, trivia, and gaming. Pick a category, add a keyword, and get unlimited creative team name ideas instantly.',
  keywords: ['team name generator', 'team name ideas', 'funny team names', 'work team names', 'sports team names'],
  openGraph: {
    title: 'Free Creative Team Name Generator | 10,000+ Team Name Ideas',
    description: 'Free team name generator for sports, work, trivia, and gaming. Pick a category, add a keyword, and get unlimited creative team name ideas instantly.',
    type: 'website',
    url: 'https://www.teamnamegenerator.online',
    images: [{ url: 'https://www.teamnamegenerator.online/og-image.jpg' }],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.teamnamegenerator.online',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Clean & Compact */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/favicon-team-32x32.png"
              alt="Team Name Generator logo"
              title="Team Name Generator"
              className="w-8 h-8"
              width={32}
              height={32}
            />
            <div>
              <span className="text-lg font-bold text-gray-900">
                Team Name Generator
              </span>
              <p className="text-xs text-gray-500">Free - Fast - Unlimited</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#generator" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Generator
            </a>
            <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Categories
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero - Compact + Generator First */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              Free Team Name Generator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Generate <strong>cool, funny, professional</strong> team names instantly with our free team name generator. 6 categories, unlimited names.
            </p>
          </div>

          {/* Generator - MAIN FEATURE ABOVE THE FOLD */}
          <div id="generator" className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <iframe
                src="/team-name-generator"
                className="w-full h-[600px] md:h-[700px] border-0"
                title="Free Team Name Generator Tool"
                loading="eager"
              />
            </div>
          </div>

          {/* Quick Stats - Inline */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span className="text-blue-600 font-semibold">6+</span> Categories
            </span>
            <span className="flex items-center gap-1">
              <span className="text-blue-600 font-semibold">500+</span> Combinations
            </span>
            <span className="flex items-center gap-1">
              <span className="text-blue-600 font-semibold">10K+</span> Names
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-600 font-semibold">100%</span> Free
            </span>
          </div>
        </div>
      </section>

      {/* Categories - Compact */}
      <section id="categories" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Team Name Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: '💼', name: 'Business Team Names', desc: 'Professional corporate names' },
              { emoji: '🏆', name: 'Sports Team Names', desc: 'Competitive athletic names' },
              { emoji: '😄', name: 'Funny Team Names', desc: 'Humorous witty names' },
              { emoji: '💻', name: 'Tech Team Names', desc: 'Geeky modern names' },
              { emoji: '🦁', name: 'Animal Team Names', desc: 'Wild powerful names' },
              { emoji: '😎', name: 'Cool Team Names', desc: 'Awesome trendy names' },
            ].map((cat, i) => (
              <div key={i} className="bg-white rounded-xl border p-4 text-center hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{cat.emoji}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{cat.name}</h3>
                <p className="text-gray-500 text-xs">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples - Compact Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Team Name Examples
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'Elite Solutions', 'Prime Innovators', 'Thunder Warriors', 'Iron Strikers',
              'Cereal Killers', 'Awkward Turtles', 'Shadow Squad', 'Neon Force',
              'Code Crushers', 'Binary Brigade', 'Roaring Lions', 'Swift Eagles',
              'Crystal Knights', 'Epic Raiders', 'Phoenix Rising', 'Victory Legends'
            ].map((name, i) => (
              <span key={i} className="inline-block bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium text-center">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Collapsible */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <details className="bg-white rounded-xl border shadow-sm">
            <summary className="px-6 py-4 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
              How to Use the Team Name Generator
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </summary>
            <div className="px-6 pb-6">
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                {[
                  { step: '1', title: 'Choose Category', desc: 'Select from 6 team name categories' },
                  { step: '2', title: 'Add Keyword (Optional)', desc: 'Enter a custom keyword to personalize' },
                  { step: '3', title: 'Generate & Copy', desc: 'Click generate to see unique names instantly' },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* SEO Content Block - Compact */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Use Our Team Name Generator?
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our advanced <strong>team name generator</strong> creates unique <strong>team names</strong> instantly. Whether you need <strong>business team names</strong>, <strong>sports team names</strong>, <strong>funny team names</strong>, or <strong>cool team names</strong>, our free team name generator delivers results. Generate unlimited <strong>team name ideas</strong> with 500+ word combinations across 6 categories.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ - Collapsible */}
      <section id="faq" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Team Name Generator FAQ
          </h2>
          <FaqAccordion faqs={[
            {
              q: 'Is this team name generator free?',
              a: 'Yes! 100% free with unlimited usage. Generate as many team names as you want.'
            },
            {
              q: 'How many team names can I generate?',
              a: 'Unlimited! Thousands of unique combinations. Keep generating until you find the perfect name.'
            },
            {
              q: 'What categories are available?',
              a: '6 categories: Business, Sports, Funny, Tech, Animals, and Cool team names.'
            },
            {
              q: 'Do I need an account?',
              a: 'No account needed! Start generating team names instantly. Favorites saved locally.'
            },
            {
              q: 'Can I use these names commercially?',
              a: 'Use as inspiration. Check trademark availability for commercial use.'
            },
          ]} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Generate Your Perfect Team Name Now
          </h2>
          <p className="text-blue-100 mb-6">
            Join thousands of teams with our free team name generator
          </p>
          <a
            href="#generator"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
          >
            <Zap className="w-5 h-5" />
            Start Generating
          </a>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-6 text-sm">
            <div>
              <h4 className="font-bold text-white mb-2">Team Name Generator</h4>
              <p className="text-gray-400">
                The #1 free <strong>team name generator</strong> for creating unique team names.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Categories</h4>
              <ul className="space-y-1">
                <li><a href="#categories" className="hover:text-blue-400">Business Team Names</a></li>
                <li><a href="#categories" className="hover:text-blue-400">Sports Team Names</a></li>
                <li><a href="#categories" className="hover:text-blue-400">Funny Team Names</a></li>
                <li><a href="#categories" className="hover:text-blue-400">Cool Team Names</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Links</h4>
              <ul className="space-y-1">
                <li><a href="#generator" className="hover:text-blue-400">Team Name Generator Tool</a></li>
                <li><a href="#categories" className="hover:text-blue-400">All Categories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="#generator" className="hover:text-blue-400">Team Name Generator</a></li>
                <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
            <p>© 2026 Team Name Generator. All rights reserved.</p>
            <p>The #1 free team name generator for creative team names.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
