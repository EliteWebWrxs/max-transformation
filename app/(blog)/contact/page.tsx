import ContactClient from "./contactClient";
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
    title: "Contact Diane | Max Transformation",
    description:
      "Ready to transform your life? Book a free call, send a message, or connect with Diane today to begin your personalized confidence and mindset journey.",
    openGraph: {
      images: ["https://www.maxtransformationllc.com/dianeLogo.webp"],
      siteName: siteName,
      url: "https://www.maxtransformationllc.com/contact",
    },
    alternates: {
      canonical: `https://www.maxtransformationllc.com/contact`,
    },
  };
}

export default function Contact() {
  return <ContactClient />;
}
