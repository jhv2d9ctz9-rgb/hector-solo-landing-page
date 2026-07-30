import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hector Solo | Personal Airport Journeys from London",
  description:
    "Register your interest in Hector Solo, a proposed independent, pre-booked airport-transfer service from Greater London to Heathrow, Gatwick and Stansted.",
  keywords: ["London airport transfer", "Heathrow transfer", "Gatwick transfer", "Stansted transfer", "private hire London"],
  openGraph: {
    title: "Hector Solo — Your airport journey, personally handled",
    description: "A proposed personal, dependable airport-transfer service for Greater London. Register your interest — no payment or obligation.",
    type: "website",
    locale: "en_GB",
    siteName: "Hector Solo",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Hector Solo — Your airport journey. Personally handled.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hector Solo — Personal airport journeys",
    description: "A proposed independent airport-transfer service for Greater London.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
