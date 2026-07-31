import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hector Solo | Personal Airport Journeys from London",
  description:
    "Help shape Hector Solo, a proposed founder-led London airport-transfer service being developed around reliability, consistency and personal service.",
  keywords: ["London airport transfer", "Heathrow transfer", "Gatwick transfer", "Stansted transfer", "private hire London"],
  openGraph: {
    title: "Hector Solo — Your airport journey, personally handled",
    description: "Share how you travel and help shape a proposed founder-led London airport-transfer service before launch.",
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
    description: "Help shape a proposed founder-led airport-transfer service for Greater London before launch.",
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
