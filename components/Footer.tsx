"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Footer() {
  // useEffect(() => {
  //   // Animate footer elements on scroll
  //   gsap.fromTo(
  //     ".footer-animate",
  //     { opacity: 0, y: 30 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: ".footer-container",
  //         start: "top 80%",
  //         end: "bottom 20%",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, []);

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/books", label: "Books" },
    { href: "/contact", label: "Contact" },
  ];

  const programs = [
    { href: "/programs", label: "Confidence Builder" },
    { href: "/programs", label: "Mindset Mastery" },
    { href: "/programs", label: "1-on-1 Coaching" },
    { href: "/contact", label: "Free Consultation" },
  ];

  const resources = [
    { href: "/books", label: "Published Books" },
    { href: "/books", label: "Free Resources" },
    { href: "/contact", label: "Newsletter" },
    { href: "/contact", label: "Success Stories" },
  ];

  return (
    <footer className="footer-container bg-gradient-to-br from-charcoal via-navy to-charcoal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-sand rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="footer-animate border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Transform Your Mindset Weekly
              </h3>
              <p className="text-gray-300 mb-8">
                Get exclusive tips, exercises, and inspiration delivered to your
                inbox every week. Join 10,000+ people already transforming their
                lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-charcoal placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal"
                />
                <button className="bg-gradient-to-r from-teal to-charcoal px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Subscribe
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="footer-animate lg:col-span-2">
              <Link href="/" className="text-3xl font-bold mb-6 inline-block">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="/dianeLogo.webp"
                    alt="Max Transformation"
                    height={100}
                    width={100}
                    className="transition-all duration-300 group-hover:scale-110"
                    priority
                  />
                </div>
              </Link>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Empowering individuals to transform their inner dialogue, build
                unshakeable confidence, and create the life they deserve. Your
                mindset is your superpower.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <Mail size={20} className="mr-4 text-teal" />
                  <span>hello@maxtransformationcoach.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={20} className="mr-4 text-teal" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={20} className="mr-4 text-teal" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-full hover:bg-teal hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={20}
                      className="text-white group-hover:text-white"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-animate">
              <h4 className="text-xl font-bold mb-6 text-sand">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-sand transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight
                        size={16}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-animate">
              <h4 className="text-xl font-bold mb-6 text-gold">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link
                      href={program.href}
                      className="text-gray-300 hover:text-gold transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight
                        size={16}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-animate">
              <h4 className="text-xl font-bold mb-6 text-teal">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      href={resource.href}
                      className="text-gray-300 hover:text-teal transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight
                        size={16}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA Box */}
              <div className="mt-8 bg-gradient-to-r from-teal/20 to-gold/20 p-6 rounded-2xl border border-white/10">
                <h5 className="font-bold mb-2">Ready to Transform?</h5>
                <p className="text-sm text-gray-300 mb-4">
                  Book your free consultation today
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-charcoal px-4 py-2 rounded-full text-sm font-semibold hover:bg-sand transition-all duration-300 inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-animate border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-gray-400 text-sm">
                <span>
                  © {new Date().getFullYear()} Max Transformation. Made with
                </span>
                <Heart size={16} className="mx-2 text-red-400 fill-current" />
                <span>for transformation.</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-teal rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-16 w-2 h-2 bg-sand rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-gold rounded-full opacity-30 animate-pulse delay-500"></div>
    </footer>
  );
}
