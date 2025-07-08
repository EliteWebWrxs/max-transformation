import BooksClient from "./bookClient";
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
    title: "Books & Resources | Max Transformation",
    description:
      "Explore Diane's top-rated books and free resources to help you rewrite your story, build confidence, and master your mindset. Start your transformation today.",
    openGraph: {
      images: ["https://www.maxtransformationllc.com/dianeLogo.webp"],
      siteName: siteName,
      url: "https://www.maxtransformationllc.com/books",
    },
    alternates: {
      canonical: `https://www.maxtransformationllc.com/books`,
    },
  };
}

export default function Books() {
  return <BooksClient />;
}
