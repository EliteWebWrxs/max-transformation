import type React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata, ResolvingMetadata } from "next";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const siteName = "Max Transformation";
  return {
    title: "Amplify Your Confidence | Max Transformation",
    description:
      "Professional coaching to Amplify Your Confidence and transform your inner dialogue. Silence Your Inner Critic to unlock your potential.",
    openGraph: {
      images: ["https://www.maxtransformationllc.com/dianeLogo.webp"],
      siteName: siteName,
      url: "https://www.maxtransformationllc.com",
    },
    alternates: {
      canonical: `https://www.maxtransformationllc.com`,
    },
  };
}

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
