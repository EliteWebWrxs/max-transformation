"use client";

import Link from "next/link";
import { CheckCircle, Clock, Users, Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProgramsClient() {
  const programs = [
    {
      title: "Clarity Call",
      subtitle: "Build unshakeable self-confidence",
      price: "Free",
      duration: "60-Min",
      format: "Online or Phone",
      description: "build unshakeable self-confidence",
      features: [
        "Pinpoint Your Place on the 7-Step Roadmap",
        "Uncover Hidden Blocks",
        "Reframe + Mindset Shift",
        "Personalized Next Step Plan",
      ],
      popular: false,
      redirectLink: "https://calendly.com/diane-maxtransformationllc/60min",
    },
    {
      title: "Rewire & Rebuild Method",
      subtitle: "8-Week Transformation Program",
      price: "$597",
      duration: "8 weeks",
      format: "Live group coaching",
      description:
        "Deep dive into transforming your mindset with live coaching and community support.",
      features: [
        "Establish boundaries",
        "Recognize and honor your own value and needs",
        "Reclaim parts of yourself you thought were lost",
        "Step into the future with confidence not wearing a mask",
      ],
      popular: true,
    },
    {
      title: "1-on-1 VIP Coaching",
      subtitle: "Personalized Transformation",
      price: "$297",
      duration: "Per session",
      format: "Private coaching",
      description:
        "Intensive, personalized coaching tailored specifically to your unique challenges and goals.",
      features: [
        "Start Rewiring Negative Self-Talk",
        "Unlock the Root of Your Setback",
        "Create a Focused Next-Step Plan ",
        "Experience Coaching with Purpose",
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-navy to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Transform Your Mindset, Transform Your Life
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Choose the program that fits your needs and start your journey to
            unshakeable confidence today.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/REWIRE-AND-REBUILD-LOGO.png?height=1200&width=1920')`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`relative bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white border-opacity-50 ${
                    program.popular
                      ? "ring-4 ring-teal transform scale-105"
                      : ""
                  }`}
                >
                  {program.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-teal text-white text-center py-2 font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 ${program.popular ? "pt-16" : ""}`}>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{program.subtitle}</p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-charcoal">
                        {program.price}
                      </span>
                      {program.title !== "1-on-1 VIP Coaching" &&
                        program.title !== "Clarity Call" && (
                          <span className="text-gray-600">/program</span>
                        )}
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Clock size={16} className="mr-2" />
                      {program.duration}
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-6">
                      <Users size={16} className="mr-2" />
                      {program.format}
                    </div>

                    <p className="text-gray-700 mb-6">{program.description}</p>

                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle
                            className="text-teal mt-1 mr-3 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={program.redirectLink || "/contact"}
                      className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                        program.popular
                          ? "bg-teal text-white hover:bg-opacity-90"
                          : "bg-gray-100 text-charcoal hover:bg-gray-200"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Success Stories */}
      <div
        className="py-20 bg-gray-50 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(249, 250, 251, 0.9), rgba(249, 250, 251, 0.9))`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-16 text-center">
              Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white border-opacity-50">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-sand fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The Mindset Mastery program completely changed how I see
                  myself. I went from constant self-doubt to actually believing
                  in my abilities. The live coaching calls were incredible!"
                </p>
                <div>
                  <div className="font-semibold text-charcoal">Jennifer L.</div>
                  <div className="text-gray-600">Marketing Manager</div>
                </div>
              </div>

              <div className="bg-white bg-opacity-95 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white border-opacity-50">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-sand fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The 1-on-1 coaching was exactly what I needed. Diane helped
                  me identify and break through limiting beliefs I didn't even
                  know I had. Worth every penny!"
                </p>
                <div>
                  <div className="font-semibold text-charcoal">David M.</div>
                  <div className="text-gray-600">Entrepreneur</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* FAQ */}
      <div
        className="py-20 relative bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url('/REWIRE-AND-REBUILD-LOGO.png?height=1000&width=1920')`,
        }}
      >
        <AnimatedSection className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  question: "How do I know if this is for me?",
                  answer:
                    "If you're feeling stuck, overwhelmed, emotionally drained, or unsure of your next move, this is for you. Whether you're ready to reclaim your confidence, heal from a personal loss, or simply want to reconnect with yourself, this session will help you begin that journey.",
                },
                {
                  question:
                    "What makes this different from traditional coaching?",
                  answer:
                    "This isn't just “talk.” The Rewire & Rebuild approach blends emotional intelligence, mindset tools, and compassionate guidance to help you experience real transformation, not surface level motivation. You'll leave with clarity and a next step, not confusion or overwhelm.",
                },
                {
                  question: "What is the 60-Min Clarity Call?",
                  answer:
                    "The 60-Min Clarity Call is a powerful, judgment free coaching session using the Rewire & Rebuild Method™. It's designed to help you identify where you are in your healing or transformation journey, uncover hidden blocks, shift your mindset, and walk away with a personalized next step plan. It's more than just a conversation, it's a moment of clarity and momentum.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-6 bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-charcoal mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
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
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Don't let another day pass living with limiting beliefs. Your
              transformation starts now.
            </p>
            <Link
              href="https://calendly.com/diane-maxtransformationllc/30min"
              className="bg-sand text-charcoal px-8 py-4 rounded-full font-semibold hover:bg-gold transition-all duration-300 inline-flex items-center"
            >
              Book Your Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
