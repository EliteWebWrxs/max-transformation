import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transform Your Mindset | Max Transformation",
  description:
    "Professional coaching to Amplify Your Confidence and transform your inner dialogue. Silence Your Inner Critic to unlock your potential.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-HLRXWHN430" />
    </html>
  );
}
