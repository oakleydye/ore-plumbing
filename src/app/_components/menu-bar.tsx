"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "New Residential Installation",
        href: "/services/residential-new-install",
      },
      { label: "Commercial Plumbing", href: "/services/commercial" },
      { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
      {
        label: "Water Softener Installation",
        href: "/services/water-softeners",
      },
      { label: "Water Heater Services", href: "/services/water-heater" },
      { label: "Pipe Repair & Installation", href: "/services/pipe-repair" },
      { label: "Drain Cleaning", href: "/services/drain-cleaning" },
      // { label: "Emergency Repairs", href: "/services/emergency-repairs" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function MenuBar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-background/80 backdrop-blur border-b border-border",
        scrolled ? "h-14 shadow-sm" : "h-20"
      )}
    >
      <nav className="container flex items-center justify-between h-full">
        <a href="/">
          <React.Suspense
            fallback={<div className="w-40 h-10 bg-gray-200 animate-pulse" />}
          >
            {/* Logo */}
            <Image
              src="/header_logo.webp"
              alt="O.R.E. Plumbing Logo"
              width={200}
              height={60}
              className={cn("ml-10 transition-all duration-300 ease-in-out")}
              priority
            />
          </React.Suspense>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
            {MENU_ITEMS.map((item) => (
              <li key={item.href} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <a
                      href={item.href}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </a>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border"
                        >
                          All Services
                        </a>
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2 pr-4">
          {/* <ThemeToggle /> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="lg"
                className="p-4"
                aria-label="Open menu"
              >
                <Menu className="w-10 h-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <nav className="flex flex-col gap-4 p-6">
                <div className="font-bold text-lg mb-2 text-foreground">
                  O.R.E. Plumbing
                </div>
                {MENU_ITEMS.map((item) => (
                  <div key={item.href} className="flex flex-col">
                    <a
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.submenu && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
