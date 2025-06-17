"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Mindset",
    "Confidence",
    "Self-Talk",
    "Success Stories",
    "Tips & Tools",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Daily Habits That Will Transform Your Self-Talk",
      excerpt:
        "Discover the simple daily practices that can completely change how you speak to yourself and build lasting confidence.",
      content:
        "Your inner dialogue shapes your reality. These five powerful habits will help you transform negative self-talk into empowering thoughts that fuel your success...",
      author: "Diane Adams",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Self-Talk",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "The Science Behind Positive Affirmations",
      excerpt:
        "Learn why affirmations work and how to use them effectively to rewire your brain for success and confidence.",
      content:
        "Recent neuroscience research reveals fascinating insights about how positive affirmations actually change your brain structure...",
      author: "Diane Adams",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Mindset",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "From Self-Doubt to Self-Love: Diane's Journey",
      excerpt:
        "Read how Diane overcame 20 years of negative self-talk and built unshakeable confidence in just 8 weeks.",
      content:
        "Diane came to me feeling completely defeated. After two decades of harsh self-criticism, she was ready for change...",
      author: "Diane Adams",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Success Stories",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 4,
      title: "10 Confidence-Building Exercises You Can Do Today",
      excerpt:
        "Simple, practical exercises to boost your confidence immediately and start building lasting self-assurance.",
      content:
        "Confidence isn't something you're born with—it's a skill you can develop. Here are 10 proven exercises...",
      author: "Diane Adams",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Confidence",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "The Inner Critic vs. The Inner Coach",
      excerpt:
        "Learn to identify the difference between your inner critic and inner coach, and how to strengthen the voice that serves you.",
      content:
        "We all have multiple voices in our heads. The key is learning which ones to listen to and which ones to quiet...",
      author: "Diane Adams",
      date: "2023-12-20",
      readTime: "5 min read",
      category: "Self-Talk",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "Essential Tools for Mindset Transformation",
      excerpt:
        "A comprehensive guide to the tools and techniques that will accelerate your mindset transformation journey.",
      content:
        "Having the right tools makes all the difference in your transformation journey. Here's your complete toolkit...",
      author: "Diane Adams",
      date: "2023-12-15",
      readTime: "8 min read",
      category: "Tips & Tools",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="pt-16">
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

      {/* Search and Filter */}
      <AnimatedSection className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-teal text-white"
                      : "bg-white text-charcoal hover:bg-teal/10 hover:text-teal border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <AnimatedSection className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-charcoal mb-2">
                Featured Article
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-teal to-gold"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sand text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Tag size={16} className="mr-2" />
                    <span className="mr-4">{featuredPost.category}</span>
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <Clock size={16} className="mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-charcoal mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/posts/${featuredPost.id}`}
                    className="inline-flex items-center text-teal font-semibold hover:text-charcoal transition-colors duration-200"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Blog Posts Grid */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-charcoal mb-2">
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : selectedCategory === "All"
                  ? "Latest Articles"
                  : selectedCategory}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal to-gold"></div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search size={64} className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-teal text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-charcoal px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <User size={14} className="mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-3">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-teal transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/posts/${post.id}`}
                      className="inline-flex items-center text-teal font-semibold hover:text-charcoal transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}
