import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Home, 
  Phone, 
  Search,
  ArrowRight,
  Wrench
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found (404)",
  description: "The page you're looking for couldn't be found. Browse our plumbing services or contact O.R.E. Plumbing for assistance.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  {
    title: "Emergency Plumbing",
    description: "Need immediate help? Call us 24/7",
    href: "/services/emergency-repairs",
    icon: AlertTriangle,
    urgent: true,
  },
  {
    title: "All Services",
    description: "Browse our complete service offerings",
    href: "/services",
    icon: Wrench,
    urgent: false,
  },
  {
    title: "Contact Us",
    description: "Get in touch for quotes and scheduling",
    href: "/contact",
    icon: Phone,
    urgent: false,
  },
  {
    title: "About Us",
    description: "Learn more about our plumbing company",
    href: "/about",
    icon: Search,
    urgent: false,
  },
];

const popularServices = [
  { name: "Emergency Repairs", href: "/services/emergency-repairs" },
  { name: "Water Heater Service", href: "/services/water-heater" },
  { name: "Drain Cleaning", href: "/services/drain-cleaning" },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { name: "Pipe Repair", href: "/services/pipe-repair" },
  { name: "New Installation", href: "/services/residential-new-install" },
];

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-red-100 dark:bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
            <Badge variant="outline" className="mb-4 border-red-200 text-red-700 dark:border-red-800 dark:text-red-300">
              Error 404
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Page <span className="text-red-600">Not Found</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved, 
              deleted, or you may have entered the wrong URL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="destructive" asChild>
                <a href="tel:4358903316">
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Help: (435) 890-3316
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Would You Like to Go?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some popular sections of our website that might help you find what you're looking for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Card key={index} className={`h-full hover:shadow-lg transition-all duration-300 ${link.urgent ? 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/10' : ''}`}>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      link.urgent ? 'bg-red-500' : 'bg-primary'
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full" 
                      variant={link.urgent ? "destructive" : "default"}
                      asChild
                    >
                      <Link href={link.href}>
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Popular Plumbing Services</CardTitle>
              <CardDescription className="text-center">
                Looking for a specific plumbing service? Here are our most requested services.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {popularServices.map((service, index) => (
                  <Link 
                    key={index} 
                    href={service.href}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Still Need Help?</CardTitle>
              <CardDescription className="text-center">
                Can't find what you're looking for? We're here to help you get the plumbing services you need.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Phone className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Speak directly with our team
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:4358903316">(435) 890-3316</a>
                  </Button>
                </div>
                <div className="space-y-2">
                  <Search className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Browse Services</h3>
                  <p className="text-muted-foreground text-sm">
                    Explore all our plumbing services
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
                <div className="space-y-2">
                  <AlertTriangle className="w-8 h-8 text-red-600 mx-auto" />
                  <h3 className="font-semibold">Emergency?</h3>
                  <p className="text-muted-foreground text-sm">
                    24/7 emergency plumbing service
                  </p>
                  <Button variant="destructive" size="sm" asChild>
                    <Link href="/services/emergency-repairs">Get Emergency Help</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SEO Footer Note */}
      <section className="py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm text-muted-foreground">
            If you believe this is an error or if you were linked here from another website, 
            please <Link href="/contact" className="text-primary hover:underline">contact us</Link> and 
            let us know so we can fix the issue.
          </p>
        </div>
      </section>
    </div>
  );
}
