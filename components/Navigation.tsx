"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Initial animation
    // gsap.fromTo(
    //   ".nav-item",
    //   { opacity: 0, y: -20 },
    //   { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2 }
    // );

    // Scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-me", label: "About" },
    {
      href: "/programs",
      label: "Programs",
      dropdown: [
        { href: "/programs", label: "All Programs" },
        { href: "/programs#confidence-builder", label: "Confidence Builder" },
        { href: "/programs#mindset-mastery", label: "Rewire & Rebuild" },
        { href: "/programs#vip-coaching", label: "1-on-1 Coaching" },
      ],
    },
    { href: "/books", label: "Books" },
    { href: "/posts", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
          : "bg-white shadow-lg py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="nav-item flex items-center group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/dianeLogo.webp"
                  alt="Max Transformation"
                  height={isScrolled ? 45 : 55}
                  width={isScrolled ? 45 : 55}
                  className="transition-all duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              {/* <div className="ml-3 hidden sm:block">
                <div className="text-xl font-bold text-charcoal group-hover:text-teal transition-colors duration-200">
                  Max Transformation
                </div>
                <div className="text-xs text-gray-500 -mt-1">Mindset Coach</div>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`nav-item px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center ${
                    pathname === item.href ||
                    (item.dropdown &&
                      item.dropdown.some((sub) => pathname === sub.href))
                      ? "text-teal bg-teal/10"
                      : "text-charcoal hover:text-teal hover:bg-teal/5"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className="ml-1 group-hover:rotate-180 transition-transform duration-200"
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-charcoal hover:text-teal hover:bg-teal/5 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="https://calendly.com/diane-maxtransformationllc/60min"
              className="nav-item ml-4 bg-gradient-to-r from-teal to-charcoal text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isOpen
                  ? "text-teal bg-teal/10"
                  : "text-charcoal hover:text-teal hover:bg-teal/5"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "text-teal bg-teal/10"
                      : "text-charcoal hover:text-teal hover:bg-teal/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.dropdown.slice(1).map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-teal hover:bg-teal/5 rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="https://calendly.com/diane-maxtransformationllc/60min"
                className="block w-full bg-gradient-to-r from-teal to-charcoal text-white text-center px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
