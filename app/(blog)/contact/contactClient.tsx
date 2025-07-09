"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Clock,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { gsap } from "gsap";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Hero animation
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     ".contact-hero-title",
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  //   )
  //     .fromTo(
  //       ".contact-hero-subtitle",
  //       { opacity: 0, y: 30 },
  //       { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
  //       "-=0.5"
  //     )
  //     .fromTo(
  //       ".contact-hero-cards",
  //       { opacity: 0, scale: 0.9 },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         duration: 0.6,
  //         ease: "back.out(1.7)",
  //         stagger: 0.1,
  //       },
  //       "-=0.3"
  //     );
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Simulate form submission
    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch("/api/email", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      setMessage("Thank you for contacting us. We'll respond within 24 hours.");
    } catch (error) {
      setMessage("Error sending message. Please try again");
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Book a Free Call",
      description: "60-minute consultation to discuss your goals",
      action: "Schedule Now",
      highlight: true,
      actionLink: "https://calendly.com/diane-maxtransformationllc/60min",
    },
    {
      icon: Mail,
      title: "Send a Message",
      description: "Get a response within 24 hours",
      action: "Email Me",
      highlight: false,
      type: "email",
      actionLink: "diane@maxtransformationllc.com",
    },
    {
      icon: Phone,
      title: "Call Directly",
      description: "Available during business hours",
      action: "Call Now",
      highlight: false,
      type: "phone",
      actionLink: "6144382532",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal via-charcoal to-navy text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-sand rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="contact-hero-title text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Transformation
              <span className="block text-transparent bg-gradient-to-r from-sand to-gold bg-clip-text">
                Starts Here
              </span>
            </h1>
            <p className="contact-hero-subtitle text-xl lg:text-2xl text-gray-200 mb-8">
              Ready to silence your inner critic and build unshakeable
              confidence? Let's connect and create your personalized roadmap to
              success.
            </p>
          </div>

          {/* Contact Method Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`contact-hero-cards relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
                  method.highlight
                    ? "bg-white/20 border-sand shadow-2xl ring-2 ring-sand/50"
                    : "bg-white/10 border-white/20 hover:bg-white/20"
                }`}
              >
                {method.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-sand text-charcoal px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      method.highlight
                        ? "bg-sand text-charcoal"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    <method.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                  <p className="text-gray-200 mb-6">{method.description}</p>
                  <Link
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      method.highlight
                        ? "bg-sand text-charcoal hover:bg-gold"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                    href={
                      method.type === "phone"
                        ? `tel:${method.actionLink}`
                        : method.type === "email"
                          ? `mailto:${method.actionLink}`
                          : method.actionLink
                    }
                  >
                    {method.action}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-charcoal mb-4">
                  Send Me a Message
                </h2>
                <p className="text-gray-600">
                  I'll get back to you within 24 hours
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">{message}</p>
                  {/* <div className="bg-teal/10 p-4 rounded-lg">
                    <p className="text-teal font-semibold">What's Next?</p>
                    <p className="text-gray-700 text-sm mt-2">
                      Check your email for a confirmation and some free
                      resources to get you started!
                    </p>
                  </div> */}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-charcoal mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-charcoal mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200"
                      placeholder="(614) 438-2532"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      I'm Most Interested In *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select your main interest</option>
                      <option value="free-consultation">
                        Free Consultation Call
                      </option>
                      <option value="confidence-builder">
                        Confidence Builder Program
                      </option>
                      <option value="mindset-mastery">
                        Mindset Mastery Program
                      </option>
                      <option value="1on1-coaching">1-on-1 VIP Coaching</option>
                      <option value="books">Books & Resources</option>
                      <option value="corporate">Corporate Training</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-charcoal mb-2"
                    >
                      Tell Me About Your Goals
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200"
                      placeholder="What challenges are you facing? What would you like to achieve? The more you share, the better I can help you."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal to-charcoal text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  >
                    Send My Message
                    <ArrowRight className="ml-3" size={24} />
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you'll also receive my weekly
                    mindset tips (you can unsubscribe anytime).
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info & Additional Content */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal/10 p-3 rounded-full mr-4">
                      <Mail className="text-teal" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">
                        Email Me
                      </h4>
                      <p className="text-gray-700 mb-1">
                        diane@maxtransformationllc.com
                      </p>
                      <p className="text-sm text-gray-500">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-gold/10 p-3 rounded-full mr-4">
                      <Phone className="text-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">
                        Call Me
                      </h4>
                      <p className="text-gray-700 mb-1">(614) 438-2532</p>
                      <p className="text-sm text-gray-500">
                        Available for consultation calls
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-sand/10 p-3 rounded-full mr-4">
                      <Clock className="text-sand" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">
                        Office Hours
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Monday - Friday: 9AM - 6PM PST
                      </p>
                      <p className="text-gray-700 text-sm">
                        Saturday: 10AM - 2PM PST
                      </p>
                      <p className="text-gray-700 text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-navy/10 p-3 rounded-full mr-4">
                      <MapPin className="text-navy" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal mb-1">
                        Location
                      </h4>
                      <p className="text-gray-700 mb-1">Tampa, FL</p>
                      <p className="text-sm text-gray-500">
                        Serving clients worldwide via video
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Consultation CTA */}
              <div className="bg-gradient-to-r from-teal to-charcoal p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="mb-6 text-gray-200">
                  Book your free 60-minute consultation and let's create your
                  transformation roadmap together.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle size={16} className="mr-2" />
                    Identify your biggest challenges
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle size={16} className="mr-2" />
                    Create a personalized action plan
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle size={16} className="mr-2" />
                    Discover which program fits you best
                  </div>
                </div>
                <Link
                  href="https://calendly.com/diane-maxtransformationllc/60min"
                  className="bg-sand text-charcoal px-8 py-4 rounded-full font-bold hover:bg-gold transition-all duration-300"
                >
                  Book Your Free Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-sand via-gold to-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Your New Chapter Starts Today
          </h2>
          <p className="text-xl text-charcoal mb-8 max-w-2xl mx-auto">
            Don't let another day pass living with limiting beliefs. Your
            transformation is just one conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://calendly.com/diane-maxtransformationllc/30min"
              className="bg-gradient-to-r from-teal to-charcoal text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Book Free Consultation
              <Calendar className="ml-3" size={24} />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
