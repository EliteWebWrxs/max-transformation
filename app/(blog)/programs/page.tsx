import ProgramsClient from "./browserClient";
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
    title: "Mindset Coaching Programs | Max Transformation",
    description:
      "Explore powerful coaching programs to boost confidence, rewire your mindset, and achieve lasting transformation. Self-paced, group, and 1-on-1 options.",
    openGraph: {
      images: [
        "https://www.maxtransformationllc.com/REWIRE-AND-REBUILD-LOGO.png",
      ],
      siteName: siteName,
      url: "https://www.maxtransformationllc.com/programs",
    },
    alternates: {
      canonical: `https://www.maxtransformationllc.com/programs`,
    },
  };
}

export default function Programs() {
  return <ProgramsClient />;
}
