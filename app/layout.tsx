import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Team Name Generator - Free Creative Team Names | 10,000+ Ideas",
    template: "%s | Team Name Generator",
  },
  description: "The best free team name generator. Create cool, funny, and professional team names for sports, work, trivia, and more. Generate unlimited unique team names instantly.",
  keywords: ["team name generator", "team names", "cool team names", "funny team names", "sports team names", "business team names", "team name ideas", "team naming"],
  authors: [{ name: "Team Name Generator" }],
  openGraph: {
    title: "Team Name Generator - Free Creative Team Names | 10,000+ Ideas",
    description: "The best free team name generator. Create cool, funny, and professional team names for sports, work, trivia, and more. Generate unlimited unique team names instantly.",
    type: "website",
    url: "https://teamnamegenerator.org",
    siteName: "Team Name Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Name Generator - Free Creative Team Names | 10,000+ Ideas",
    description: "The best free team name generator. Create cool, funny, and professional team names for sports, work, trivia, and more.",
  },
  alternates: {
    canonical: "https://teamnamegenerator.org",
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
                  "url": "https://teamnamegenerator.org",
                  "description": "The best free team name generator. Create cool, funny, and professional team names for sports, work, trivia, and more.",
                  "keywords": "team name generator, team names, cool team names, funny team names, sports team names, business team names",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://teamnamegenerator.org/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Team Name Generator",
                  "applicationCategory": "UtilityApplication",
                  "operatingSystem": "Web",
                  "url": "https://teamnamegenerator.org",
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
                  "url": "https://teamnamegenerator.org",
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
