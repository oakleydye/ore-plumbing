"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import clsx from "clsx";

// Example images (replace with your own or use Unsplash)
const images = ["/images/hero1.webp", "/images/hero2.webp", "/images/hero3.webp"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-primary/20">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Plumbing hero ${idx + 1}`}
            fill
            priority={idx === 0}
            className={clsx(
              "object-cover transition-opacity duration-1000 ease-in-out",
              current === idx ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground drop-shadow-lg mb-6">
          Reliable Plumbing <span className="text-primary">Solutions</span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 font-medium drop-shadow">
          Serving your home and business with 24/7 emergency service, honest
          pricing, and expert care.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-4 rounded-full shadow-lg transition"
        >
          Request a Free Estimate
        </Button>
        {/* Optional: Add a phone CTA below button */}
        <a
          href="tel:4358903316"
          className="mt-6 text-accent-foreground hover:text-foreground underline text-base transition-colors"
        >
          Or call us now: (435) 890-3316
        </a>
      </div>

      {/* Decorative bubbles */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
        <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-bounce-slow" />
        <div className="w-16 h-16 bg-accent/15 rounded-full blur-xl ml-[-40px] animate-bounce-slower" />
        <div className="w-24 h-24 bg-primary/10 rounded-full blur-lg ml-[-20px] animate-bounce-slowest" />
      </div>
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slow 7s infinite;
        }
        .animate-bounce-slowest {
          animation: bounce-slow 9s infinite;
        }
      `}</style>
    </section>
  );
}
