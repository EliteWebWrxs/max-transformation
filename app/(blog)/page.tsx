"use client";

// import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
// import { gsap } from "gsap";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  // useEffect(() => {
  //   // Hero animation
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     ".hero-title",
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  //   )
  //     .fromTo(
  //       ".hero-subtitle",
  //       { opacity: 0, y: 30 },
  //       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  //       "-=0.5"
  //     )
  //     .fromTo(
  //       ".hero-cta",
  //       { opacity: 0, scale: 0.9 },
  //       { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
  //       "-=0.3"
  //     );
  // }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-charcoal text-white py-32 lg:py-40 overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sand rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="hero-title mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Silence Your
                <span className="block text-transparent bg-gradient-to-r from-sand to-gold bg-clip-text">
                  Inner Critic
                </span>
                <span className="block">Amplify Your</span>
                <span className="block text-teal">Confidence</span>
              </h1>
            </div>

            <p className="hero-subtitle text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform the voice in your head from your biggest enemy to your
              greatest ally. Join hundreds who've already rewritten their story.
            </p>

            <div className="hero-cta space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-teal to-charcoal text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
                >
                  Book Free Consultation
                  <ArrowRight
                    className="ml-3 group-hover:translate-x-1 transition-transform"
                    size={24}
                  />
                </Link>
                <Link
                  href="/programs"
                  className="border-2 border-sand text-sand px-10 py-5 rounded-full font-bold text-lg hover:bg-sand hover:text-charcoal transition-all duration-300"
                >
                  View Programs
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal rounded-full mr-2"></div>
                  Free 30-min call
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                  No pressure
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sand rounded-full mr-2"></div>
                  Instant clarity
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-8 w-4 h-4 bg-teal rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-3/4 right-12 w-6 h-6 bg-sand rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-gold rounded-full opacity-50 animate-pulse delay-500"></div>
      </section>

      {/* Social Proof */}
      <div className="py-16 bg-gray-50 relative bg-fixed bg-cover bg-center bg-no-repeat">
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-teal mb-2">500+</div>
                <p className="text-charcoal">Lives Transformed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-2">98%</div>
                <p className="text-charcoal">Success Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal mb-2">5★</div>
                <p className="text-charcoal">Average Rating</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Problem/Solution */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/remote-long-drive.jpg?height=800&width=800')`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
                Your Inner Critic is Holding You Back
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                That voice in your head telling you you're not good enough? It's
                time to rewrite the script and become your own biggest
                supporter.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Common Struggles:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Constant self-doubt and negative self-talk",
                    "Fear of failure preventing you from taking action",
                    "Comparing yourself to others constantly",
                    "Feeling stuck in limiting beliefs",
                    "Low confidence in personal and professional settings",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Your New Reality:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Empowering self-talk that builds you up",
                    "Confidence to pursue your biggest dreams",
                    "Freedom from comparison and self-judgment",
                    "Breakthrough limiting beliefs holding you back",
                    "Unshakeable self-worth and inner strength",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className="text-teal mt-1 mr-4 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Programs Preview */}
      <div
        className="py-20 bg-navy text-white relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 32, 56, 0.85), rgba(26, 32, 56, 0.85)) `,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Choose Your Transformation Path
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Personalized coaching programs designed to meet you where you
                are and take you where you want to be.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Confidence Builder",
                  description:
                    "4-week program to build unshakeable self-confidence",
                  price: "$297",
                },
                {
                  title: "Mindset Mastery",
                  description:
                    "8-week deep dive into transforming your mindset",
                  price: "$597",
                },
                {
                  title: "1-on-1 Coaching",
                  description:
                    "Personalized coaching tailored to your specific needs",
                  price: "$197/session",
                },
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20"
                >
                  <h3 className="text-2xl font-bold mb-4 text-sand">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{program.description}</p>
                  <div className="text-3xl font-bold mb-6">{program.price}</div>
                  <Link
                    href="/programs"
                    className="bg-teal text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Testimonials */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/remote-long-drive.jpg?height=800&width=800')`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
                Real Stories, Real Transformations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah M.",
                  role: "Marketing Executive",
                  content:
                    "I went from constant self-doubt to leading presentations with confidence. This program changed everything for me.",
                  rating: 5,
                },
                {
                  name: "Michael R.",
                  role: "Entrepreneur",
                  content:
                    "The mindset shift was incredible. I finally stopped sabotaging my success and started believing in myself.",
                  rating: 5,
                },
                {
                  name: "Lisa K.",
                  role: "Teacher",
                  content:
                    "My inner critic used to be so loud. Now I have tools to quiet it and speak to myself with kindness.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-sm"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-sand fill-current"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* CTA Section */}
      <div
        className="py-20 bg-gradient-to-r from-teal to-charcoal text-white relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.8), rgba(45, 55, 72, 0.8))`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Inner Voice?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Your journey to unshakeable confidence starts with a single step.
              Let's take it together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-sand text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold transition-all duration-300 flex items-center justify-center"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                href="/programs"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-charcoal transition-all duration-300"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
