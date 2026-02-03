/**
 * Team Name Generator Data
 * 6 categories: business, sports, funny, tech, animals, cool
 */

export type CategoryKey = 'business' | 'sports' | 'funny' | 'tech' | 'animals' | 'cool';

export interface CategoryInfo {
  id: CategoryKey;
  name: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'business', name: 'Business', emoji: '👔', description: 'Professional & Corporate' },
  { id: 'sports', name: 'Sports', emoji: '🏆', description: 'Athletic & Competitive' },
  { id: 'funny', name: 'Funny', emoji: '🤪', description: 'Humorous & Quirky' },
  { id: 'tech', name: 'Tech', emoji: '💻', description: 'Geeky & Digital' },
  { id: 'animals', name: 'Animals', emoji: '🦁', description: 'Wild & Nature' },
  { id: 'cool', name: 'Cool', emoji: '😎', description: 'Awesome & Trendy' },
];

interface NameData {
  adjectives: string[];
  nouns: string[];
}

interface DataStructure {
  [key: string]: NameData;
}

export const TEAM_DATA: DataStructure = {
  // 👔 职场/商务风
  business: {
    adjectives: [
      "Dynamic", "Global", "Synergy", "Prime", "Elite",
      "Strategic", "Future", "Visionary", "Corporate", "Direct",
      "Core", "Rapid", "Smart", "Creative", "NextGen",
      "Market", "Capital", "Venture", "Golden", "Peak",
      "Apex", "Pinnacle", "Premier", "Leading", "Executive",
      "Professional", "Enterprise", "Innovative", "Progressive", "Unity"
    ],
    nouns: [
      "Solutions", "Partners", "Group", "Innovators", "Minds",
      "Thinkers", "Leaders", "Consultants", "Alliance", "Network",
      "Systems", "Dynamics", "Creators", "Pros", "Specialists",
      "Hustlers", "Makers", "Achievers", "Gurus", "Titans",
      "Force", "Pioneers", "Strategists", "Advisors", "Vanguard",
      "Synergy", "Collective", "Fusion", "Coalition", "Consolidated"
    ]
  },

  // 🏆 体育/竞技风
  sports: {
    adjectives: [
      "Iron", "Turbo", "Savage", "United", "Rapid",
      "Thunder", "Lightning", "Storm", "Grand", "Royal",
      "Invincible", "Mighty", "Brave", "Wild", "Atomic",
      "Velocity", "Power", "Alpha", "Omega", "Victory",
      "Champion", "Elite", "Supreme", "Extreme", "Intense",
      "Ferocious", "Dominant", "Relentless", "Fearless", "Legendary"
    ],
    nouns: [
      "Warriors", "Strikers", "Kings", "Falcons", "Sharks",
      "Raiders", "Legends", "Titans", "Knights", "Spartans",
      "Panthers", "Tigers", "Dragons", "Vipers", "Bears",
      "Hawks", "Eagles", "Wolves", "Cobras", "Gladiators",
      "Athletes", "Champions", "Heroes", "Giants", "Crushers",
      "Destroyers", "Conquerors", "Phenoms", "Mavericks", "Rebels"
    ]
  },

  // 🤪 搞笑/幽默风
  funny: {
    adjectives: [
      "Lazy", "Drunken", "Sleepy", "Confused", "Caffeinated",
      "Hungry", "Lost", "Grumpy", "Salty", "Chubby",
      "Awkward", "Crispy", "Spicy", "Invisible", "Noisy",
      "Slow", "Dancing", "Screaming", "Bored", "Hairy",
      "Clumsy", "Hyper", "Suspicious", "Dramatic", "Fuzzy",
      "Wobbly", "Sneaky", "Loopy", "Zany", "Bonkers"
    ],
    nouns: [
      "Pandas", "Potatoes", "Zombies", "Unicorns", "Bananas",
      "Chickens", "Monkeys", "Donuts", "Tacos", "Hamsters",
      "Aliens", "Gnomes", "Ninjas", "Penguins", "Sloths",
      "Robots", "Goblins", "Pirates", "Dumplings", "Cactuses",
      "Marshmallows", "Wombats", "Platypus", "Narwhals", "Llamas",
      "Koalas", "Badgers", "Meerkats", "Possums", "Snails"
    ]
  },

  // 💻 科技/极客风
  tech: {
    adjectives: [
      "Binary", "Digital", "Cyber", "Agile", "Quantum",
      "Virtual", "Pixel", "Logic", "Nano", "Meta",
      "Crypto", "Electric", "Solar", "Code", "Data",
      "Neural", "Glitch", "Beta", "System", "Cloud",
      "Algorithm", "Protocol", "Syntax", "Kernel", "Matrix",
      "Quantum", "Holographic", "Robotic", "Automated", "Infinite"
    ],
    nouns: [
      "Hackers", "Bots", "Coders", "Developers", "Glitches",
      "Scripts", "Nodes", "Bytes", "Pixels", "Startups",
      "Miners", "Layers", "Servers", "Networks", "Loops",
      "Stacks", "Kernels", "Oracles", "Architects", "Wizards",
      "Programmers", "Engineers", "Decrypters", "Operators", "Processors",
      "Algorithms", "Functions", "Variables", "Arrays", "Objects"
    ]
  },

  // 🦁 动物/自然风
  animals: {
    adjectives: [
      "Roaring", "Flying", "Swimming", "Running", "Hidden",
      "Jumping", "Silent", "Fierce", "Happy", "Crazy",
      "Red", "Blue", "Black", "White", "Golden",
      "Desert", "Jungle", "Ocean", "Mountain", "Arctic",
      "Mystic", "Primal", "Wild", "Noble", "Ancient",
      "Spirit", "Dream", "Moon", "Sun", "Star"
    ],
    nouns: [
      "Lions", "Dolphins", "Foxes", "Owls", "Cats",
      "Dogs", "Bulls", "Rhinos", "Hippos", "Giraffes",
      "Koalas", "Kangaroos", "Zebras", "Gorillas", "Lemurs",
      "Bees", "Ants", "Beetles", "Butterflies", "Spiders",
      "Wolves", "Eagles", "Sharks", "Whales", "Bears",
      "Falcons", "Hawks", "Ravens", "Cobras", "Scorpions"
    ]
  },

  // 😎 酷炫/通用
  cool: {
    adjectives: [
      "Epic", "Legendary", "Supreme", "Ultimate", "Fantastic",
      "Incredible", "Amazing", "Awesome", "Brilliant", "Perfect",
      "Neon", "Retro", "Urban", "Cosmic", "Galactic",
      "Mystic", "Phantom", "Shadow", "Ghost", "Dark",
      "Crystal", "Plasma", "Solar", "Lunar", "Stellar",
      "Infinite", "Eternal", "Divine", "Sacred", "Immortal"
    ],
    nouns: [
      "Squad", "Crew", "Gang", "Team", "Force",
      "Unit", "Club", "Society", "Tribe", "Clan",
      "Mob", "Pack", "Guild", "Legion", "Posse",
      "Faction", "Alliance", "Band", "Troop", "Party",
      "Syndicate", "Coalition", "Federation", "Union", "League",
      "Collective", "Assembly", "Council", "Circle", "Order"
    ]
  }
};

