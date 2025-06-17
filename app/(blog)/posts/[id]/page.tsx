"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Heart,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPost() {
  const params = useParams();
  const id = params.id;

  // This would typically come from a CMS or API
  const post = {
    id: 1,
    title: "5 Daily Habits That Will Transform Your Self-Talk",
    excerpt:
      "Discover the simple daily practices that can completely change how you speak to yourself and build lasting confidence.",
    content: `
      <p>Your inner dialogue shapes your reality more than you might realize. The way you speak to yourself throughout the day influences your emotions, decisions, and ultimately, your success. If you're ready to transform that critical inner voice into your biggest supporter, these five daily habits will change everything.</p>

      <h2>1. Morning Affirmation Ritual</h2>
      <p>Start each day by looking in the mirror and speaking three positive affirmations about yourself. This isn't about fake positivity—it's about rewiring your brain to notice your strengths and potential.</p>

      <h2>2. The Thought Replacement Technique</h2>
      <p>When you catch yourself thinking negatively, pause and ask: "What would I say to my best friend in this situation?" Then speak to yourself with that same kindness and understanding.</p>

      <h2>3. Evening Reflection Practice</h2>
      <p>Before bed, write down three things you did well that day, no matter how small. This trains your brain to look for evidence of your capabilities rather than your shortcomings.</p>

      <h2>4. The Self-Compassion Break</h2>
      <p>When facing challenges, place your hand on your heart and remind yourself: "This is a moment of struggle. Struggle is part of life. May I be kind to myself in this moment."</p>

      <h2>5. Reframe Your Inner Critic</h2>
      <p>Instead of trying to silence your inner critic, transform it into an inner coach. Ask yourself: "How can I learn from this?" rather than "Why did I mess up?"</p>

      <p>Remember, changing your self-talk is like building a muscle—it takes consistent practice. Start with just one of these habits and gradually add the others. Your future self will thank you for the kindness you show yourself today.</p>
    `,
    author: "Diane Adams",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Self-Talk",
    image: "/placeholder.svg?height=400&width=800",
  };

  const relatedPosts = [
    {
      id: 2,
      title: "The Science Behind Positive Affirmations",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "The Inner Critic vs. The Inner Coach",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <AnimatedSection
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        animation="fadeIn"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/posts"
            className="inline-flex items-center text-teal hover:text-charcoal transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-teal/10 text-teal px-3 py-1 rounded-full mr-4">
                {post.category}
              </span>
              <User size={16} className="mr-2" />
              <span className="mr-4">{post.author}</span>
              <Calendar size={16} className="mr-2" />
              <span className="mr-4">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-teal transition-colors duration-200">
                <Heart size={20} className="mr-2" />
                <span>Like</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-teal transition-colors duration-200">
                <Share2 size={20} className="mr-2" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Image */}
      <AnimatedSection className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Article Content */}
      <AnimatedSection className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </AnimatedSection>

      {/* Related Posts */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/posts/${relatedPost.id}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal group-hover:text-teal transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center text-teal mt-4">
                    <span>Read Article</span>
                    <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-teal to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Mindset?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Get personalized guidance and support on your transformation
            journey.
          </p>
          <Link
            href="/contact"
            className="bg-sand text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold transition-all duration-300 inline-flex items-center"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
