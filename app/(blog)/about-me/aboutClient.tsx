"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Target, Users, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutClient() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative py-32 lg:py-40 bg-gradient-to-br from-white via-gray-50 to-sand/20 overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(249, 250, 251, 0.85))`,
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-teal/20 to-gold/20 rounded-2xl transform rotate-3"></div>
                <Image
                  src="/diane.jpg?height=600&width=500"
                  alt="Diane - Mindset Coach"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl"
                />
                {/* Quote Bubble */}
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <p className="text-charcoal font-medium italic text-sm">
                    "Your relationship with yourself sets the tone for every
                    other relationship in your life."
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart size={16} className="mr-2" />
                Certified Mindset Coach
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-8 leading-tight">
                From Self-Doubt to
                <span className="block text-transparent bg-gradient-to-r from-teal to-navy bg-clip-text">
                  Self-Love
                </span>
              </h1>

              <div className="space-y-6 text-lg text-gray-700 mb-10">
                <p className="flex items-start">
                  <CheckCircle
                    className="text-teal mt-1 mr-4 flex-shrink-0"
                    size={20}
                  />
                  I've walked the path from crippling self-doubt to unshakeable
                  confidence
                </p>
                <p className="flex items-start">
                  <CheckCircle className="text-teal mt-1 mr-4 flex-shrink-0" />
                  Transformed my inner critic into my biggest cheerleader
                </p>
                <p className="flex items-start">
                  <CheckCircle
                    className="text-teal mt-1 mr-4 flex-shrink-0"
                    size={20}
                  />
                  Now I help others rewrite their story and reclaim their power
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-teal to-charcoal text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Let's Connect
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                {/* <Link
                  href="/programs"
                  className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 text-center"
                >
                  See How I Can Help
                </Link> */}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal">500+</div>
                  <div className="text-sm text-gray-600">Lives Changed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('/diane-adams-3.jpg?height=800&width=800')`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-8 text-center">
              My Story
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                I'm Diane Adams - CEO of <strong>Max Transformation LLC</strong>
                , creator of the <strong>Rewire & Rebuild Method</strong>, and a
                woman on a mission to help others rise from life's toughest
                setbacks.
              </p>

              <p className="text-xl mb-6">
                With 16 years of honourable service as a{" "}
                <strong>Disabled Army Veteran</strong>, I've experienced
                challenge, discipline, and deep transformation. My path didn't
                stop there - I've since become a{" "}
                <strong>
                  motivational speaker, certified life coach, four-time
                  best-selling author
                </strong>
                , and a strong advocate for personal empowerment and resilience.
              </p>

              <p className="text-xl mb-6">
                I also wear many hats professionally: I'm a trusted{" "}
                <strong>mobile and remote notary</strong>, an experienced{" "}
                <strong>loan signing agent</strong>, and a{" "}
                <strong>licensed life insurance agent</strong> dedicated to
                helping families access affordable protection.
              </p>

              <p className="text-xl mb-6">
                But at the core of it all, I believe in the power of{" "}
                <strong>positive self-talk</strong>, structure, and support. I
                coach with purpose helping women, teens, and overthinkers
                reframe their mindsets, rebuild their confidence, and reclaim
                control of their lives. My work is rooted in lived experience
                and a passion for guiding others through their own
                transformation.
              </p>

              <p className="text-xl mb-6">
                If you're ready to rewrite your story with clarity, courage, and
                compassion, I'm here to walk that road with you.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Values */}
      <div
        className="py-20 bg-gray-50 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.95), rgba(249, 250, 251, 0.95))`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-16 text-center">
              What I Believe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Self-Compassion First
                </h3>
                <p className="text-gray-700">
                  True transformation begins with treating yourself with the
                  same kindness you'd show a dear friend.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  Progress Over Perfection
                </h3>
                <p className="text-gray-700">
                  Small, consistent steps create lasting change. It's about
                  progress, not perfection.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-navy text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">
                  You're Not Alone
                </h3>
                <p className="text-gray-700">
                  Everyone struggles with self-doubt. The key is learning tools
                  to overcome it together.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* CTA */}
      <div
        className="py-20 bg-gradient-to-r from-teal to-charcoal text-white relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.8), rgba(45, 55, 72, 0.8))`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Let's work together to transform your inner voice and unlock your
              potential.
            </p>
            <Link
              href="https://calendly.com/diane-maxtransformationllc/30min"
              className="bg-sand text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold transition-all duration-300 inline-flex items-center"
            >
              Schedule Your Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