// Pre-generated puns and special names for extra variety
export const PUN_NAMES = {
  business: [
    "The Synergy Stones", "Mission Improbable", "The Deadline Dodgers",
    " Spreadsheet Warriors", "PowerPoint Rangers", "Meeting Avoiders",
    "Calendar Blockers", "The Reply Alls", "CC Me Maybe", "The Slackers"
  ],
  sports: [
    "Quidditch Players", "The Mighty Ducks", "Gym Class Heroes",
    "Bench Warmers", "The Underdogs", "Couch Potatoes FC",
    "Weekend Warriors", "The Dream Team", "Choke Artists", "MVPs"
  ],
  funny: [
    "The Quizard of Oz", "Les Quizerables", "Quizteama del Fuego",
    "The Hufflepuffs", "Team Rocket", "The A-Team",
    "Ghostbusters", "Men in Black", "Avengers", "The Wrecking Crew"
  ],
  tech: [
    "404 Brain Not Found", "Git Push Force", "The Stack Overflow",
    "Ctrl Alt Defeat", "Binary Barrage", "The Java Junkies",
    "Python Packers", "Ruby Raiders", "CSS_styled", "The Bug Fixers"
  ],
  animals: [
    "Party Animals", "Wild Things", "The Hungry Caterpillars",
    "Jungle Bookies", "Lion Kings", "Madagascar",
    "Ice Age", "Finding Nemos", "Shark Tales", "Happy Feet"
  ],
  cool: [
    "Dream Team", "All Stars", "The Untouchables", "Fantastic Four",
    "The Incredibles", "Justice League", "Suicide Squad", "X-Men",
    "The Goonies", "Breakfast Club", "The Plastics", "Freaks and Geeks"
  ]
};
