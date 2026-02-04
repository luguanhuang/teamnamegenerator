import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const faviconVersion = "20260204b";

export const metadata: Metadata = {
  title: {
    default: "Free Creative Team Name Generator | 10,000+ Team Name Ideas",
    template: "%s | Team Name Generator",
  },
  description: "Free team name generator for sports, work, trivia, and gaming. Pick a category, add a keyword, and get unlimited creative team name ideas instantly.",
  keywords: ["team name generator", "team name ideas", "funny team names", "work team names", "sports team names"],
  authors: [{ name: "Team Name Generator" }],
  openGraph: {
    title: "Free Creative Team Name Generator | 10,000+ Team Name Ideas",
    description: "Free team name generator for sports, work, trivia, and gaming. Pick a category, add a keyword, and get unlimited creative team name ideas instantly.",
    type: "website",
    url: "https://www.teamnamegenerator.online",
    siteName: "Team Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Creative Team Name Generator | 10,000+ Team Name Ideas",
    description: "Free team name generator for sports, work, trivia, and gaming. Pick a category, add a keyword, and get unlimited creative team name ideas instantly.",
  },
  icons: {
    icon: [
      { url: `/favicon-team.ico?v=${faviconVersion}` },
      { url: `/favicon-team-32x32.png?v=${faviconVersion}`, type: "image/png", sizes: "32x32" },
      { url: `/favicon-team-16x16.png?v=${faviconVersion}`, type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: `/apple-touch-icon-team.png?v=${faviconVersion}`, sizes: "180x180", type: "image/png" }],
  },
  manifest: `/site.webmanifest?v=${faviconVersion}`,
  alternates: {
    canonical: "https://www.teamnamegenerator.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "name": "Team Name Generator",
                  "alternateName": "Free Team Name Generator",
                  "url": "https://www.teamnamegenerator.online",
                  "description": "Free team name generator for sports, work, trivia, and gaming. Pick a category, add a keyword, and get unlimited creative team name ideas instantly.",
                  "keywords": "team name generator, team name ideas, funny team names, work team names, sports team names",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.teamnamegenerator.online/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Team Name Generator",
                  "applicationCategory": "UtilityApplication",
                  "operatingSystem": "Web",
                  "url": "https://www.teamnamegenerator.online",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "2847"
                  },
                  "featureList": [
                    "Free team name generation",
                    "6 name categories",
                    "Unlimited usage",
                    "No registration required",
                    "Instant results"
                  ]
                },
                {
                  "@type": "Organization",
                  "name": "Team Name Generator",
                  "url": "https://www.teamnamegenerator.online",
                  "description": "The leading free team name generator providing creative names for sports teams, work groups, and gaming clans.",
                  "foundingDate": "2024"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
