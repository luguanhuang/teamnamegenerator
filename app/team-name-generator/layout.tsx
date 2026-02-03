import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Name Generator - 10,000+ Cool, Funny & Professional Ideas",
  description: "The #1 Free Team Name Generator. Instantly generate creative names for work, sports, trivia, and hackathons. Choose from 6 categories and get unlimited unique names.",
  keywords: ["team name generator", "cool team names", "funny team names", "sports team names", "business team names", "hackathon team names"],
  openGraph: {
    title: "Team Name Generator - Find Your Perfect Team Name",
    description: "Generate creative team names instantly. Free, no login required. Choose from 6 categories: Business, Sports, Funny, Tech, Animals, and Cool.",
    type: "website",
    url: "https://teamnamegenerator.org/team-name-generator",
  },
  alternates: {
    canonical: "https://teamnamegenerator.org/team-name-generator",
  },
};

export default function TeamNameGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
