import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-12 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">O.R.E. Plumbing</h3>
            <p className="text-sm text-muted-foreground">
              Professional plumbing services in northern Utah. 
              Serving residential and commercial customers with excellence.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" asChild>
                <a href="tel:4358903316">Call Now</a>
              </Button>
              <Button size="sm" asChild>
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/residential-new-install" className="text-muted-foreground hover:text-primary transition-colors">New Installation</a></li>
              <li><a href="/services/commercial" className="text-muted-foreground hover:text-primary transition-colors">Commercial Plumbing</a></li>
              <li><a href="/services/bathroom-remodeling" className="text-muted-foreground hover:text-primary transition-colors">Bathroom Remodeling</a></li>
              <li><a href="/services/water-softeners" className="text-muted-foreground hover:text-primary transition-colors">Water Softeners</a></li>
              <li><a href="/services/water-heater" className="text-muted-foreground hover:text-primary transition-colors">Water Heater Service</a></li>
              {/* <li><a href="/services/emergency-repairs" className="text-muted-foreground hover:text-primary transition-colors">Emergency Repairs</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:4358903316" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  (435) 890-3316
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@oreplumbing.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@oreplumbing.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Logan, Utah
                </span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  24/7 Emergency Service
                </span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              {/* <li><a href="/services/emergency-repairs" className="text-muted-foreground hover:text-primary transition-colors">Emergency Service</a></li> */}
              <li><a href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Customer Reviews</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <Card className="mt-8 p-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} O.R.E. Plumbing. All rights reserved. Powered by <a href="https://oakleydye.com" rel="noopener noreferrer" target="_blank" className="text-primary hover:underline">Oakley Dye Software & Design</a>.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground">
                Licensed & Insured
              </span>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}
