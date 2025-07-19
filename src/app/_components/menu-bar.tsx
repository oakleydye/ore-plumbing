"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

const MENU_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
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
				<React.Suspense
					fallback={
						<div className="w-40 h-10 bg-gray-200 animate-pulse" />
					}
				>
					{/* Logo */}
					<Image
						src="/header_logo.webp"
						alt="O.R.E. Plumbing Logo"
						width={120}
						height={50}
						className={cn(
							"ml-10 transition-all duration-300 ease-in-out",
							scrolled
								? "w-[60px] h-[25px]"
								: "w-[120px] h-[50px]"
						)}
						priority
					/>
				</React.Suspense>        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <nav className="flex flex-col gap-6 p-6">
                <div className="font-bold text-lg mb-2 text-foreground">O.R.E. Plumbing</div>
                {MENU_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
