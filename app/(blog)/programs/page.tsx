"use client";

import Link from "next/link";
import { CheckCircle, Clock, Users, Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Programs() {
  const programs = [
    {
      title: "Confidence Builder",
      subtitle: "4-Week Foundation Program",
      price: "$297",
      duration: "4 weeks",
      format: "Self-paced online",
      description:
        "Perfect for beginners ready to build unshakeable self-confidence from the ground up.",
      features: ["feature 1", "feature 2", "feature 3", "feature 4"],
      popular: false,
    },
    {
      title: "Rewire & Rebuild Method",
      subtitle: "8-Week Transformation Program",
      price: "$597",
      duration: "8 weeks",
      format: "Live group coaching",
      description:
        "Deep dive into transforming your mindset with live coaching and community support.",
      features: ["feature 1", "feature 2", "feature 3", "feature 4"],
      popular: true,
    },
    {
      title: "1-on-1 VIP Coaching",
      subtitle: "Personalized Transformation",
      price: "$197",
      duration: "Per session",
      format: "Private coaching",
      description:
        "Intensive, personalized coaching tailored specifically to your unique challenges and goals.",
      features: ["feature 1", "feature 2", "feature 3", "feature 4"],
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
                      {program.title !== "1-on-1 VIP Coaching" && (
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
                      href="/contact"
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
                  question: "FAQ 1",
                  answer:
                    "Book a free consultation call and we'll discuss your goals and challenges to determine the best fit for your needs.",
                },
                {
                  question: "FAQ 2",
                  answer:
                    "All programs come with a money-back guarantee. If you don't see improvement after completing the program, I'll refund your investment.",
                },
                {
                  question: "FAQ 3",
                  answer:
                    "The Confidence Builder requires 15-20 minutes daily. Mindset Mastery includes weekly 90-minute calls plus daily practice. 1-on-1 coaching is flexible based on your schedule.",
                },
                {
                  question: "FAQ 4",
                  answer:
                    "Yes! I offer 3-month payment plans for all programs. Contact me to discuss options that work for your budget.",
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
