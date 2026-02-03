'use client';

import { useState, useEffect } from 'react';
import {
  Users,
  Shuffle,
  Copy,
  Download,
  Settings,
  X,
  Check,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import {
  parseNamesInput,
  splitIntoTeams,
  generateTeamNames,
} from '@/utils/generator';
import { CATEGORIES, CategoryKey } from '@/data/nameData';

export default function RandomTeamGeneratorPage() {
  const [input, setInput] = useState('');
  const [splitMode, setSplitMode] = useState<'numTeams' | 'teamSize'>(
    'numTeams'
  );
  const [numTeams, setNumTeams] = useState(4);
  const [teamSize, setTeamSize] = useState(5);
  const [generateTeamNames, setGenerateTeamNames] = useState(true);
  const [nameCategory, setNameCategory] = useState<CategoryKey>('cool');
  const [pickRepresentatives, setPickRepresentatives] = useState(false);
  const [result, setResult] = useState<{
    teams: string[][];
    teamNames: string[];
    representatives?: string[];
  } | null>(null);
  const [copiedTeam, setCopiedTeam] = useState<number | null>(null);

  const handleSplit = () => {
    const names = parseNamesInput(input);
    if (names.length === 0) return;

    const splitResult = splitIntoTeams({
      names,
      numTeams: splitMode === 'numTeams' ? numTeams : undefined,
      teamSize: splitMode === 'teamSize' ? teamSize : undefined,
      generateTeamNames,
      category: nameCategory,
      pickRepresentatives,
    });

    setResult(splitResult);
  };

  const handleCopyTeam = (teamIndex: number) => {
    if (!result) return;
    const team = result.teams[teamIndex];
    const teamName = result.teamNames[teamIndex];
    const text = `${teamName}\n${team.join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopiedTeam(teamIndex);
    setTimeout(() => setCopiedTeam(null), 2000);
  };

  const handleCopyAll = () => {
    if (!result) return;
    let text = '';
    result.teams.forEach((team, i) => {
      text += `${result.teamNames[i]}\n`;
      text += team.join('\n');
      text += '\n\n';
    });
    navigator.clipboard.writeText(text);
    alert('All teams copied to clipboard!');
  };

  const handleDownloadCSV = () => {
    if (!result) return;

    let csv = 'Team Name,Members\n';
    result.teams.forEach((team, i) => {
      csv += `"${result.teamNames[i]}","${team.join(', ')}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'teams.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  // Example names for demo
  const loadExample = () => {
    setInput(
      'Alice\nBob\nCharlie\nDiana\nEric\nFiona\nGeorge\nHannah\nIvan\nJulia\nKevin\nLisa\nMichael\nNina\nOliver\nPaul\nQuinn\nRachel\nSteven\nTina'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Shuffle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Random Team Generator
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Name Generator
            </Link>
            <Link
              href="/random-team-generator"
              className="text-sm font-medium text-purple-600"
            >
              Random Splitter
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Randomly Split People Into Teams
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Paste your list of names and let our true random algorithm fairly
            distribute them into equal groups. Optional team name generation
            included!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">
                  Enter Names
                </h3>
                <button
                  onClick={loadExample}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Load Example
                </button>
              </div>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Enter names, one per line...&#10;&#10;Alice&#10;Bob&#10;Charlie&#10;Diana"
                className="w-full h-48 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none font-mono text-sm"
              />
              <div className="mt-3 text-sm text-gray-500">
                {parseNamesInput(input).length} names entered
              </div>
            </div>

            {/* Settings */}
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-gray-500" />
                <h3 className="font-semibold text-gray-900">Settings</h3>
              </div>

              {/* Split Mode */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Split By
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSplitMode('numTeams')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      splitMode === 'numTeams'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-purple-300'
                    }`}
                  >
                    Number of Teams
                  </button>
                  <button
                    onClick={() => setSplitMode('teamSize')}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      splitMode === 'teamSize'
                        ? 'bg-purple-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-purple-300'
                    }`}
                  >
                    People per Team
                  </button>
                </div>
              </div>

              {/* Number Input */}
              <div className="mb-4">
                {splitMode === 'numTeams' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Teams
                    </label>
                    <input
                      type="number"
                      min="2"
                      max="50"
                      value={numTeams}
                      onChange={e => setNumTeams(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max People per Team
                    </label>
                    <input
                      type="number"
                      min="2"
                      max="20"
                      value={teamSize}
                      onChange={e => setTeamSize(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Toggle Options */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={generateTeamNames}
                    onChange={e => setGenerateTeamNames(e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      Generate Team Names
                    </div>
                    <div className="text-sm text-gray-500">
                      Give each team a creative name
                    </div>
                  </div>
                </label>

                {generateTeamNames && (
                  <div className="ml-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name Style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => setNameCategory(cat.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            nameCategory === cat.id
                              ? 'bg-purple-600 text-white'
                              : 'bg-white border border-gray-200 text-gray-700 hover:border-purple-300'
                          }`}
                        >
                          {cat.emoji} {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pickRepresentatives}
                    onChange={e => setPickRepresentatives(e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      Pick Team Representatives
                    </div>
                    <div className="text-sm text-gray-500">
                      Randomly select one leader per team
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 flex gap-3">
              <button
                onClick={handleSplit}
                disabled={parseNamesInput(input).length === 0}
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <Shuffle className="w-5 h-5" />
                Generate Teams
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                title="Clear all"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {result ? (
              <>
                {/* Results Header */}
                <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {result.teams.length} Teams Generated
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Total: {result.teams.flat().length} people
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyAll}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      title="Copy all teams"
                    >
                      <Copy className="w-5 h-5 text-gray-500" />
                    </button>
                    <button
                      onClick={handleDownloadCSV}
                      className="p-2 hover:bg-white rounded-lg transition-colors"
                      title="Download CSV"
                    >
                      <Download className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Teams List */}
                <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto">
                  {result.teams.map((team, teamIndex) => (
                    <div
                      key={teamIndex}
                      className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                    >
                      {/* Team Header */}
                      <div className="px-4 py-3 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {result.teamNames[teamIndex]}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {team.length} member
                            {team.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCopyTeam(teamIndex)}
                          className="p-2 hover:bg-white rounded-lg transition-colors"
                          title="Copy team"
                        >
                          {copiedTeam === teamIndex ? (
                            <Check className="w-5 h-5 text-green-500" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                      </div>

                      {/* Team Members */}
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {team.map((member, memberIndex) => {
                            const isRepresentative =
                              result.representatives?.[teamIndex] === member;
                            return (
                              <span
                                key={memberIndex}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${
                                  isRepresentative
                                    ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                                    : 'bg-white text-gray-700 border border-gray-200'
                                }`}
                              >
                                {isRepresentative && (
                                  <span className="text-xs">👑</span>
                                )}
                                {member}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Teams Generated Yet
                </h3>
                <p className="text-gray-500">
                  Enter names and click &quot;Generate Teams&quot; to get started
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Algorithm Info */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            True Random Algorithm
          </h3>
          <p className="text-gray-600 text-sm">
            This tool uses the Fisher-Yates shuffle algorithm, a mathematically
            proven method for generating truly random permutations. Each time you
            generate teams, every possible arrangement has an equal probability
            of being selected. This ensures completely fair and unbiased team
            distribution.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <Sparkles className="w-5 h-5" />
            Back to Team Name Generator
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>© 2025 Team Name Generator. Random Team Splitter Tool.</p>
        </div>
      </footer>
    </div>
  );
}
