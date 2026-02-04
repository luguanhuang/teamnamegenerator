import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Team Names",
  description: "Generate team names for sports, work, trivia, and gaming. Choose a category and get unlimited creative ideas instantly.",
  keywords: ["team name generator", "team name ideas", "funny team names", "work team names", "sports team names"],
  openGraph: {
    title: "Generate Team Names | Team Name Generator",
    description: "Generate team names for sports, work, trivia, and gaming. Choose a category and get unlimited creative ideas instantly.",
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
