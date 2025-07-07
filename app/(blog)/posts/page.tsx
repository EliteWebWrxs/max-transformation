import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import Avatar from "../avatar";
import CoverImage from "../cover-image";
import DateComponent from "../date";
import MoreStories from "../more-stories";
import type { HeroQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { heroQuery, settingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog | Max Transformation",
  description:
    "Learn what CPR is, how it works, and why it's a vital life-saving skill that everyone should know to respond confidently in emergencies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mylifeskills.org/posts",
    title: "Blog | Life Skills Training Network",
    description:
      "Learn what CPR is, how it works, and why it's a vital life-saving skill that everyone should know to respond confidently in emergencies.",
    siteName: "Life Skills Training Network",
    images: ["https://lifeskills.vercel.app/lifeSkillsLogo.webp"],
  },
};

export default async function Page() {
  const [settings, heroPost] = await Promise.all([
    sanityFetch({
      query: settingsQuery,
    }),
    sanityFetch({ query: heroQuery }),
  ]);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-charcoal via-navy to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Mindset
            <span className="block text-transparent bg-gradient-to-r from-sand to-gold bg-clip-text">
              Transformation
            </span>
            <span className="block">Blog</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Practical insights, success stories, and proven strategies to help
            you transform your mindset and build unshakeable confidence.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-charcoal mb-2">
              Featured Article
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal to-gold"></div>
          </div>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              slug={heroPost.slug}
              coverImage={heroPost.coverImage}
              excerpt={heroPost.excerpt}
              date={heroPost.date}
              author={heroPost.author}
            />
          )}
        </section>

        {heroPost?._id && (
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-charcoal">
                More Posts
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal to-gold mb-10"></div>
              <Suspense
                fallback={
                  <div className="h-96 flex items-center justify-center">
                    Loading stories...
                  </div>
                }
              >
                <MoreStories skip={heroPost._id} limit={100} />
              </Suspense>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  Exclude<HeroQueryResult, null>,
  "title" | "coverImage" | "date" | "excerpt" | "author" | "slug"
>) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Left: Image */}
      <Link href={`/posts/${slug}`} className="block h-full group">
        <div className="relative h-64 md:h-full w-full overflow-hidden">
          <CoverImage image={coverImage} priority />
        </div>
      </Link>

      {/* Right: Content */}
      <div className="flex flex-col justify-center p-6 md:p-10">
        <div className="text-sm text-gray-500 mb-3">
          <DateComponent dateString={date} />
        </div>
        <h2 className="text-3xl font-bold text-charcoal mb-4 group-hover:text-teal transition-colors duration-200">
          <Link href={`/posts/${slug}`} className="hover:text-primary">
            {title}
          </Link>
        </h2>
        {excerpt && (
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            {excerpt}
          </p>
        )}
        {author && (
          <div className="mt-auto pt-4">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        )}
      </div>
    </article>
  );
}
