import AboutClient from "./aboutClient";
import type { Metadata, ResolvingMetadata } from "next";

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
    title: "About Diane | Max Transformation",
    description:
      "Meet Diane Adams Army veteran, life coach, speaker, and best selling author. Discover her story, values, and how she helps others transform their lives.",
    openGraph: {
      images: ["https://www.maxtransformationllc.com/diane-adams-1.jpg"],
      siteName: siteName,
      url: "https://www.maxtransformationllc.com/about",
    },
    alternates: {
      canonical: `https://www.maxtransformationllc.com/about`,
    },
  };
}

export default function About() {
  return <AboutClient />;
}
