/**
 * Team Name Generator - Core Logic
 * Implements the creative naming algorithm with multiple strategies
 */

import { TEAM_DATA, PUN_NAMES, CategoryKey } from '@/data/nameData';

/**
 * Fisher-Yates Shuffle Algorithm - True Random
 * Used for both name generation and team splitting
 */
export const fisherYatesShuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get random item from array
 */
const getRandomItem = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Get multiple unique random items from array
 */
const getRandomItems = (arr: string[], count: number): string[] => {
  const shuffled = fisherYatesShuffle(arr);
  return shuffled.slice(0, Math.min(count, arr.length));
};

/**
 * Generate a single team name using multiple strategies
 */
const generateSingleName = (
  category: CategoryKey,
  userKeyword?: string
): string => {
  const data = TEAM_DATA[category] || TEAM_DATA.cool;

  // Strategy weights (adds variety)
  const strategy = Math.random();

  const hasKeyword = !!(userKeyword && userKeyword.trim().length > 0);

  // 15% chance for pre-made pun/special name (only when no keyword is provided)
  if (!hasKeyword && strategy < 0.15 && PUN_NAMES[category]) {
    const puns = PUN_NAMES[category] as string[];
    return getRandomItem(puns);
  }

  const adj = getRandomItem(data.adjectives);
  const noun = getRandomItem(data.nouns);

  // User keyword integration (always include category noun when keyword is provided)
  if (hasKeyword) {
    const keyword = userKeyword!.trim();
    const keywordStrategy = Math.random();

    if (keywordStrategy < 0.5) {
      // 50%: Keyword + Noun
      return `${keyword} ${noun}`;
    }
    // 50%: Adjective + Keyword + Noun
    return `${adj} ${keyword} ${noun}`;
  }

  // 30% chance for alliteration (same starting letter)
  if (strategy > 0.7) {
    // Try to find matching alliteration
    const matchingAdjs = data.adjectives.filter(a =>
      a.toLowerCase().startsWith(noun[0].toLowerCase())
    );
    if (matchingAdjs.length > 0) {
      const alliterativeAdj = getRandomItem(matchingAdjs);
      return `${alliterativeAdj} ${noun}`;
    }
  }

  // Standard: Adjective + Noun
  return `${adj} ${noun}`;
};

/**
 * Main generator function
 * @param category - Selected category
 * @param count - Number of names to generate
 * @param userKeyword - Optional user keyword
 * @returns Array of generated team names
 */
export const generateTeamNames = (
  category: CategoryKey = 'cool',
  count: number = 10,
  userKeyword?: string
): string[] => {
  const results: Set<string> = new Set();
  const maxAttempts = count * 3; // Prevent infinite loop
  let attempts = 0;

  while (results.size < count && attempts < maxAttempts) {
    const name = generateSingleName(category, userKeyword);
    results.add(name);
    attempts++;
  }

  return Array.from(results);
};

/**
 * Random Team Splitter Algorithm
 * Divides a list of names into random groups
 */
export interface SplitResult {
  teams: string[][];
  teamNames: string[];
  representatives?: string[];
}

export interface SplitOptions {
  names: string[];
  numTeams?: number;
  teamSize?: number;
  balanceBy?: 'default' | 'gender';
  genders?: ('M' | 'F' | 'X')[];
  generateTeamNames?: boolean;
  category?: CategoryKey;
  pickRepresentatives?: boolean;
}

export const splitIntoTeams = (options: SplitOptions): SplitResult => {
  const {
    names,
    numTeams,
    teamSize,
    balanceBy = 'default',
    genders,
    generateTeamNames: shouldGenerateNames = false,
    category = 'cool',
    pickRepresentatives = false,
  } = options;

  if (!names || names.length === 0) {
    return { teams: [], teamNames: [] };
  }

  // Calculate team count
  let totalTeams = numTeams;
  if (teamSize) {
    totalTeams = Math.ceil(names.length / teamSize);
  }
  if (!totalTeams || totalTeams < 1) {
    totalTeams = 2;
  }

  // Create array of indices with metadata
  type Person = { index: number; name: string; gender?: 'M' | 'F' | 'X' };
  let people: Person[] = names.map((name, i) => ({
    index: i,
    name: name.trim(),
    gender: genders?.[i],
  }));

  // Shuffle
  people = fisherYatesShuffle(people) as Person[];

  // Balance by gender if requested
  if (balanceBy === 'gender' && people.every(p => p.gender)) {
    const males = people.filter(p => p.gender === 'M');
    const females = people.filter(p => p.gender === 'F');
    const others = people.filter(p => p.gender === 'X');

    people = [];
    const maxGroup = Math.max(males.length, females.length, others.length);

    for (let i = 0; i < maxGroup; i++) {
      if (males[i]) people.push(males[i]);
      if (females[i]) people.push(females[i]);
      if (others[i]) people.push(others[i]);
    }
  }

  // Initialize teams
  const teams: string[][] = Array.from({ length: totalTeams }, () => []);

  // Distribute people round-robin style
  people.forEach((person, i) => {
    const teamIndex = i % totalTeams;
    teams[teamIndex].push(person.name);
  });

  // Filter out empty teams
  const activeTeams = teams.filter(t => t.length > 0);

  // Generate team names if requested
  const teamNames: string[] = shouldGenerateNames
    ? generateTeamNames(category, activeTeams.length)
    : activeTeams.map((_, i) => `Team ${i + 1}`);

  // Pick representatives if requested
  const representatives = pickRepresentatives
    ? activeTeams.map(team => {
        const shuffled = fisherYatesShuffle(team);
        return shuffled[0];
      })
    : undefined;

  return {
    teams: activeTeams,
    teamNames,
    representatives,
  };
};

/**
 * Parse names from text input
 * Handles newlines, commas, and other delimiters
 */
export const parseNamesInput = (input: string): string[] => {
  if (!input || input.trim().length === 0) return [];

  return input
    .split(/[\n,\t;]+/)
    .map(name => name.trim())
    .filter(name => name.length > 0);
};
