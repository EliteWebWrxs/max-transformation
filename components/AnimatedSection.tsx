"use client";

import type React from "react";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;

    let animationProps = {};

    switch (animation) {
      case "fadeUp":
        animationProps = { y: 50, opacity: 0 };
        break;
      case "fadeIn":
        animationProps = { opacity: 0 };
        break;
      case "slideLeft":
        animationProps = { x: -50, opacity: 0 };
        break;
      case "slideRight":
        animationProps = { x: 50, opacity: 0 };
        break;
    }

    gsap.fromTo(element, animationProps, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  }, [animation]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
