import { defineQuery } from "next-sanity";
import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import Avatar from "../../avatar";
import CoverImage from "../../cover-image";
import DateComponent from "../../date";
import MoreStories from "../../more-stories";
import PortableText from "../../portable-text";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postQuery, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

type Props = {
  params: Promise<{ id: string }>;
};

const postSlugs = defineQuery(
  `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`
);

export async function generateStaticParams() {
  return await sanityFetch({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await sanityFetch({
    query: postQuery,
    params,
    stega: false,
  });

  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage({ params }: Props) {
  const [post, settings] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
    sanityFetch({ query: settingsQuery }),
  ]);

  if (!post?._id) return notFound();

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-16">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-charcoal to-navy text-white py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {post.title}
          </h1>
          {post.author && (
            <div className="flex justify-center items-center gap-4 text-sm text-gray-300">
              <Avatar name={post.author.name} picture={post.author.picture} />
              <DateComponent dateString={post.date} />
            </div>
          )}
        </div>
      </header>

      {/* Cover Image */}
      <div className="max-w-6xl mx-auto px-4 lg:px-0 mt-12">
        <div className="rounded-xl overflow-hidden shadow-md">
          <CoverImage image={post.coverImage} priority />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 lg:px-0 py-16">
        {post.content?.length > 0 && (
          <PortableText
            className="prose prose-lg lg:prose-xl max-w-none"
            value={post.content as PortableTextBlock[]}
          />
        )}
      </div>

      {/* Recent Posts Section */}
      <aside className="bg-gray-50 py-16 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-3xl font-bold mb-10 text-charcoal">
            Recent Posts
          </h2>
          <Suspense fallback={<p>Loading...</p>}>
            <MoreStories skip={post._id} limit={2} />
          </Suspense>
        </div>
      </aside>
    </div>
  );
}
